"use client";

import { deleteUser } from "@/actions/delete-user";
import { ConfirmationModal } from "@/app/(protected)/_components/confirm-box";
import { Modal } from "@/app/(protected)/_components/ui/modal";

import { LoginButton } from "@/components/auth/login-button";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getKostSchemaByUserId } from "@/data/kost-schema";
import { useCurrentUser } from "@/hooks/use-current-user";
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
      <CardHeader>
        <p>Admin Panel</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
          <LoginButton mode="register" asChild>
            <Button variant={"secondary"} size="lg">
              Add new user
            </Button>
          </LoginButton>
          {users.map((user: any) => {
            const filterKost = getKostSchema.filter(
              (el: any) => el.userId === user.id
            );

            console.log("Filtered Posts:", filterKost);

            return (
              <div key={user.id} className="flex justify-between">
                <p>{user.email}</p>
                <div className="flex gap-2">
                  <Button onClick={() => removeUser(user.id)}>Remove</Button>
                  <Modal mode="kost" kostSchema={filterKost}>
                    <span className="px-5 border border-black py-[6px] font-mono rounded-lg">
                      SCHEMA
                    </span>
                  </Modal>
                </div>
              </div>
            );
          })}
        </RoleGate>
      </CardContent>
    </Card>
  );
};
