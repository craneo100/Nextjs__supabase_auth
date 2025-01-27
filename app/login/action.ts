"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

interface LoginError {
  success: false;
  message: string;
}

interface LoginSuccess {
  success: true;
  message: string;
  user: {
    id: string;
    email: string;
  };
}

type LoginResult = LoginError | LoginSuccess;

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8), // Adjust the minimum length as needed
});

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResult> => {
  const loginUserValidation = loginSchema.safeParse({
    email,
    password,
  });

  if (!loginUserValidation.success) {
    return {
      success: false,
      message:
        loginUserValidation.error.issues[0]?.message ?? "An error occured",
    };
  }

  // supabase authentication from here
  const supabase = createClient();

  ///////////////////////////// TEST for redirection ///////////
  // const { data, error } = await supabase.auth.getUser();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user) {
  //   return redirect("/dashboard");
  // }

  ///////////////////////////////////////////

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  if (!data.user) {
    return {
      success: false,
      message: "No user returned from login",
    };
  }

  return {
    success: true,
    message: "Successfully logged in",
    user: {
      id: data.user.id,
      email: data.user.email ?? ''
    }
  };
};
