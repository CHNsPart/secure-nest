"use client";

import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export default function SignInBtn() {
  return (
    <LoginLink>
      <Button className="bg-green-600 hover:bg-green-700">
        Sign in
      </Button>
    </LoginLink>
  )
}
