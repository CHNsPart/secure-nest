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

// export const db = prisma;

// data needed for checkout
export interface CustomerBody {
  email?: string;
  name?: string;
}

export async function POST(req: Request) {
  const cookieStore = cookies();
  const userInfo: any = cookieStore.get("user");
  const user = JSON.parse(userInfo?.value);

  const body = (await req.json()) as CustomerBody;
  const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.

  try {
    //get a customer
    const getCustomer = await prisma.user.findUnique({
      where: { id: user?.id },
    });

    //customer create
    if (!getCustomer?.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user?.email ?? body?.email,
        name: user?.given_name + " " + user?.family_name ?? body?.name,
      });

      if (customer) {
        const updateCustomer = await prisma.user.update({
          where: { id: user?.id },
          data: {
            stripeCustomerId: customer.id,
            // Update other fields as needed
          },
        });
      }

      return NextResponse.json(customer);
    }
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
