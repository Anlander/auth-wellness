"use server";

import { getAllUsers } from "@/data/user";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteUser = async (id: string) => {
  try {
    await db.user.delete({
      where: { id },
    });
  } catch {
    return null;
  }
  revalidatePath("/admin");
  return { success: "User deleted successfully" };
};
