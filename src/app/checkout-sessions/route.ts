// app/checkout-sessions/route.ts
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// data needed for checkout
export interface CheckoutSubscriptionBody {
  plan: string;
  planDescription: string;
  amount: number;
  interval: "month";
  customerId?: string;
  customer_email?: string;
  line_items: any;
}

export async function POST(req: Request) {
  const body = (await req.json()) as CheckoutSubscriptionBody;
  const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.
  const success_url = !body.customerId
    ? `${origin}/api/auth/login`
    : `${origin}/thankyou?session_id=${body.customerId}`;

  try {
    //customer create
    const session = await stripe.checkout.sessions.create({
      // if user is logged in, stripe will set the email in the checkout page
      customer: body.customerId,
      mode: "subscription", // mode should be subscription
      line_items: body.line_items,
      customer_email: body.customer_email,
      success_url: success_url,
      cancel_url: `${origin}/plans/${body?.plan
        ?.toLowerCase()
        ?.replaceAll("-", "")}`,
    });
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
