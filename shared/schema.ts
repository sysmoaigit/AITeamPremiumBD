import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  whatsapp: text("whatsapp").notNull(),
  service: text("service"),
  needs: text("needs").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts)
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters"),
    whatsapp: z
      .string()
      .min(10, "Please enter a valid WhatsApp number")
      .regex(/^[\+\d\s\-\(\)]+$/, "Please enter a valid phone number"),
    service: z.string().optional(),
    needs: z.string().min(10, "Please describe your needs in at least 10 characters"),
  });

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
