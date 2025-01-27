"use server";

import { createClient } from "@/utils/supabase/server";
import { HomePageContent } from "./components/home-page";

export default async function HomePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return <HomePageContent user={user} />;
}
