import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    await db
      .insert(newsletterSubscribers)
      .values({ email })
      .onConflictDoUpdate({
        target: newsletterSubscribers.email,
        set: { createdAt: sql`now()` },
      });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to subscribe", error);
    return NextResponse.json({ error: "Unable to subscribe." }, { status: 500 });
  }
}
