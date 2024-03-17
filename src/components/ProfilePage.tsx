"use client";

// import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Button } from "./ui/button";
import { RiDownloadCloudFill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";

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

    // console.log(data?.data);

    // console.log(user.id);
  };

  useEffect(() => {
    getCheckoutSessions();
    console.log(user);
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl mb-3">My Plans</h2>
      {loading ? (
        <Loader/>
      ) : (
        <>
          {sessionList?.length > 0 ? (
            sessionList.map((item: any, indx: number) => {
              return (
                <div className="p-3 mb-4 border-2 rounded-xl" key={indx}>
                  <>
                    {item?.lines?.data
                      .map((itm: any, index: number) => {
                        return (
                          <div className="flex justify-between w-full" key={index}>
                            <div className="w-full">
                              {itm?.type === "subscription" &&
                              index === item?.lines?.data.length - 1 ? (
                                <h6 className="mb-2 text-2xl py-5 flex items-center gap-2">
                                  <span className="font-bold text-green-800 bg-green-100 p-4 px-6 rounded-xl">Plan</span> <PiStarFourFill className="text-green-500" />  {itm?.description.split("×")[1]}
                                </h6>
                              ) 
                              : 
                              (
                                <div className="flex items-center w-full">
                                  <div className="p-4 my-2 rounded-lg w-full bg-gray-100">
                                    <p className="text-gray-800 font-bold">
                                      {`Add Ons ${
                                        Math.abs(index - item?.lines?.data.length + 2) + 1
                                      }`}
                                    </p>
                                    <p className="italic text-gray-500">{itm?.description}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })
                      .reverse()}
                    <div className="mt-3 py-5 flex justify-end">
                      <Link
                        href={item?.invoice_pdf}
                      >
                        <Button size={"lg"} className="bg-green-500 hover:bg-green-600 font-bold flex items-center py-3.5 justify-center gap-2">
                          <RiDownloadCloudFill size={20}/> Download Invoice
                        </Button>
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
