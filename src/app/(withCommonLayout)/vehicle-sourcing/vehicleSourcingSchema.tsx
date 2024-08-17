import { z } from "zod";

export const vehicleSourcingSchema = z.object({
  phone: z.string().min(1, "Mobile number is required"),
  model: z.string().min(1, "Model is required"),
  preferredYear: z
    .string()
    .refine((value) => !isNaN(Number(value)), "Preferred year must be a number")
    .optional(),
  maximumBudget: z
    .string()
    .min(1, "Maximum budget is required")
    .refine(
      (value) => !isNaN(Number(value)),
      "Maximum budget must be a number"
    ),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  message: z.string().optional(),
});
