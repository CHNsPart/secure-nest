// src/app/plans/[plan]/page.tsx
"use client"

import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const { plan } = useParams();
  const planName = plan;

  return (
    <div className='container h-screen w-full py-12'>
      <p>Plan Name: {planName}</p>
    </div>
  );
};

export default Page;
