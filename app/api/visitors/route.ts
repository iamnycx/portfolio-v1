export async function GET() {
  const response = await fetch(
    `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          kind: "HogQLQuery",
          query: `SELECT count(DISTINCT person_id) FROM events WHERE event = '$pageview' AND timestamp >= '2020-01-01'`,
        },
      }),
      next: { revalidate: 3600 },
    },
  );

  const data = await response.json();
  const total = data.results?.[0]?.[0] ?? 0;

  return Response.json({ total });
}
