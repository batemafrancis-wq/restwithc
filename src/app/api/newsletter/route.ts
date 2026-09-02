import { NextResponse } from "next/server";

const mockSubscribers = ["hello@umami-restaurant.com"];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (!mockSubscribers.includes(email)) {
      mockSubscribers.push(email);
    }

    return NextResponse.json({ success: true, mode: "mock" }, { status: 201 });
  } catch (error) {
    console.error("Failed to subscribe", error);
    return NextResponse.json({ error: "Unable to subscribe." }, { status: 500 });
  }
}
