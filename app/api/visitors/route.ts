import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://us.i.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query/`,
    {
      method: "POST",
      next: { revalidate: 300 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
      },
      body: JSON.stringify({
        query: {
          kind: "HogQLQuery",
          query: `
            SELECT COUNT(DISTINCT person_id)
            FROM events
            WHERE event = 'pageview'
        `,
        },
        name: "total_unique_visitors",
      }),
    },
  );

  const data = await res.json();

  const count = data?.results?.[0]?.[0] ?? 0;

  return NextResponse.json({ visitors: count });
}
