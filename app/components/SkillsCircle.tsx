'use client'

import Image from 'next/image';

interface Skill {
  icon: string;
  label: string;
}

interface SkillsCircleProps {
  skillIcons: Skill[];
}

export default function SkillsCircle({ skillIcons }: SkillsCircleProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 transform group-hover:scale-105 active:scale-95"
          >
            <Image
              src={skill.icon}
              alt={skill.label}
              width={56}
              height={56}
              className="object-contain"
            />
            <p className="text-white text-sm font-medium text-center">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
