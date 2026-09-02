"use client";

import { useState } from "react";
import { locations, timeSlots } from "@/lib/data";

export default function ReservationForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      partySize: Number(data.get("partySize")),
      reservationDate: data.get("reservationDate"),
      reservationTime: data.get("reservationTime"),
      occasion: data.get("occasion"),
      dietaryNotes: data.get("dietaryNotes"),
      location: data.get("location"),
    };

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-green-700 text-white">✓</div>
        <h3 className="font-display text-xl font-semibold text-green-950">Request received</h3>
        <p className="mt-2 text-sm text-green-800">
          Thank you — a reservationist will confirm your table by email within 24 hours. This is a demo
          confirmation; no real booking has been made.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-full border border-green-700 px-5 py-2 text-sm font-semibold text-green-800 hover:bg-green-100"
        >
          Book another table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input required name="fullName" className="input" placeholder="Jane Appleseed" />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" className="input" placeholder="jane@email.com" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone">
          <input required name="phone" className="input" placeholder="(555) 000-0000" />
        </Field>
        <Field label="Party size">
          <select required name="partySize" className="input" defaultValue="2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Date">
          <input required type="date" name="reservationDate" className="input" />
        </Field>
        <Field label="Time">
          <select required name="reservationTime" className="input" defaultValue="">
            <option value="" disabled>Select a time</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Location">
            <select name="location" className="input" defaultValue={locations[0].name}>
              {locations.slice(0, 2).map((l) => (
                <option key={l.id} value={l.name}>{l.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Occasion (optional)">
            <input name="occasion" className="input" placeholder="Anniversary, birthday..." />
          </Field>
        </div>
      )}
      {!compact && (
        <Field label="Dietary restrictions or notes">
          <textarea name="dietaryNotes" rows={3} className="input resize-none" placeholder="Allergies, seating preference, celebration details..." />
        </Field>
      )}

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-700 disabled:opacity-60"
      >
        {status === "loading" ? "Sending request…" : "Request Reservation"}
      </button>
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(20, 60, 40, 0.15);
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: #0b2a1c;
          background: white;
        }
        .input:focus {
          outline: none;
          border-color: #ea580c;
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-green-800/80">{label}</span>
      {children}
    </label>
  );
}
