"use client"

import Menu from "@/component/Menu";
import Link from "next/link";
import { useState } from "react";

export default function Hobbies() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  let projectData = {
    "1": {
      "name":"追星",
      "imageUrl": "/mina.jpg",
      "description": "做為一個日團跟韓團都追的人，當然要去一下演唱會。有一次因為聽到充滿童年回憶的歌曲而哭出來"
    },
    "2": {
      "name":"繪圖",
      "imageUrl": "/cola1.png",
      "description": "平常都喜歡畫一些潦草的小塗鴉，偶爾還是會畫完整一點的圖"
    },
    "3": {
      "name":"音樂",
      "imageUrl": "/guitar.jpg",
      "description": "人生不能沒有音樂。因為喜歡的音樂團體而開始學吉他，不過還沒完全戰勝封閉和弦"
    },
    "4": {
      "name":"遊戲",
      "imageUrl": "/pokemon.JPG",
      "description": "玩遊戲就像精神時光屋，有時候會玩到忘記吃飯"
    },
  };

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
          <div className="text-2xl md:text-3xl font-bold text-white mb-6">
            Hobbies
          </div>
          <div className="rounded-lg p-3 sm:p-4 md:p-6" style={{backgroundColor: '#E8F0F8'}}>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(projectData).map(([key, item]) => (
                <div
                  key={key}
                  onMouseEnter={() => setHoveredItem(key)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative bg-center bg-cover rounded-lg sm:rounded-2xl h-56 sm:h-64 md:h-72 overflow-hidden cursor-pointer group"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  {/* 圖片層 */}
                  <div className="absolute inset-0 bg-center bg-cover" 
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                  
                  {/* 黑色覆蓋層 - Hover時顯示，不透明度50% */}
                  <div className={`absolute inset-0 bg-black transition-opacity duration-300 z-10 ${
                    hoveredItem === key ? 'opacity-50' : 'opacity-0'
                  }`}></div>
                  
                  {/* 圖片放大效果 - Hover時 */}
                  <div className={`absolute inset-0 bg-center bg-cover transition-transform duration-300 ${
                    hoveredItem === key ? 'scale-110' : 'scale-100'
                  }`}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  ></div>
                  
                  {/* 說明文字 - Hover時顯示在上層 */}
                  <div className={`absolute inset-0 flex flex-col justify-center items-center z-10 transition-opacity duration-300 ${
                    hoveredItem === key ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-white text-sm sm:text-base font-semibold text-center px-4 mb-2">
                      {item.name}
                    </p>
                    <p className="text-white text-xs sm:text-sm text-center px-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
