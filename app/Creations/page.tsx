"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Creations() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // 為每個item生成隨機transform
  const getRandomTransform = (id: number) => {
    // 使用id作為seed來確保相同的item每次都有相同的隨機值
    const seed = id * 12345;
    const random1 = Math.sin(seed) * 0.5 + 0.5;
    const random2 = Math.sin(seed * 2) * 0.5 + 0.5;
    
    const rotation = (random1 - 0.5) * 3; // -1.5 到 1.5 度之間的旋轉
    const translateY = (random2 - 0.5) * 8; // -4 到 4px 之間的上下位移
    
    return `rotate(${rotation}deg) translateY(${translateY}px)`;
  };

  // 作品數據 - 可根據需要修改
  const creationsData = [
    { id: 5, title: "悠遊卡設計", description: "初次使用Adobe illustrator創作", imageUrl: "/cat.png", span: "col-span-1", detailDescription: "我的第一個Adobe illustrator設計作品。" },
    { id: 4, title: "雜誌封面設計", description: "人機介面課堂練習", imageUrl: "/jisoo.png", span: "col-span-1", detailDescription: "這是人機介面課程的練習作品。" },
    { id: 6, title: "優惠卷設計", description: "平面設計練習", imageUrl: "/ramen.png", span: "col-span-2", detailDescription: "利用procreate繪製的優惠券。" },
    { id: 7, title: "插畫作品", description: "日常創意繪畫", imageUrl: "/doodle.jpg", span: "col-span-1", detailDescription: "看了Wednesday第二季後很喜歡的角色Agnes。" },
    { id: 8, title: "插畫作品", description: "數位藝術創作", imageUrl: "/vocaloid.png", span: "col-span-2", detailDescription: "我都說他們是軟體。" },
    { id: 9, title: "插畫作品", description: "商業風格設計", imageUrl: "/cola2.png", span: "col-span-1", detailDescription: "畫了朋友的角色。" },
  ];
  
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
            My Creations
          </div>
          <div className="rounded-lg p-3 sm:p-4 md:p-6" style={{backgroundColor: '#E8F0F8'}}>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {creationsData.map((item) => (
                <div
                  key={item.id}
                  className={`${item.span} cursor-pointer`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {/* 卡片容器 */}
                  <div className={`relative rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 transform h-48 md:h-64 ${
                    hoveredItem === item.id ? 'shadow-2xl scale-105 -translate-y-2' : ''
                  }`}
                  style={{ transform: hoveredItem === item.id ? 'scale(1.05) translateY(-8px)' : getRandomTransform(item.id) }}>

                    {/* 圖片 */}
                    <div className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                    
                    {/* Hover時的標題和說明層 */}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 flex flex-col justify-center items-center ${
                      hoveredItem === item.id ? 'opacity-60' : 'opacity-0'
                    }`}></div>
                    
                    <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 z-10 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <p className="text-white text-sm sm:text-base font-bold text-center px-3 mb-2">
                        {item.title}
                      </p>
                      <p className="text-white text-xs sm:text-sm text-center px-3">
                        {item.description}
                      </p>
                      <p className="text-white text-xs mt-3 opacity-70">點擊查看更多</p>
                    </div>
                  </div>
                  
                  {/* 標題和說明 - 非hover時顯示 */}
                  <div className={`mt-2 transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 truncate">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 truncate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 詳情 Modal */}
      {selectedItem !== null && (
        <div 
          className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 圖片 */}
            <div 
              className="w-full h-64 md:h-96 bg-center bg-cover"
              style={{ backgroundImage: `url(${creationsData.find(item => item.id === selectedItem)?.imageUrl})` }}
            ></div>
            
            {/* 內容 */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-700 mb-2">
                {creationsData.find(item => item.id === selectedItem)?.title}
              </h2>
              <p className="text-gray-600 mb-2">
                {creationsData.find(item => item.id === selectedItem)?.description}
              </p>
              <p className="text-gray-500 text-sm mb-6">
                {creationsData.find(item => item.id === selectedItem)?.detailDescription}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800 transition font-semibold"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
