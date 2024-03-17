"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ProfileInfo({ user }: any) {
  const [sessionList, setSessionList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getCheckoutSessions = async () => {
    //   setLoading(true);
    const result = await fetch("/api/getSessionCheckouts");

    const data = await result.json();

    setSessionList(
      data?.data.filter((data: any) => {
        return data?.customer_email === user?.email;
      })
    );

    //   setLoading(false);

    console.log(data?.data);

    // console.log(user.id);
  };

  useEffect(() => {
    getCheckoutSessions();
    console.log("user =>", user);
    console.log("session =>", sessionList);
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mb-3">My Details</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {sessionList?.length > 0 ? (
            <>
              <div className="p-3 mb-4 border-2 rounded-xl">
                <p>Name: {sessionList[0]?.customer_name}</p>
                <p>Email: {sessionList[0]?.customer_email}</p>
                <p>Phone: {sessionList[0]?.customer_phone}</p>
                <p>
                  Address:{" "}
                  {sessionList[0]?.customer_address?.line1 +
                    ", " +
                    sessionList[0]?.customer_address?.city +
                    ", " +
                    sessionList[0]?.customer_address?.country}
                </p>
                <p>
                  Postal Code: {sessionList[0]?.customer_address?.postal_code}
                </p>
              </div>
            </>
          ) : (
            <p>No Details</p>
          )}
        </>
      )}
    </>
  );
}
