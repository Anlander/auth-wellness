import { db } from "@/lib/db";

export const getKostSchemaByUserId = async (userId?: string) => {
  try {
    const kostSchema = await db.kostSchema.findMany({
      where: { userId: userId },
    });
    return kostSchema;
  } catch {
    return null;
  }
};

export const getIngredientsByKostSchemaId = async (kostSchemaId: string) => {
  try {
    const ingredients = await db.ingredients.findMany({
      where: { kostSchemaId: kostSchemaId },
    });
    return ingredients;
  } catch {
    return null;
  }
};
