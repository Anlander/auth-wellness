"use client";

import { deleteUser } from "@/actions/delete-user";
import { Modal } from "@/app/(protected)/_components/ui/modal";
import { SheetComponent } from "@/app/(protected)/_components/ui/Sheet";

import { LoginButton } from "@/components/auth/login-button";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { UserRole } from "@prisma/client";
import { toast } from "sonner";

interface AllUsersProps {
  users: any;
  getKostSchema: any;
}
export const AllUsers = ({ users, getKostSchema }: AllUsersProps) => {
  const removeUser = (id: any) => {
    const check = window.confirm("Are you sure you want to delete this user?");
    if (!check) return null;
    deleteUser(id).then((data: any) => {
      if (data?.success) {
        toast.error(data?.success);
      } else {
        toast.error(data?.error);
      }
    });
  };

  return (
    <Card className="w-full">
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <div className="flex justify-between py-5">
            <FormSuccess message="You are allowed to see this content" />
            <LoginButton mode="register" asChild>
              <Button size="lg">Add new user</Button>
            </LoginButton>
          </div>
        </RoleGate>
        <RoleGate allowedRole={UserRole.ADMIN}>
          {users.map((user: any, index: number) => {
            const filterKost = getKostSchema
              .sort((a: any, b: any) => a.ordning - b.ordning)
              .filter((el: any) => el.userId === user.id);

            console.log(user);
            return (
              <div key={index} className="flex justify-between border-b pb-2">
                <div className="flex flex-col">
                  <span className="font-bold">{user.name}</span>
                  <p className="font-mono text-xs">{user.email}</p>
                </div>

                <div className="flex gap-2">
                  <SheetComponent
                    mode="sheet"
                    kostSchema={filterKost}
                    selectedUser={user.id}
                    userInfo={user}
                  >
                    <Button variant="outline" className="text-sm">
                      Diet plan
                    </Button>
                  </SheetComponent>
                  <Modal
                    mode="kostschema"
                    kostSchema={filterKost}
                    selectedUser={user.id}
                  >
                    <Button variant="outline" className="text-sm">
                      Workout plan
                    </Button>
                  </Modal>
                  <Button
                    variant={"destructive"}
                    onClick={() => removeUser(user.id)}
                    className="text-[12px]"
                  >
                    Ta bort
                  </Button>
                </div>
              </div>
            );
          })}
        </RoleGate>
      </CardContent>
    </Card>
  );
};
