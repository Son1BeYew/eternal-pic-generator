export default function SocialConnect() {
  const socialPlatforms = [
    {
      name: "Claude",
      color: "text-[#CC9B7A]",
      bgColor: "bg-[#CC9B7A]/10",
      borderColor: "border-[#CC9B7A]/30",
      hoverBorder: "group-hover:border-[#CC9B7A]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l2.5 7.5H22l-6.5 5 2.5 7.5L12 15l-6 5 2.5-7.5-6.5-5h7.5L12 0z"/>
        </svg>
      ),
    },
    {
      name: "GPT",
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
      name: "Gemini",
      color: "text-[#4285F4]",
      bgColor: "bg-[#4285F4]/10",
      borderColor: "border-[#4285F4]/30",
      hoverBorder: "group-hover:border-[#4285F4]",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z"/>
        </svg>
      ),
    },
    {
      name: "Grok",
      color: "text-[#000000]",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      hoverBorder: "group-hover:border-slate-900",
      icon: (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110"
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
    </section>
  );
}
