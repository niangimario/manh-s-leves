import serverDefault from '../dist/server/server.js';

const server = serverDefault.default || serverDefault;

export default async function handler(req, res) {
  console.log(`[API] ${req.method} ${req.url}`);
  
  try {
    // Convert Node.js req to Fetch API Request
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    console.log(`[API] Calling server.fetch for ${url.pathname}`);

    // Get response from TanStack Start server
    const fetchRes = await server.fetch(fetchReq, {}, {});

    console.log(`[API] Server responded with ${fetchRes.status}`);

    // Send response
    res.status(fetchRes.status);
    
    // Copy headers
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
