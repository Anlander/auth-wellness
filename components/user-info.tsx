import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <p>{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg shadow-sm">
          <p className="truncate text-sm p-1 rounded-md font-medium">ID </p>
          <p className="truncate text-xs p-2 rounded-md bg-slate-100 capitalize font-mono">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg shadow-sm">
          <p className="truncate text-sm p-1 rounded-md font-medium">Name </p>
          <p className="truncate text-xs p-2 rounded-md bg-slate-100 capitalize font-mono">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg shadow-sm">
          <p className="truncate text-sm p-1 rounded-md font-medium">Email </p>
          <p className="truncate text-xs p-2 rounded-md bg-slate-100 font-mono">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg shadow-sm">
          <p className="truncate text-sm p-1 rounded-md font-medium">Role </p>
          <p className="truncate text-xs p-2 rounded-md bg-slate-100 capitalize font-mono">
            {user?.role}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
