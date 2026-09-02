import { NextResponse } from "next/server";
import { db } from "@/db";
import { eventInquiries } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, eventType, guestCount } = body;

    if (!fullName || !email || !phone || !eventType || !guestCount) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const [created] = await db
      .insert(eventInquiries)
      .values({
        fullName,
        email,
        phone,
        eventType,
        guestCount: Number(guestCount),
        preferredDate: body.preferredDate || null,
        message: body.message || null,
      })
      .returning();

    return NextResponse.json({ inquiry: created }, { status: 201 });
  } catch (error) {
    console.error("Failed to create event inquiry", error);
    return NextResponse.json({ error: "Unable to submit inquiry." }, { status: 500 });
  }
}
