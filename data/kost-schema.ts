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
