"use client";

export default function SocialConnect() {
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
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
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
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.586c-1.106 0-2.024-.67-2.801-2.034-.654-1.148-1.188-2.537-2.026-2.537-.895 0-1.377 1.446-2.094 2.746-.76 1.378-1.613 2.935-3.168 2.935-1.555 0-2.408-1.557-3.168-2.935C3.92 11.461 3.438 10.015 2.543 10.015c-.168 0-.332.03-.49.088L1.5 8.897c.335-.12.683-.18 1.043-.18 1.555 0 2.408 1.557 3.168 2.935.717 1.3 1.199 2.746 2.094 2.746.838 0 1.372-1.389 2.026-2.537.777-1.364 1.695-2.975 3.075-2.975 1.38 0 2.298 1.611 3.075 2.975.654 1.148 1.188 2.537 2.026 2.537.895 0 1.377-1.446 2.094-2.746.76-1.378 1.613-2.935 3.168-2.935.36 0 .708.06 1.043.18l-.553 1.206c-.158-.058-.322-.088-.49-.088-.895 0-1.377 1.446-2.094 2.746-.76 1.378-1.613 2.935-3.168 2.935z"/>
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
        <div className="mt-12 relative overflow-hidden">
          {/* Add gradient fade on edges for smooth effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Animated marquee - duplicate items for seamless loop */}
          <div className="flex animate-marquee hover:pause">
            {/* First set of icons */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-1-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0"
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
              </div>
            ))}
            {/* Second set of icons (duplicate for seamless loop) */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-2-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0"
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {socialPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-3-${index}`}
                className="group flex flex-col items-center gap-4 mx-8 flex-shrink-0"
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${platform.borderColor} ${platform.bgColor} ${platform.color} shadow-sm transition-all duration-300 ${platform.hoverBorder} group-hover:shadow-lg`}>
                  {platform.icon}
                </div>
                <p className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                  {platform.name}
                </p>
              </div>
            ))}
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
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
