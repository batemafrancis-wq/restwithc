"use client";

import { useState } from "react";
import { eventTypes } from "@/lib/data";

export default function EventInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      eventType: data.get("eventType"),
      guestCount: Number(data.get("guestCount")),
      preferredDate: data.get("preferredDate") || null,
      message: data.get("message"),
    };
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-orange-600 text-white">✓</div>
        <h3 className="font-display text-xl font-semibold text-green-950">Inquiry sent</h3>
        <p className="mt-2 text-sm text-green-800">
          Our events coordinator will reach out within two business days with availability and a proposal.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Full name</span>
          <input required name="fullName" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Email</span>
          <input required type="email" name="email" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Phone</span>
          <input required name="phone" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Guest count</span>
          <input required type="number" min={1} name="guestCount" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Event type</span>
          <select required name="eventType" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" defaultValue="">
            <option value="" disabled>Select an event type</option>
            {eventTypes.map((e) => (
              <option key={e.title} value={e.title}>{e.title}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Preferred date</span>
          <input type="date" name="preferredDate" className="w-full rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">Tell us about your event</span>
        <textarea name="message" rows={4} className="w-full resize-none rounded-2xl border border-green-900/15 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none" />
      </label>
      {status === "error" && <p className="text-sm text-red-700">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-green-800 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-green-900 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
