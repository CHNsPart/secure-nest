"use client";

import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { PiStarFourFill } from 'react-icons/pi';

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
          <Loader/>
        ) : (
          <>
            {sessionList?.length > 0 ? (
              sessionList.map((item: any, indx: number) => {
                return (
                  <div className="p-3 mb-4 border-2 rounded-xl" key={indx}>
                    <>
                     
                    </>
                  </div>
                );
              })
            ) : (
              <p>No Details</p>
            )}
          </>
        )}
      </>
    );
}
