export async function onRequest({ params, env }) {
  const key = `assets/${params.path}`;
  console.log(`Fetching R2 key: ${key}`);
  const object = await env.MY_BUCKET.get(key);
  if (!object) {
    console.log(`Object not found for key: ${key}`);
    return new Response(`Asset "${key}" not found`, { status: 404 });
  }
  console.log(`Content-Type: ${object.httpMetadata.contentType}`);
  const headers = new Headers();
  headers.set("Content-Type", object.httpMetadata.contentType || "application/octet-stream");
  headers.set("Cache-Control", "max-age=31536000");
  headers.set("Access-Control-Allow-Origin", "www.samarthshroff.com");
  return new Response(object.body, { headers });
}