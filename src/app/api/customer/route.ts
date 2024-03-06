// app/checkout-sessions/route.ts
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// data needed for checkout
export interface CustomerBody {
  email?: string;
  name?: string;
}

export async function POST(req: Request) {
  const body = (await req.json()) as CustomerBody;
  const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.

  try {
    //customer create
    const customer = await stripe.customers.create({
      email: body?.email,
      name: body?.name,
    });

    return NextResponse.json(customer);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
