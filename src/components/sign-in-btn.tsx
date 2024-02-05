"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInBtn() {
  return <Button className="bg-green-600 hover:bg-green-700" onClick={() => signIn()}>Sign In</Button>;
}
