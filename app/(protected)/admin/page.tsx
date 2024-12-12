import { deleteUser } from "@/actions/delete-user";
import { AllUsers } from "@/components/all-users";

import { getAllUsers } from "@/data/user";

const Admin = async () => {
  const users = await getAllUsers();

  return <AllUsers users={users} />;
};

export default Admin;
