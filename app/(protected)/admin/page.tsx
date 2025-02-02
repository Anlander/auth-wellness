import { AllUsers } from "@/components/all-users";
import { getKostSchemaByUserId } from "@/data/kost-schema";

import { getAllUsers } from "@/data/user";

const Admin = async () => {
  const users = await getAllUsers();

  const kostSchema = await getKostSchemaByUserId();

  return <AllUsers getKostSchema={kostSchema} users={users} />;
};

export default Admin;
