import { getKostSchema } from "@/actions/get-kost-schema";
import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

const Server = async () => {
  const user = await currentUser();
  const kostSchema = await getKostSchema();
  // const kosts = await getKosts(user?.id as string);
  // const ingredients = await getIngredients(kosts[0].id);

  return <UserInfo user={user} label="Server Component" />;
};

export default Server;
