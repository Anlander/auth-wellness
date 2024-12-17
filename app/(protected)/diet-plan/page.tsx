import { getKostSchemaByUserId } from "@/data/kost-schema";
import { currentUser } from "@/lib/auth";
import { TableComponent } from "../_components/kost/table-rows";
import { DietPlanUser } from "../_components/kost/diet-plan-user";

const DietPlan = async () => {
  const user = await currentUser();
  console.log(user);
  const dietplan = await getKostSchemaByUserId(user?.id);
  console.log(dietplan);
  return (
    <div className="p-10 w-full bg-white rounded-md">
      <TableComponent classname="">
        <DietPlanUser data={dietplan} />
      </TableComponent>
    </div>
  );
};

export default DietPlan;
