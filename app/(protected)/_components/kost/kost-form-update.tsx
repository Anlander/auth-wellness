"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { KostSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UpdateKost } from "@/actions/update-kost";
import { useSession } from "next-auth/react";
import { Textarea } from "@/components/ui/textarea";

interface KostSchemaFormProps {
  data: any;
}

export const KostSchemaUpdate = ({ data }: KostSchemaFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();

  const form = useForm<z.infer<typeof KostSchema>>({
    resolver: zodResolver(KostSchema),
    defaultValues: {
      tid: data.tid || undefined,
      fett: data.fett || undefined,
      food: data.food || undefined,
      notes: data.notes || undefined,
      kcal: data.kcal || undefined,
      kolydrate: data.kolydrate || undefined,
      protein: data.protein || undefined,
    },
  });

  const handleUpdateUser = (values: z.infer<typeof KostSchema>) => {
    startTransition(() => {
      UpdateKost(values, data.id)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            update();
            setError("");
            setSuccess(data.success);
          }
        })
        .catch(() => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <CardWrapper headerLabel="Ändra måltid">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdateUser)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2>{data.tid}</h2>
            <FormField
              control={form.control}
              name="food"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Måltid / dryck</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Spagetti & köttfärs"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tid</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Frukost - 7:00"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="kcal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kcal</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="20"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="protein"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Protein</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="60"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kolydrate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kolhydrater</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="30"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fett"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fett</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="40"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Förklaring</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Denna måltid innehåller.."
                      typeof="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Error or success message */}

          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button type="submit" disabled={isPending}>
            Spara
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
