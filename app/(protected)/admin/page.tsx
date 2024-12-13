import { deleteUser } from "@/actions/delete-user";
import { getKostSchema } from "@/actions/get-kost-schema";
import { AllUsers } from "@/components/all-users";
import { getKostSchemaByUserId } from "@/data/kost-schema";

import { getAllUsers } from "@/data/user";

const Admin = async () => {
  const users = await getAllUsers();
  // För non admin users  || för att se kost schema
  // const kostSchema = await getKostSchema();

  const kostSchema = await getKostSchemaByUserId()

  return <AllUsers getKostSchema={kostSchema} users={users} />;
};

export default Admin;
