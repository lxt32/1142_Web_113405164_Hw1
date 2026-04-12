"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-700 flex flex-col md:flex-row">
        {/* 手機版菜單 */}
        <div className="md:hidden w-full">
          <Menu />
        </div>

        {/* 桌面版和手機版的Welcome文字 */}
        <div className="flex-1 flex items-end justify-start w-full px-6 md:px-12 pb-8 md:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white typing-animation whitespace-nowrap">
            Welcome!
          </h1>
        </div>
      </div>
    </>
  );
}