"use client"
import Image from "next/image";
import Link from "next/link";
import Menu from "@/component/Menu";
import SkillsCircle from "@/app/components/SkillsCircle";

export default function About() {
  
  const educationItems = [
    {
      title: "政治大學 傳播學院大二不分系",
      year: "2024~"
    },
    {
      title: "雙主修 數位內容與科技學士學位學程",
      year: "2025~"
    },
    {
      title: "輔系 日本語文學系",
      year: "2025~"
    },
    {
      title: "傳院實習平台 ITlab 助理 | 行政組長",
      year: "2025~ | 2026~"
    }
  ];

  const skillIcons = [
    { icon: "/1.png", label: "攝影" },
    { icon: "/2.png", label: "文書" },
    { icon: "/3.png", label: "Premiere" },
    { icon: "/4.png", label: "Photoshop" },
    { icon: "/5.png", label: "illustrator" },
    { icon: "/6.png", label: "Figma" }
  ];


  
  return (
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
          About Me
        </div>

        <div className="max-w-5xl">
          
            <div className="rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
              <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                盧筱棠 / Hsiao-Tang Lu
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                現正就讀政大傳院二年級，選擇困難末期患者，每天花一小時在想晚餐要吃什麼。
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                前陣子和朋友一起挑戰了火車環島，感想是台南的牛肉湯太好喝了。
              </p>
            </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
            {/* Education */}
            <div className="w-full min-w-0">
              <div className="mb-6 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
              </div>

              {/* line */}
              <div className="relative w-full">
                <div className="absolute left-2 top-2 bottom-0 w-1" style={{backgroundColor: '#98ACD8'}}></div>

                <div className="space-y-4 sm:space-y-6 pl-8 sm:pl-10 pr-4">
                  {educationItems.map((item, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      {/* 卡片 */}
                      <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 transition-transform duration-300 transform group-hover:scale-105 shadow-md w-full" style={{backgroundColor: 'rgba(243, 244, 246, 0.75)'}}>
                        <p className="text-slate-700 font-semibold text-xs sm:text-sm md:text-base break-words">{item.title}</p>
                        <p className="text-slate-500 text-xs mt-2">{item.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="mb-6 md:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills</h2>
              </div>

              <SkillsCircle skillIcons={skillIcons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}