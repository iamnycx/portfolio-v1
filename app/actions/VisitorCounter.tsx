"use server";

export async function getVisitorCount() {
  try {
    const response = await fetch(
      `https://us.i.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights/trends/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        },
        body: JSON.stringify({
          events: [{ id: "$pageview", type: "events" }],
          date_from: "-90d",
          display: "ActionsLineGraph",
          interval: "day",
          properties: [],
          breakdown: null,
          insight: "TRENDS",
          filter_test_accounts: false,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch visitor count");
    }

    const data = await response.json();
    const totalVisitors = data.result[0]?.count ?? 0;

    return totalVisitors;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    throw error;
  }
}
