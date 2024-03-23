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
  const trialEndDate = Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60;

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.
  const success_url = !body.customerId
    ? `${origin}/api/auth/login`
    : `${origin}/success`;
  // : `${origin}/thankyou?session_id=${body.customerId}`;
  // : `${origin}/plans/${body?.plan
  //   ?.toLowerCase()
  //   ?.replaceAll("-", "")}`

  try {
    //customer create
    const session = await stripe.checkout.sessions.create({
      // if user is logged in, stripe will set the email in the checkout page
      // customer: body.customerId,
      customer: undefined,
      mode: "subscription", // mode should be subscription
      line_items: body.line_items,
      phone_number_collection: {
        enabled: true,
      },
      automatic_tax: { enabled: true },
      tax_id_collection: {
        enabled: true,
      },
      subscription_data: {
        trial_end: trialEndDate,
      },
      // subscription_data: {
      //   billing_cycle_anchor: Math.floor(
      //     new Date(
      //       `${new Date().getFullYear() + 3}-${new Date()
      //         .toISOString()
      //         .slice(5, 10)}`
      //     ).getTime() / 1000
      //   ),
      // },
      // customer_update: {
      //   shipping: "auto",
      //   name: "auto",
      // },
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      // customer_email: body.customer_email,
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