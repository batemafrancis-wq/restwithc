import { NextResponse } from "next/server";

const mockReservations = [
  {
    id: 1,
    fullName: "Avery Smith",
    email: "avery@example.com",
    phone: "(555) 010-0421",
    partySize: 2,
    reservationDate: "2026-09-10",
    reservationTime: "7:30 PM",
    occasion: "Anniversary",
    dietaryNotes: "Window seat if available",
    location: "Umami — Flagship, Hillcrest",
    status: "pending",
    createdAt: "2026-09-01T18:00:00.000Z",
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, partySize, reservationDate, reservationTime } = body;

    if (!fullName || !email || !phone || !partySize || !reservationDate || !reservationTime) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const reservation = {
      ...body,
      id: Date.now(),
      partySize: Number(partySize),
      location: body.location || "Umami — Flagship, Hillcrest",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    mockReservations.unshift(reservation);

    return NextResponse.json({ reservation, status: "mocked" }, { status: 201 });
  } catch (error) {
    console.error("Failed to create reservation", error);
    return NextResponse.json({ error: "Unable to submit reservation." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ reservations: mockReservations });
}
