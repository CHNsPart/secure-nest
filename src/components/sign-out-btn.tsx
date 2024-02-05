"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignOutBtn({ className }: { className?: string }) {
  return (
    <Button onClick={() => signOut()} className={`${className} bg-red-500 hover:bg-red-700`}>
      Sign Out
    </Button>
  );
}
