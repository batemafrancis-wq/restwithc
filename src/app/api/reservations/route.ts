import { NextResponse } from "next/server";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, partySize, reservationDate, reservationTime } = body;

    if (!fullName || !email || !phone || !partySize || !reservationDate || !reservationTime) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const [created] = await db
      .insert(reservations)
      .values({
        fullName,
        email,
        phone,
        partySize: Number(partySize),
        reservationDate,
        reservationTime,
        occasion: body.occasion || null,
        dietaryNotes: body.dietaryNotes || null,
        location: body.location || undefined,
      })
      .returning();

    return NextResponse.json({ reservation: created }, { status: 201 });
  } catch (error) {
    console.error("Failed to create reservation", error);
    return NextResponse.json({ error: "Unable to submit reservation." }, { status: 500 });
  }
}

export async function GET() {
  const rows = await db.select().from(reservations).orderBy(desc(reservations.createdAt)).limit(50);
  return NextResponse.json({ reservations: rows });
}
