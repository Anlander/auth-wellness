"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const Admin = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.success) {
        toast.success(data.success);
      } else {
        toast.error(data.error);
      }
    });
  };

  const onApiClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Admin API call succeeded");
      } else {
        toast.error("Admin API call failed");
      }
    });
  };
  return (
    <Card className="w-full ">
      <CardHeader>
        <p>Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between">
          <p>Admin-Only Route</p>
          <Button onClick={onApiClick}>click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Server-Only Route</p>
          <Button onClick={onServerActionClick}>click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Admin;
