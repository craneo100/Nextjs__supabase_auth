'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from '@supabase/supabase-js';

export function HomePageContent({ user }: { user: User | null }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your App</h1>
      {!user ? (
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="default" size="lg">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="lg">Sign Up</Button>
          </Link>
        </div>
      ) : (
        <Link href="/dashboard">
          <Button size="lg">Go to Dashboard</Button>
        </Link>
      )}
    </div>
  );
}
