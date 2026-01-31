import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = searchParams.get("days") || "7";

  try {
    const response = await fetch(
      `https://app.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/trend/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: [
            {
              id: "$pageview",
              type: "events",
              math: "dau",
            },
          ],
          date_from: `-${days}d`,
          display: "ActionsLineGraph",
        }),
      },
    );

    const data = await response.json();

    const totalVisitors = data.result?.[0]?.count || 0;

    return NextResponse.json({
      count: totalVisitors,
      period: `${days} days`,
    });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { error: "Failed to fetch visitor count" },
      { status: 500 },
    );
  }
}
