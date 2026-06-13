import serverDefault from './server/server.js';

const server = serverDefault.default || serverDefault;

export default async function handler(req, res) {
  try {
    // Extract the original path from the rewritten URL
    // When rewrite /(.*) → /api/$1 happens, req.url will be /api/original-path
    // We need to strip the /api prefix to get the original path
    let pathname = req.url || '/';
    if (pathname.startsWith('/api')) {
      pathname = pathname.slice(4) || '/'; // Remove /api prefix, default to / if empty
    }
    
    console.log(`[API] Handler: method=${req.method}, original_path=${pathname}`);

    // Create fetch request with original path
    const url = new URL(pathname, `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    // Call TanStack Start server
    const fetchRes = await server.fetch(fetchReq, {}, {});

    console.log(`[API] Response: ${fetchRes.status} for ${pathname}`);

    // Send response
    res.status(fetchRes.status);
    
    // Copy response headers (skip content-encoding to avoid conflicts)
    fetchRes.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });

    res.send(await fetchRes.text());
  } catch (error) {
    console.error('[API] Server error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
