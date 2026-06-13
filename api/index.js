import serverDefault from '../dist/server/server.js';

const server = serverDefault.default || serverDefault;

export default async function handler(req, res) {
  try {
    // Convert Node.js req to Fetch API Request
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    // Get response from TanStack Start server
    const fetchRes = await server.fetch(fetchReq, {}, {});

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
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
