const http    = require('http');
const fs      = require('fs');
const path    = require('path');
const os      = require('os');
const QRCode  = require('qrcode');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_DOMAIN = process.env.RAILWAY_PUBLIC_DOMAIN || null;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

/* ── Static file server + API ── */
let cachedIP = 'localhost';

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // API: server info + QR code for player URL
  if (urlPath === '/api/info') {
    const QR_COLORS = {
      clasic:    { dark: '#FFD700', light: '#0A0A0F' },
      cobalt:    { dark: '#818CF8', light: '#0F172A' },
      brutalist: { dark: '#FFFFFF', light: '#080808' },
    };
    const parsedUrl = new URL(req.url, 'http://localhost');
    const theme = parsedUrl.searchParams.get('theme') || 'clasic';
    const colors = QR_COLORS[theme] || QR_COLORS.clasic;
    const playerUrl = PUBLIC_DOMAIN
      ? `https://${PUBLIC_DOMAIN}/player.html`
      : `http://${cachedIP}:${PORT}/player.html`;
    QRCode.toDataURL(playerUrl, { width: 220, margin: 1, color: colors }, (err, dataUrl) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ playerUrl, qrDataUrl: err ? null : dataUrl }));
    });
    return;
  }

  const filePath = path.normalize(path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found: ' + urlPath); return; }
    const mime = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

/* ── WebSocket relay + lobby tracking ── */
const wss = new WebSocketServer({ server });
const clients = new Set();
const playerData = new Map(); // ws → {name, avatar}

function broadcastLobby() {
  const players = [...playerData.values()];
  const msg = JSON.stringify({ type: 'lobby', players });
  for (const c of clients) {
    if (c.readyState === 1) c.send(msg);
  }
}

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log(`[WS] conectat  (total: ${clients.size})`);

  // Send current lobby state to the new client immediately
  if (playerData.size > 0) {
    ws.send(JSON.stringify({ type: 'lobby', players: [...playerData.values()] }));
  }

  ws.on('message', (raw) => {
    const str = raw.toString();
    try {
      const msg = JSON.parse(str);

      if (msg.type === 'join') {
        // Register phone player — don't relay, just update lobby
        if (msg.name) {
          const name = msg.name.toUpperCase().trim();
          playerData.set(ws, { name, avatar: msg.avatar || {} });
          console.log(`[LOBBY] ${name} s-a alăturat`);
          broadcastLobby();
        }
        return;
      }

      if (msg.type === 'leave') {
        playerData.delete(ws);
        broadcastLobby();
        return;
      }
    } catch (_) {}

    // Relay everything else to all other clients
    for (const c of clients) {
      if (c !== ws && c.readyState === 1) c.send(str);
    }
  });

  ws.on('close', () => {
    const data = playerData.get(ws);
    clients.delete(ws);
    playerData.delete(ws);
    if (data) {
      console.log(`[LOBBY] ${data.name} a plecat`);
      broadcastLobby();
    }
    console.log(`[WS] deconectat (total: ${clients.size})`);
  });

  ws.on('error', () => {
    playerData.delete(ws);
    clients.delete(ws);
  });
});

/* ── Start ── */
function getLocalIP() {
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const iface of ifaces) {
      if (iface.family === 'IPv4' && !iface.internal) return iface.address;
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  cachedIP = PUBLIC_DOMAIN || ip;
  const base = PUBLIC_DOMAIN ? `https://${PUBLIC_DOMAIN}` : `http://${ip}:${PORT}`;
  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║       JOCUL CUVINTELOR — SERVER PORNIT       ║');
  console.log('╠══════════════════════════════════════════════╣');
  if (PUBLIC_DOMAIN) {
    console.log(`║  TV / Joc    →  ${base}`);
    console.log(`║  Prezentator →  ${base}/#presenter`);
    console.log(`║  Jucători    →  ${base}/player.html`);
  } else {
    console.log(`║  TV / Joc    →  http://localhost:${PORT}`);
    console.log(`║  Prezentator →  http://localhost:${PORT}/#presenter`);
    console.log(`║  Jucători    →  ${base}/player.html`);
  }
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
});
