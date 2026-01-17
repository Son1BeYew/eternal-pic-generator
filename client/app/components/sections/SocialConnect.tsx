"use client";

import { useState } from "react";

export default function SocialConnect() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const socialPlatforms = [
    {
      name: "Claude",
      color: "text-[#CC9B7A]",
      bgColor: "bg-[#CC9B7A]/10",
      borderColor: "border-[#CC9B7A]/30",
      hoverBorder: "group-hover:border-[#CC9B7A]",
      icon: (
        <div className="text-2xl font-bold">◐</div>
      ),
    },
    {
      name: "OpenAI",
      color: "text-[#10A37F]",
      bgColor: "bg-[#10A37F]/10",
      borderColor: "border-[#10A37F]/30",
      hoverBorder: "group-hover:border-[#10A37F]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ),
    },
    {
      name: "Google AI",
      color: "text-[#4285F4]",
      bgColor: "bg-[#4285F4]/10",
      borderColor: "border-[#4285F4]/30",
      hoverBorder: "group-hover:border-[#4285F4]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: "Meta AI",
      color: "text-[#0081FB]",
      bgColor: "bg-[#0081FB]/10",
      borderColor: "border-[#0081FB]/30",
      hoverBorder: "group-hover:border-[#0081FB]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.0235,4.50341 C17.8529,4.3766 19.267,5.44519 20.2076,6.67737 C21.156,7.91976 21.8094,9.54336 22.1673,11.1394 C22.5251,12.7347 22.6208,14.4504 22.3239,15.9123 C22.0388,17.3161 21.2785,18.9223 19.5568,19.437 C17.9375,19.9211 16.5179,19.2167 15.5052,18.3648 C14.4894,17.5103 13.6292,16.3122 12.953,15.1885 C12.6252,14.6438 12.3272,14.0938 12.0637,13.573 C11.8001,14.0938 11.5021,14.6438 11.1743,15.1885 C10.4981,16.3122 9.63792,17.5103 8.62209,18.3648 C7.60941,19.2167 6.18982,19.9211 4.57048,19.437 C2.84884,18.9223 2.08848,17.3161 1.80341,15.9123 C1.50655,14.4504 1.60217,12.7347 1.95995,11.1394 C2.31789,9.54336 2.97134,7.91976 3.91972,6.67737 C4.86029,5.44519 6.27437,4.3766 8.10383,4.50341 C9.81996636,4.62237364 11.0674829,5.78648603 11.8446591,6.77187041 L12.0637,7.0609 L12.0637,7.0609 L12.2827156,6.77187041 C13.059814,5.78648603 14.3073182,4.62237364 16.0235,4.50341 Z M7.89637,7.49623 C7.47584,7.46708 6.92691,7.6821 6.30436,8.49766 C5.68961,9.30301 5.17981,10.4913 4.88724,11.7959 C4.59453,13.1011 4.5524,14.3747 4.74341,15.3153 C4.90819312,16.126825 5.17222414,16.4173547 5.33536471,16.5186918 L5.40276778,16.5532373 L5.40276778,16.5532373 L5.42973,16.5627 C5.6624,16.6322 6.04382,16.6134 6.69089,16.0691 C7.33482,15.5274 7.99318,14.6564 8.60392,13.6416 C8.87629333,13.1890333 9.12860444,12.7252222 9.35564593,12.2790926 L9.61563301,11.7540754 L9.61563301,11.7540754 L9.8493616,11.25714 L9.8493616,11.25714 L10.0548321,10.7993939 L10.0548321,10.7993939 L10.2300447,10.3919447 L10.2300447,10.3919447 L10.373,10.0459 L10.373,10.0459 C10.2165,9.73315 9.99218,9.32834 9.71032,8.92724 C9.06612,8.01052 8.42073,7.53258 7.89637,7.49623 Z M16.2309,7.49623 C15.7066,7.53258 15.0612,8.01052 14.417,8.92724 C14.1351,9.32834 13.9108,9.73315 13.7543,10.0459 L13.9809584,10.588688 L13.9809584,10.588688 L14.1715556,11.0226741 C14.2058156,11.0990422 14.2412947,11.1772747 14.2779512,11.25714 L14.511686,11.7540754 L14.511686,11.7540754 L14.7716778,12.2790926 C14.9987222,12.7252222 15.2510333,13.1890333 15.5234,13.6416 C16.1341,14.6564 16.7925,15.5274 17.4364,16.0691 C18.0372786,16.5745214 18.4090587,16.6268332 18.6454171,16.576082 L18.6976,16.5627 C18.8279,16.5237 19.1811,16.3141 19.3839,15.3153 C19.5749,14.3747 19.5328,13.1011 19.2401,11.7959 C18.9475,10.4913 18.4377,9.30301 17.8229,8.49766 C17.2004,7.6821 16.6515,7.46708 16.2309,7.49623 Z" fill="#09244B"/>
        </svg>
      ),
    },
    {
      name: "Midjourney",
      color: "text-[#000000]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <div className="text-xl font-bold">⛵</div>
      ),
    },
    {
      name: "Stability AI",
      color: "text-[#FF6B6B]",
      bgColor: "bg-[#FF6B6B]/10",
      borderColor: "border-[#FF6B6B]/30",
      hoverBorder: "group-hover:border-[#FF6B6B]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      name: "Leonardo AI",
      color: "text-[#8B5CF6]",
      bgColor: "bg-[#8B5CF6]/10",
      borderColor: "border-[#8B5CF6]/30",
      hoverBorder: "group-hover:border-[#8B5CF6]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    {
      name: "Anthropic",
      color: "text-[#D4A574]",
      bgColor: "bg-[#D4A574]/10",
      borderColor: "border-[#D4A574]/30",
      hoverBorder: "group-hover:border-[#D4A574]",
      icon: (
        <div className="text-2xl font-bold">A</div>
      ),
    },
    {
      name: "Replicate",
      color: "text-[#000000]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4L4 8l8 4 8-4-8-4zm0 12l-8-4v4l8 4 8-4v-4l-8 4z"/>
        </svg>
      ),
    },
    {
      name: "Hugging Face",
      color: "text-[#FFD21E]",
      bgColor: "bg-[#FFD21E]/10",
      borderColor: "border-[#FFD21E]/30",
      hoverBorder: "group-hover:border-[#FFD21E]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.011 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.552 0 .964-.447.964-1.01 0-.503-.021-2.173-.021-3.901-2.606.477-3.194-.632-3.397-1.213-.114-.291-.607-1.188-1.037-1.429-.354-.19-.86-.66-.02-.673.796-.013 1.364.751 1.554 1.062.906 1.564 2.355 1.124 2.933.853.091-.66.354-1.111.645-1.366-2.238-.255-4.579-1.148-4.579-5.097 0-1.124.39-2.051 1.029-2.773-.103-.256-.446-1.297.098-2.698 0 0 .84-.276 2.755 1.055a9.348 9.348 0 0 1 2.506-.346c.851 0 1.704.118 2.506.346 1.915-1.344 2.755-1.055 2.755-1.055.544 1.401.201 2.442.098 2.698.64.722 1.029 1.636 1.029 2.773 0 3.962-2.354 4.842-4.593 5.097.365.323.679.943.679 1.907 0 1.377-.013 2.486-.013 2.832 0 .276.19.6.679.6a.87.87 0 0 0 .176-.019c4.173-1.424 7.181-5.456 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5z"/>
        </svg>
      ),
    },
    {
      name: "Runway",
      color: "text-[#34D399]",
      bgColor: "bg-[#34D399]/10",
      borderColor: "border-[#34D399]/30",
      hoverBorder: "group-hover:border-[#34D399]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3v18h20V3H2zm18 16H4V5h16v14zM6 7h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      color: "text-[#24292e]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Tích hợp model tạo ảnh mạnh mẽ từ
        </h2>
        
        {/* Marquee container with overflow hidden */}
        <div className="mt-12 relative">
          {/* Add gradient fade on edges for smooth effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Add padding top for modal space */}
          <div className="pt-24 overflow-hidden">
            {/* Animated marquee - duplicate items for seamless loop */}
            <div className="flex animate-marquee hover:pause">
              {/* First set of icons */}
              {socialPlatforms.map((platform, index) => (
                <div
                  key={`${platform.name}-1-${index}`}
                  className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                  onMouseEnter={() => setHoveredPlatform(`${platform.name}-1-${index}`)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                    {platform.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                    {platform.name}
                  </p>
                  
                  {/* Hover Modal */}
                  {hoveredPlatform === `${platform.name}-1-${index}` && (
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                        <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                          {platform.name}
                        </p>
                        {/* Arrow pointing down */}
                        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            {/* Second set of icons (duplicate for seamless loop) */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-2-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                onMouseEnter={() => setHoveredPlatform(`${platform.name}-2-${index}`)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
                
                {/* Hover Modal */}
                {hoveredPlatform === `${platform.name}-2-${index}` && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                      <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                        {platform.name}
                      </p>
                      {/* Arrow pointing down */}
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-3-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0 relative"
                onMouseEnter={() => setHoveredPlatform(`${platform.name}-3-${index}`)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg group-hover:scale-110`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
                
                {/* Hover Modal */}
                {hoveredPlatform === `${platform.name}-3-${index}` && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className={`${platform.bgColor} backdrop-blur-xl bg-white/90 border ${platform.borderColor} rounded-xl px-4 py-2 shadow-xl`}>
                      <p className={`text-sm font-semibold ${platform.color} whitespace-nowrap`}>
                        {platform.name}
                      </p>
                      {/* Arrow pointing down */}
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-b ${platform.borderColor} border-r ${platform.borderColor} rotate-45`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
