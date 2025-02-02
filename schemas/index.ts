import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email({ message: "Invalid email" })),
    password: z.optional(
      z.string().min(6, { message: "Minimum 6 characters required" })
    ),
    newPassword: z.optional(
      z.string().min(6, { message: "Minimum 6 characters required" })
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) return false;
      if (data.newPassword && !data.password) return false;
      return true;
    },
    {
      message: "Both password and new password are required",
      path: ["newPassword"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 5 characters required" }),
});
export const ResetSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 5 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export const KostSchema = z.object({
  tid: z.string().optional(),
  food: z.string().optional(),
  kcal: z.string().optional(),
  protein: z.string().optional(),
  kolydrate: z.string().optional(),
  fett: z.string().optional(),
  notes: z.string().optional(),
  ordning: z.number().optional(),
});
