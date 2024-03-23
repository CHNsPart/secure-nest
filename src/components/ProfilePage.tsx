"use client";

// import { useCookies } from "next-client-cookies";
import { UpdateSubscriptionBody } from "@/app/api/updateSubscription/route";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { RiDownloadCloudFill } from "react-icons/ri";
import Loader from "./Loader";
import { Button } from "./ui/button";

const ProfilePage = ({ user }: any) => {
  const [sessionList, setSessionList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const cookies: any = useCookies();

  //   const user: any = JSON.parse(cookies.get("user"));

  const getSubscriptionSingle = async (subscriptionId: string) => {
    const subResult = await fetch(`/api/getSubscription/${subscriptionId}`);

    const subData = await subResult.json();

    console.log(subData);

    return subData?.status;
  };

  const getCheckoutSessions = async () => {
    setLoading(true);
    const result = await fetch("/api/getSessionCheckouts");

    const data = await result.json();

    // const subResult = await fetch(
    //   `/api/getSubscription/sub_1OmXVdKIvM35MM71ndJ1JI1A`
    // );

    // const subData = await subResult.json();

    let mainInvoiceData = [];

    for (let i = 0; i < data?.data?.length; i++) {
      const subResult = await fetch(
        `/api/getSubscription/${data?.data[i]?.subscription}`
      );

      const subData = await subResult.json();

      if (subData?.status === "active") {
        mainInvoiceData.push(data?.data[i]);
      }
      // if (data?.data[i]?.customer_email === user?.email) {
      //   setSessionList((prev: any) => [...prev, data?.data[i]]);
      // }
    }

    setSessionList(
      mainInvoiceData?.filter((data: any) => {
        return data?.customer_email === user?.email;
      })
    );

    setLoading(false);

    // console.log(data?.data);
    // console.log(subData);

    // console.log(user.id);
  };

  const updateSub = async () => {
    for (let i = 0; i < sessionList?.length; i++) {
      const body: UpdateSubscriptionBody = {
        subscription_id: sessionList[i]?.subscription,
        cancel_at: Math.floor(
          new Date(`
            ${
              new Date(Number(sessionList[i]?.created) * 1000).getFullYear() + 3
            }-${new Date(Number(sessionList[i]?.created) * 1000)
            .toISOString()
            .slice(5, 10)}
          `).getTime() / 1000
        ),
      };

      const result = await fetch("/api/updateSubscription", {
        method: "post",
        body: JSON.stringify(body, null),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await result.json();
    }
  };

  useEffect(() => {
    getCheckoutSessions();
    // console.log(user);
  }, []);

  useEffect(() => {
    updateSub();
    console.log({ sessionList });
  }, [sessionList]);

  return (
    <>
      <h2 className="font-bold text-xl mb-3">My Plans</h2>
      {loading ? (
        <Loader />
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
                          <div
                            className="flex justify-between w-full"
                            key={index}
                          >
                            <div className="w-full">
                              {itm?.type === "subscription" &&
                              index === item?.lines?.data?.length - 1 ? (
                                <h6 className="mb-2 text-2xl py-5 flex flex-col md:flex-row items-center gap-4">
                                  <span className="font-bold text-green-800 bg-green-100 p-4 px-6 rounded-xl">
                                    Plan
                                  </span>{" "}
                                  <PiStarFourFill className="text-green-500" />{" "}
                                  {itm?.description?.split("×")[1]}
                                  <span className="font-bold text-green-800 bg-green-100 p-4 px-6 rounded-xl">
                                    Duration
                                  </span>{" "}
                                  <p>
                                    (
                                    {new Date(`
            ${new Date(Number(item?.created) * 1000).getFullYear()}-${new Date(
                                      Number(item?.created) * 1000
                                    )
                                      .toISOString()
                                      .slice(5, 10)}
          `).getDate() +
                                      "/" +
                                      (new Date(`
          ${new Date(Number(item?.created) * 1000).getFullYear()}-${new Date(
                                        Number(item?.created) * 1000
                                      )
                                        .toISOString()
                                        .slice(5, 10)}
        `).getMonth() +
                                        1) +
                                      "/" +
                                      new Date(`
            ${new Date(Number(item?.created) * 1000).getFullYear()}-${new Date(
                                        Number(item?.created) * 1000
                                      )
                                        .toISOString()
                                        .slice(5, 10)}
          `).getFullYear()}{" "}
                                    -
                                    {new Date(`
            ${
              new Date(Number(item?.created) * 1000).getFullYear() + 3
            }-${new Date(Number(item?.created) * 1000)
                                      .toISOString()
                                      .slice(5, 10)}
          `).getDate() +
                                      "/" +
                                      (new Date(`
          ${
            new Date(Number(item?.created) * 1000).getFullYear() + 3
          }-${new Date(Number(item?.created) * 1000).toISOString().slice(5, 10)}
        `).getMonth() +
                                        1) +
                                      "/" +
                                      new Date(`
            ${
              new Date(Number(item?.created) * 1000).getFullYear() + 3
            }-${new Date(Number(item?.created) * 1000)
                                        .toISOString()
                                        .slice(5, 10)}
          `).getFullYear()}
                                    )
                                  </p>
                                </h6>
                              ) : (
                                <div className="flex items-center w-full">
                                  <div className="p-4 my-2 rounded-lg w-full bg-gray-100">
                                    <p className="text-gray-800 font-bold">
                                      {`Add Ons ${
                                        Math.abs(
                                          index - item?.lines?.data.length + 2
                                        ) + 1
                                      }`}
                                    </p>
                                    <p className="italic text-gray-500">
                                      {itm?.description}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })
                      .reverse()}
                    <div className="mt-3 py-5 flex justify-center md:justify-end">
                      <Link href={item?.invoice_pdf}>
                        <Button
                          size={"lg"}
                          className="bg-green-500 hover:bg-green-600 font-bold flex items-center py-3.5 justify-center gap-2"
                        >
                          <RiDownloadCloudFill size={20} /> Download Invoice
                        </Button>
                      </Link>
                    </div>
                    {/* <p>{statusOfSub}</p> */}
                  </>
                </div>
              );
            })
            ) : (
              <p>No plan available</p>
          )} 
        </>
      )}



      {/* {sessionList?.length > 0 && sessionList.map((item: any, indx: number) => (
        <div className="p-3 mb-4 border-2 rounded-xl" key={indx}>
          <>
            {item?.lines?.data.map((itm: any, index: number) => {
              if (itm?.type === "subscription" && index === item?.lines?.data?.length - 1) {
                const subscriptionStartDate = new Date(item.created * 1000);
                const trialPeriodEndDate = new Date(subscriptionStartDate);
                trialPeriodEndDate.setDate(trialPeriodEndDate.getDate() + 3); // Assuming 3 days trial period

                const currentDate = new Date();

                if (currentDate <= trialPeriodEndDate) {
                  return (
                    <div key={index} className="mb-2 text-2xl py-5 flex flex-col md:flex-row items-center gap-4">
                      <span className="font-bold text-green-800 bg-green-100 p-4 px-6 rounded-xl">
                        Plan
                      </span>{" "}
                      <PiStarFourFill className="text-green-500" />{" "}
                      {itm?.description}
                    </div>
                  );
                }
              }
              return null;
            })}
          </>
        </div>
      ))} */}


      
    </>
  );
};


export default ProfilePage;
