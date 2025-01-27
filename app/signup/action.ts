"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const signUpUserValidation = signUpSchema.safeParse({
    email,
    password,
  });

  if (!signUpUserValidation.success) {
    return {
      error: {
        message:
          signUpUserValidation.error.issues[0]?.message ?? "An error occurred",
      },
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return { error };
  }

  return { error: null };
};
