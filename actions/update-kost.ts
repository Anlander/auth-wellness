"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import { KostSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const UpdateKost = async (
  values: z.infer<typeof KostSchema>,
  id: string
) => {
  const valitedFields = KostSchema.safeParse(values);
  if (!valitedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { fett, food, kcal, kolydrate, protein, notes, tid, ordning } =
    valitedFields.data;

  try {
    await db.kostSchema.update({
      where: { id: id },
      data: {
        food,
        fett,
        kcal,
        kolydrate,
        protein,
        notes,
        tid,
        ordning,
      },
    });
    revalidatePath("/admin");
    return { success: "Kost uppdaterat!" };
  } catch (error) {
    return { error: "Något gick snett" };
  }
};
