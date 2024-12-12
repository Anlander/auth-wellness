"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return { error: "You are not an admin" };
  }

  return { success: "You are an admin" };
};
