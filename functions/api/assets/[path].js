export async function onRequest({ params, env }) {
  try {
    console.log("Function invoked for route: /api/assets/" + params.path);
    const key = `assets/${params.path}`;
    console.log(`Requested path: ${params.path}`);
    console.log(`Fetching R2 key: ${key}`);
    
    const object = await env.MY_BUCKET.get(key);
    if (!object) {
      console.log(`Object not found for key: ${key}`);
      return new Response(`Asset "${key}" not found`, { 
        status: 404,
        headers: { "Content-Type": "text/plain" } // Avoid text/html for 404
      });
    }

    console.log(`Object found, Content-Type: ${object.httpMetadata.contentType}`);
    const headers = new Headers();
    // Ensure Content-Type is set correctly
    const contentType = object.httpMetadata.contentType || "application/octet-stream";
    headers.set("Content-Type", contentType);
    headers.set("Cache-Control", "max-age=31536000");
    headers.set("Access-Control-Allow-Origin", "*");
    return new Response(object.body, { headers });
  } catch (error) {
    console.log(`Error fetching asset: ${error.message}`);
    return new Response(`Internal Server Error: ${error.message}`, { 
      status: 500,
      headers: { "Content-Type": "text/plain" }
    });
  }
}