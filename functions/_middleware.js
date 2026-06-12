export async function onRequest(context) {
  try {
    const serverModule = await import('../dist/server/server.js');
    const handler = serverModule.default || serverModule.fetch;
    
    if (typeof handler === 'function') {
      return handler(context.request);
    }
    
    return new Response('Server not ready', { status: 503 });
  } catch (error) {
    console.error('Error in middleware:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
