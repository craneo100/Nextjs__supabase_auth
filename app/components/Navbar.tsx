"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { User } from '@supabase/supabase-js';

export function Navbar({ user }: { user: User | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  const handleDashboardClick = () => {
    router.push(user ? '/dashboard' : '/login');
  };

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-xl">
          Your App
        </Link>
        <div className="ml-auto flex gap-4">
          {!user && !isAuthPage && (
            <>
              <Link href="/login">
                <Button variant="default">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </>
          )}
          {!isAuthPage && (
            <Button variant="ghost" onClick={handleDashboardClick}>
              Dashboard
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
