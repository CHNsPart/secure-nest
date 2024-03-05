import React from 'react'
import { HiMiniSignal } from "react-icons/hi2";


export default function Loader() {
  return (
    <div className="w-full flex justify-center items-center h-[50vh]">
        <HiMiniSignal size={25} className="text-green-500 animate-ping size-10 md:size-24" />
    </div>
  )
}
