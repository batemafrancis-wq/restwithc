import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

// Table reservation requests submitted through the booking widget
export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  partySize: integer("party_size").notNull(),
  reservationDate: date("reservation_date").notNull(),
  reservationTime: varchar("reservation_time", { length: 20 }).notNull(),
  occasion: varchar("occasion", { length: 80 }),
  dietaryNotes: text("dietary_notes"),
  location: varchar("location", { length: 120 }).default("Umami — Flagship, Hillcrest"),
  status: varchar("status", { length: 20 }).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Private dining / group event inquiries
export const eventInquiries = pgTable("event_inquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  eventType: varchar("event_type", { length: 80 }).notNull(),
  guestCount: integer("guest_count").notNull(),
  preferredDate: date("preferred_date"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Newsletter / mailing list signups from the footer and shop pages
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 160 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
