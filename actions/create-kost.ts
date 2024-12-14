"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import bcrypt from "bcrypt";
import { KostSchema } from "@/schemas";

import { revalidatePath } from "next/cache";

export const createNewKost = async (
  values: z.infer<typeof KostSchema>,
  userId: string
) => {
  const valitedFields = KostSchema.safeParse(values);
  if (!valitedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { fett, food, kcal, kolhydrate, protein, notes, tid } =
    valitedFields.data;

  await db.kostSchema.create({
    data: {
      userId: userId as string,
      food: food,
      fett: fett,
      kcal: kcal,
      kolydrate: kolhydrate,
      protein: protein,
      notes: notes,
      tid: tid,
    },
  });

  revalidatePath("/admin");
  return { success: "Måltid skapad!" };
};
