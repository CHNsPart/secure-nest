"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import Image from "next/image";

export default function ProfileInfo({ user }: any) {
  const [sessionList, setSessionList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getCheckoutSessions = async () => {
    setLoading(true);
    const result = await fetch("/api/getSessionCheckouts");

    const data = await result.json();

    setSessionList(
      data?.data.filter((data: any) => {
        return data?.customer_email === user?.email;
      })
    );

    setLoading(false);

    console.log(data?.data);

    // console.log(user.id);
  };

  useEffect(() => {
    getCheckoutSessions();
    // console.log("user =>", user);
    // console.log("session =>", sessionList);
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mb-3">My Details</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {sessionList?.length > 0 ? (
            <div>
              <div className="p-3 mb-4 border-2 flex flex-col md:items-center md:flex-row gap-2 rounded-xl h-full">
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={user.picture}
                    alt={user.given_name+" Picture"}
                  />
                </div>
                <div className="flex flex-col md:flex-row">
                  <div>
                    <p className="my-4">
                     <span className="font-bold text-green-800 bg-green-100 p-2 px-2.5 rounded-lg mr-2">Name</span>{user?.given_name+" "+user?.family_name}</p>
                    <p className="my-4">
                     <span className="font-bold text-green-800 bg-green-100 p-2 px-2.5 rounded-lg mr-2">Email</span>{sessionList[0]?.customer_email ?? "--"}</p>
                    <p className="my-4">
                     <span className="font-bold text-green-800 bg-green-100 p-2 px-2.5 rounded-lg mr-2">Phone</span>{sessionList[0]?.customer_phone ?? "--"}</p>
                  </div>
                  <div className="md:ml-5">
                    <p className="my-4">
                    <span className="font-bold text-green-800 bg-green-100 p-2 px-2.5 rounded-lg mr-2">
                      Address
                    </span>
                      {sessionList[0]?.customer_address?.line1 ?? "--" +
                        ", " +
                        sessionList[0]?.customer_address?.city ?? "--" +
                        ", " +
                        sessionList[0]?.customer_address?.country ?? "--"}
                    </p>
                    <p className="my-4">
                      <span className="font-bold text-green-800 bg-green-100 p-2 px-2.5 rounded-lg mr-2">
                        Postal Code
                      </span>
                      {sessionList[0]?.customer_address?.postal_code ?? "--"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>No Details</p>
          )}
        </>
      )}
    </>
  );
}
