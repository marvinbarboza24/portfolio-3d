interface Env {
  VISITS: KVNamespace;
}

const KEY = "total";

const json = (data: { count: number }) =>
  new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const readCount = async (env: Env) => {
  const raw = await env.VISITS.get(KEY);
  const count = Number(raw);
  return Number.isFinite(count) ? count : 0;
};

const isBot = (userAgent: string | null) =>
  /bot|crawl|spider|preview|slurp|facebookexternalhit|bingpreview/i.test(userAgent ?? "");

export const onRequestGet: PagesFunction<Env> = async (context) => {
  return json({ count: await readCount(context.env) });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  if (isBot(context.request.headers.get("user-agent"))) {
    return json({ count: await readCount(context.env) });
  }

  const count = (await readCount(context.env)) + 1;
  await context.env.VISITS.put(KEY, String(count));
  return json({ count });
};
