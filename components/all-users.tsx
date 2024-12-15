"use client";

import { deleteUser } from "@/actions/delete-user";
import { Modal } from "@/app/(protected)/_components/ui/modal";

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
            return (
              <div key={index} className="flex justify-between">
                <p>{user.name}</p>
                <div className="flex gap-2">
                  <Modal
                    mode="kostschema"
                    kostSchema={filterKost}
                    selectedUser={user.id}
                  >
                    <span className="px-5 border border-black py-[6px] font-mono rounded-lg">
                      Diet plan
                    </span>
                  </Modal>
                  <Modal
                    mode="kostschema"
                    kostSchema={filterKost}
                    selectedUser={user.id}
                  >
                    <span className="px-5 border border-black py-[6px] font-mono rounded-lg">
                      Workout plan
                    </span>
                  </Modal>
                  <Button onClick={() => removeUser(user.id)}>Remove</Button>
                </div>
              </div>
            );
          })}
        </RoleGate>
      </CardContent>
    </Card>
  );
};
