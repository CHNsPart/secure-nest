"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <span className="flex justify-center items-center border p-1 rounded-lg">
            <svg className="size-7 text-green-500" width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/>
            </svg>
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>selec your journey</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col items-center justify-center gap-2">
                <a className="flex items-center border border-zinc-300 rounded-xl w-full" href="/plans">
                    <svg width="512" className="size-4 text-green-500 ml-4" height="512" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M24.906 0a.99.99 0 0 0-.375.125l-24 13a.99.99 0 0 0 .188 1.813l6.375 1.906c.149 1.179.813 6.285.937 7.281c.124.992.798 1.164 1.469.25c.454-.619 3.124-4.375 3.125-4.375l5.688 5.688a.99.99 0 0 0 1.656-.438l6-24A.99.99 0 0 0 24.906 0M23.47 2.938l-5.032 20.125l-5.656-5.657L21 6L8.219 15.125L3.563 13.75L23.468 2.937z"/>
                    </svg>
                    <span className="py-3 px-2">Plans</span>
                </a>
                <a className="flex items-center border border-zinc-300 rounded-xl w-full" href="/about">
                    <svg className="size-4 text-green-500 ml-4" width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="7" cy="7" r="6.5"/>
                            <path d="M3.5 9h7L7 3.5L3.5 9z"/>
                        </g>
                    </svg>
                    <span className="py-3 px-2">About</span>
                </a>
            </div>
            <div className="mt-3 h-[120px]">
            </div>
          </div>
          <DrawerFooter>
            <h3 className="w-full text-center text-green-600">Secure Nest</h3>
            <DrawerClose>
              {/* <Button variant="outline">Cancel</Button> */}
              <span className="text-sm text-gray-400">Copyright © 2024</span>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
