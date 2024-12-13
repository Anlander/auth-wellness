import { getKostSchemaByUserId } from "@/data/kost-schema";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const getKostSchema = async () => {
  const user = await currentUser();

  if (!user) {
    return { error: "You are not logged in" };
  }

  const existingUser = await getUserById(user.id as string);

  if (!existingUser) {
    return { error: "User not found" };
  }

  const kostSchema = getKostSchemaByUserId(existingUser.id as string);

  if (!kostSchema) {
    return { error: "There is no schema for this user" };
  }
  return kostSchema;
};
