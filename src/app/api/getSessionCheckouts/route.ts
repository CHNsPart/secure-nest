// app/checkout-sessions/route.ts
import { stripe } from "@/lib/stripe";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;

// data needed for checkout
// export interface CustomerBody {
//   email?: string;
//   name?: string;
// }

export async function GET() {
  const cookieStore = cookies();
  const userInfo: any = cookieStore.get("user");
  const user = JSON.parse(userInfo?.value);

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.

  try {
    //checkout sessions
    const checkoutSessions = await stripe.invoices.list({
      limit: 100,
    });

    return NextResponse.json(checkoutSessions);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
