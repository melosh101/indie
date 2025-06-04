import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submit = mutation({
	args: {
		firstName: v.string(),
		lastName: v.string(),
		email: v.string(),
		website: v.string(),
		message: v.string(),
	},
	handler: async (ctx, args) => {
		const { firstName, lastName, email, website, message } = args;
		const contact = {
			firstName,
			lastName,
			email,
			website,
			message,
		};
		const id = await ctx.db.insert("contact", contact);
		return await ctx.db.get(id);
	},
});
