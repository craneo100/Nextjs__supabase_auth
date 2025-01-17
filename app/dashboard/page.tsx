import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {data.user.email}</p>
      <LogoutButton />
    </div>
  );
}