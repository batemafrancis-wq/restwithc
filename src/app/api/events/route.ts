import { NextResponse } from "next/server";

const mockInquiries = [
  {
    id: 1,
    fullName: "Rosa Chen",
    email: "rosa@example.com",
    phone: "(555) 910-2040",
    eventType: "Birthday Dinner",
    guestCount: 18,
    preferredDate: "2026-09-18",
    message: "Looking for a private room for a milestone birthday",
    createdAt: "2026-09-01T12:00:00.000Z",
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, eventType, guestCount } = body;

    if (!fullName || !email || !phone || !eventType || !guestCount) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const inquiry = {
      id: Date.now(),
      fullName,
      email,
      phone,
      eventType,
      guestCount: Number(guestCount),
      preferredDate: body.preferredDate || null,
      message: body.message || null,
      createdAt: new Date().toISOString(),
    };

    mockInquiries.unshift(inquiry);

    return NextResponse.json({ inquiry, status: "mocked" }, { status: 201 });
  } catch (error) {
    console.error("Failed to create event inquiry", error);
    return NextResponse.json({ error: "Unable to submit inquiry." }, { status: 500 });
  }
}
