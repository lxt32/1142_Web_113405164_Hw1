"use client"
import Image from "next/image"
import Link from "next/link";
import { Mail, Home } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function Menu() {
  
  const menuItems = [
    { href: "/about", label: "About Me" },
    { href: "/hobby", label: "Hobbies" },
    { href: "/projects", label: "Projects" },
    { href: "/Creations", label: "My Creations" }
  ];

  return (
    <div className="bg-gray-100 w-full md:w-[320px] md:h-full md:fixed md:left-0 md:top-0 md:overflow-y-auto noise relative p-3 md:p-4">

      <Link href="/" className="mb-3 md:mb-4 flex justify-center items-center font-bold text-slate-700 hover:text-slate-800 transition">  
        <Home size={24} className="md:w-6 md:h-6" />
      </Link>

      <div className="flex justify-center items-center w-full mb-3 md:mb-4">
        <div className="bg-gray-300 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden flex justify-center items-center flex-shrink-0">
          <Image src="/頭像.png" alt="頭像" width={100} height={100} className="w-full h-full object-cover" loading="eager" priority />
        </div>
      </div>
        <div className="text-center text-xs md:text-sm mb-3 md:mb-4 text-slate-600">💫</div>   
        <div className="text-center font-bold mb-2 text-slate-700 text-sm md:text-base">Hsiao-Tang Lu</div>
        <div className="text-center text-xs md:text-sm mb-3 md:mb-4 text-slate-600">NCCU COMM | DCT</div>
        <div className="text-center text-xs md:text-sm mb-3 md:mb-4 text-slate-600">佛系寶可夢玩家</div>

      <div className="flex gap-2 md:gap-3 mb-4 md:mb-6 justify-center">
        {/* Gmail Link */}
        <a href="mailto:113405164@g.nccu.edu.tw" 
           className="text-slate-700 hover:text-slate-800 transition"
           title="GMAIL: 113405164@g.nccu.edu.tw">
          <Mail size={20} className="md:w-6 md:h-6" />
        </a>
        {/* Instagram Link */}
        <a href="https://www.instagram.com/lxtkz_/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-slate-700 hover:text-slate-800 transition"
           title="IG: @lxtkz_">
          <SiInstagram size={20} className="md:w-6 md:h-6" />
        </a>
      </div>

      <div className="items center w-full flex flex-col gap-3 md:gap-4">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="bg-white border-2 border-slate-700 p-3 md:p-[16px] rounded-md hover:bg-slate-700 hover:text-white text-center font-semibold text-slate-700 transition text-sm md:text-base shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}