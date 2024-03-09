"use client";

// import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProfilePage = ({ user }: any) => {
  const [sessionList, setSessionList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const cookies: any = useCookies();

  //   const user: any = JSON.parse(cookies.get("user"));

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
    console.log(user);
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mb-3">My Plans:</h2>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        <>
          {sessionList?.length > 0 ? (
            sessionList.map((item: any, indx: number) => {
              return (
                <div className="p-3 mb-4 border-2 rounded" key={indx}>
                  <>
                    {item?.lines?.data
                      .map((itm: any, index: number) => {
                        return (
                          <div className="flex justify-between" key={index}>
                            <p>
                              {itm?.type === "subscription" &&
                              index === item?.lines?.data.length - 1 ? (
                                <h6 className="mb-2">
                                  Plan: {itm?.description.split("×")[1]}
                                </h6>
                              ) : (
                                `Extra item ${
                                  Math.abs(
                                    index - item?.lines?.data.length + 2
                                  ) + 1
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
            })
          ) : (
            <p>No plan available</p>
          )}
        </>
      )}
    </>
  );
};

export default ProfilePage;
