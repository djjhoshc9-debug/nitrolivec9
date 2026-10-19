import type { APIRoute } from "astro";

let downloads: Record<string, number> = {};

export const GET: APIRoute = ({ url }) => {
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing id" }), {
      status: 400
    });
  }

  downloads[id] = (downloads[id] || 0) + 1;

  return new Response(
    JSON.stringify({ id, downloads: downloads[id] }),
    { status: 200 }
  );
};