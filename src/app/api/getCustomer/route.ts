// app/checkout-sessions/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

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

  //   const body = (await req.json()) as CustomerBody;
  //   const origin = req.headers.get("origin") || "http://localhost:3000";

  // if user is logged in, redirect to thank you page, otherwise redirect to signup page.

  try {
    //get a customer
    const getCustomer = await prisma.user.findUnique({
      where: { id: user?.id },
    });

    return NextResponse.json(getCustomer);
  } catch (error) {
    // const { message } = error;
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
