let server;
try {
  const serverDefault = await import('./server/server.js');
  server = serverDefault.default || serverDefault;
} catch (importError) {
  console.error('[API] Failed to import server:', importError.message);
  // Create an error handler that returns the import error details
  server = {
    fetch: async () => {
      return new Response(
        JSON.stringify({
          error: 'Server import failed',
          details: importError.message,
          type: importError.constructor.name
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };
}

export default async function handler(req, res) {
  try {
    console.log(`[API] Request: ${req.method} ${req.url}`);

    // Extract the original path from the rewritten URL
    let pathname = req.url || '/';
    if (pathname.startsWith('/api')) {
      pathname = pathname.slice(4) || '/';
    }
    
    console.log(`[API] Routing to: ${pathname}`);

    // Create fetch request
    const url = new URL(pathname, `http://${req.headers.host}`);
    const fetchReq = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? null : req,
    });

    // Call TanStack Start server
    const fetchRes = await server.fetch(fetchReq, {}, {});

    console.log(`[API] Response: ${fetchRes.status}`);

    // Send response
    res.status(fetchRes.status);
    
    // Copy response headers
    fetchRes.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });

    res.send(await fetchRes.text());
  } catch (error) {
    console.error('[API] Handler error:', error);
    res.status(500).json({ 
      error: 'Handler error',
      message: error.message,
      stack: error.stack
    });
  }
}
