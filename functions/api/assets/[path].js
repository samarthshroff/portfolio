export async function onRequest({ params, env }) {
  // Capture the full path after /api/assets/
  const key = `assets/${params.path}`;
  
  const object = await env.MY_BUCKET.get(key);
  if (!object) {
    return new Response(`Asset "${key}" not found`, { status: 404 });
  }

  const headers = new Headers();
  headers.set("Content-Type", object.httpMetadata.contentType || "application/octet-stream");
  headers.set("Cache-Control", "max-age=31536000"); // Optional: cache for 1 year

  return new Response(object.body, { headers });
}