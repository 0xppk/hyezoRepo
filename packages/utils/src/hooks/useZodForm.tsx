"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

interface UseZodFormProps<T extends z.ZodSchema<any>> extends UseFormProps<z.TypeOf<T>> {
  schema: z.TypeOf<T>; // T
}

export default function useZodForm<T extends z.ZodSchema<any>>({
  schema,
  ...formConfig
}: UseZodFormProps<T>) {
  return useForm({
    ...formConfig,

    resolver: zodResolver(schema),
  });
}
