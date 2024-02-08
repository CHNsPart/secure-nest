"use client";

import { LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export default function SignOutBtn({ className }: { className?: string }) {
  return (
    <LogoutLink className="w-full">
      <Button className={`${className} bg-red-500 hover:bg-red-700`}>
        Sign Out
      </Button>
    </LogoutLink>
  );
}
