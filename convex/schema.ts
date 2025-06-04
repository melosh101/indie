import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    contact: defineTable({
        firstName: v.string(),
        lastName: v.string(),
        email: v.string(),
        website: v.string(),
        message: v.string(),
    }),
    conversion: defineTable({
        month: v.string(),
        rate: v.number()
    }),
    visibility: defineTable({
        month: v.string(),
        client: v.number(),
        competitor1: v.number(),
        competitor2: v.number(),
    }),
    traffic: defineTable({
        month: v.string(),
        visitors: v.number(),
        organic: v.number(),
    })
})