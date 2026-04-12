"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";

export default function Hobby() {
  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-700 flex flex-col md:flex-row">
        <Link href="/" className="md:hidden absolute left-2 top-2 bg-white px-3 py-1 rounded text-slate-700 font-semibold hover:bg-gray-100 transition">  
            返回
        </Link>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="w-full flex-1 p-4 md:p-6">
          <div className="text-2xl md:text-3xl font-bold text-white">
            設計專案
          </div>
        </div>
      </div>
      
    </>
  );
}
