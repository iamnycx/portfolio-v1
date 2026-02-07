import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://app.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
      },
    },
  );

  const data = await res.json();

  const pageviewInsight = data.results.find((i: any) => i.name === "$pageview");

  const count = pageviewInsight?.results?.[0]?.count ?? 0;

  return NextResponse.json({ visitors: count });
}
