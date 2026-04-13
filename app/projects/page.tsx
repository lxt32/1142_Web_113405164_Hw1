"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);


  const getRandomTransform = (id: number) => {

    const seed = id * 12345;
    const random1 = Math.sin(seed) * 0.5 + 0.5;
    const random2 = Math.sin(seed * 2) * 0.5 + 0.5;
    
    const rotation = (random1 - 0.5) * 3;
    const translateY = (random2 - 0.5) * 8;
    
    return `rotate(${rotation}deg) translateY(${translateY}px)`;
  };

  const creationsData = [
    { id: 1, title: "飛鼠逃跑了嗚嗚嗚55", description: "ITlab大展小組作品", imageUrl: "/555.png", span: "col-span-1", detailDescription: "這是一個結合實體道具與網站劇情的互動式作品，我在小組中主要負責網頁開發。", link: "https://drive.google.com/file/d/12GvYj7Mo6Udtod-uQGZTNva_zjzPLIZf/view?usp=drive_link" },
    { id: 2, title: "蒲公英的約定 翻拍", description: "多媒體與程式設計小組專案", imageUrl: "/10.png", span: "col-span-2", detailDescription: "我們小組翻拍了周杰倫的歌曲，我在專案中負責攝影及後製的部分。", link: "https://www.youtube.com/watch?v=65PN1fKVFxY&sttick=0" },
    { id: 3, title: "Inside Out 2 配音", description: "多媒體與程式設計小組專案", imageUrl: "/IO2.png", span: "col-span-1", detailDescription: "這是小組共同為電影片段進行重新編寫台詞並配音的專案，除了配音外我也負責影片的後製。", link: "https://drive.google.com/drive/u/3/home" },
    { id: 5, title: "植物？", description: "生成式藝術練習", imageUrl: "/blue.png", span: "col-span-1", detailDescription: "利用p5.js創作的生成式藝術，點擊連結可以查看其他練習作品。", link: "https://openprocessing.org/user/575235#sketches" },
    { id: 4, title: "NO SKIP", description: "人機介面期末專案", imageUrl: "/noskip.png", span: "col-span-1", detailDescription: "這是在大二上時從頭到尾都獨自設計的APP，旨在鼓勵大學生去上課。", link: "https://noskip.framer.website/" },
  ];
  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-700 flex flex-col md:flex-row">
        {/* 手機版菜單 */}
        <div className="md:hidden w-full">
          <Menu />
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="w-full flex-1 p-4 md:p-6">
          <div className="text-2xl md:text-3xl font-bold text-white mb-6">
            Projects
          </div>
          <div className="rounded-lg p-3 sm:p-4 md:p-6" style={{backgroundColor: 'rgba(243, 244, 246, 0.75)'}}>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              {creationsData.map((item) => (
                <div
                  key={item.id}
                  className="w-full cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setSelectedItem(item.id)}
                >
                  {/* 卡片容器 */}
                  <div className={`relative rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 transform h-32 sm:h-40 flex ${
                    hoveredItem === item.id ? 'shadow-2xl scale-105' : ''
                  }`}
                  style={{ transform: hoveredItem === item.id ? 'scale(1.02)' : 'none' }}>

                    {/* 圖片 - 左側 */}
                    <div className="w-48 sm:w-56 h-full flex-shrink-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                    
                    {/* 文字內容 - 右側 */}
                    <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-slate-700">{item.title}</p>
                        <p className="text-xs sm:text-sm text-slate-600">{item.description}</p>
                      </div>
                      <p className="text-xs text-slate-500 opacity-70">點擊查看更多</p>
                    </div>
                    
                    {/* Hover時的覆蓋層 */}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredItem === item.id ? 'opacity-20' : 'opacity-0'
                    }`}></div>
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
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-slate-700">
                  {creationsData.find(item => item.id === selectedItem)?.title}
                </h2>
                {creationsData.find(item => item.id === selectedItem)?.link && (
                  <a
                    href={creationsData.find(item => item.id === selectedItem)?.link || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 transition"
                    title="打開連結"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
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
