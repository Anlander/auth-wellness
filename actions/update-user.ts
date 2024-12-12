"use server";

import { db } from "@/lib/db";
import * as z from "zod";

const UpdateUserSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional().optional(),
});

export const updateUser = async (values: z.infer<typeof UpdateUserSchema>) => {
  const validatedFields = UpdateUserSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { id, name, email } = validatedFields.data;

  try {
    await db.user.update({
      where: { id },
      data: { name, email },
    });
    return { success: "User updated successfully!" };
  } catch (error) {
    return { error: "Failed to update user!" };
  }
};
