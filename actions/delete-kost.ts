"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteKostById = async (id: string) => {
  try {
    await db.kostSchema.delete({
      where: { id: id },
    });
  } catch (error) {
    throw error;
  }
  revalidatePath("/admin");
  return { success: "Item was deleted!" };
};
