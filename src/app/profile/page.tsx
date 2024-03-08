"use client";

import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [sessionList, setSessionList] = useState<any>([]);
  const cookies: any = useCookies();

  const user: any = JSON.parse(cookies.get("user"));

  const getCheckoutSessions = async () => {
    const result = await fetch("/api/getSessionCheckouts");

    const data = await result.json();

    setSessionList(data?.data);

    console.log(data?.data);

    // console.log(user.id);
  };

  useEffect(() => {
    getCheckoutSessions();
    console.log(user);
  }, []);

  return (
    <div className="container min-h-screen w-full py-12">
      <h2 className="font-bold text-xl mb-3">My Plans:</h2>
      {sessionList
        .filter((data: any) => {
          return data?.customer_email === user?.email;
        })
        .map((item: any) => {
          // if (item?.customer_email === user?.email) {
          return (
            <div className="p-3 mb-4 border-2 rounded">
              <>
                {item?.lines?.data
                  .map((itm: any, index: number) => {
                    return (
                      <div className="flex justify-between">
                        <p>
                          {itm?.type === "subscription" &&
                          index === item?.lines?.data.length - 1 ? (
                            <h6 className="mb-2">
                              Plan: {itm?.description.split("×")[1]}
                            </h6>
                          ) : (
                            `Extra item ${
                              Math.abs(index - item?.lines?.data.length + 2) + 1
                            }: ` + itm?.description
                          )}
                        </p>
                      </div>
                    );
                  })
                  .reverse()}
                <div className="mt-3">
                  <Link
                    href={item?.invoice_pdf}
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
                  >
                    Download Invoice
                  </Link>
                </div>
              </>
            </div>
          );
          // }
        })}
    </div>
  );
}
