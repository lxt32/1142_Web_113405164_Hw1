"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <div className="w-full min-h-screen bg-slate-700 flex flex-col md:flex-row relative overflow-hidden">
        {/* 背景裝飾元素 */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-slate-600 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-slate-600 rounded-full opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* 手機版菜單 */}
        <div className="md:hidden w-full">
          <Menu />
        </div>

        {/* Welcome */}
        <div className="flex-1 flex flex-col items-end justify-start w-full px-6 md:px-12 pt-20 md:pt-32 pb-8 md:pb-12 relative z-10">
          <div className={`text-right transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : ''}`}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Welcome to My Page!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl ml-auto">
              Hi, I'm Hsiao-Tang. Explore my works, hobbies, and creative journey.
            </p>
            <div className="mt-8 flex gap-4 justify-end">
              <Link href="/about" className="px-6 py-2 bg-gray-100 text-slate-700 rounded-lg font-semibold hover:bg-white transition transform hover:scale-105">
                About Me
              </Link>
              <Link href="/projects" className="px-6 py-2 bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-500 transition transform hover:scale-105">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}