// app/checkout-sessions/route.ts
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// data needed for checkout
export interface UpdateSubscriptionBody {
  cancel_at: number;
  subscription_id: string;
}

export async function POST(req: Request) {
  const body = (await req.json()) as UpdateSubscriptionBody;
  const origin = req.headers.get("origin") || "http://localhost:3000";

  try {
    //subscription update
    const session = await stripe.subscriptions.update(body?.subscription_id, {
      cancel_at: body?.cancel_at,
    });
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
