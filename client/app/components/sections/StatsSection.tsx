"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Hình ảnh được tạo",
      icon: "🎨",
      color: "from-emerald-500 to-teal-500",
      delay: 0,
    },
    {
      number: 12,
      suffix: "",
      label: "AI Models mạnh mẽ",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      delay: 100,
    },
    {
      number: 5000,
      suffix: "+",
      label: "Người dùng hài lòng",
      icon: "⭐",
      color: "from-amber-500 to-orange-500",
      delay: 200,
    },
    {
      number: 99,
      suffix: "%",
      label: "Chất lượng đảm bảo",
      icon: "✨",
      color: "from-pink-500 to-rose-500",
      delay: 300,
    },
  ];

  return (
    <section ref={sectionRef} className="relative mt-24 overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-64 w-64 animate-blob rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="animation-delay-2000 absolute -right-20 top-1/3 h-64 w-64 animate-blob rounded-full bg-blue-200/30 blur-3xl" />
        <div className="animation-delay-4000 absolute left-1/3 -bottom-20 h-64 w-64 animate-blob rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
            Thành tựu
          </p>
          <h2 className="animate-fade-in-up animation-delay-100 mt-3 text-3xl font-semibold tracking-tight">
            Con số ấn tượng, kết quả thực tế
          </h2>
          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-4 max-w-2xl text-lg text-black/60">
            Hàng nghìn người đã tin tưởng và tạo ra những tác phẩm tuyệt vời với EternalPic
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              {/* Floating icon */}
              <div className="relative mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl">
                  {stat.icon}
                </div>
              </div>

              {/* Animated number */}
              <div className="relative text-center">
                <div className="flex items-baseline justify-center">
                  <AnimatedNumber
                    value={stat.number}
                    isVisible={isVisible}
                    delay={stat.delay}
                  />
                  <span className="ml-1 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-black/60 transition-colors duration-300 group-hover:text-black/80">
                  {stat.label}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float-slow absolute left-1/4 top-20 h-2 w-2 rounded-full bg-emerald-400/40" />
          <div className="animation-delay-1000 animate-float-slow absolute right-1/3 top-40 h-3 w-3 rounded-full bg-blue-400/40" />
          <div className="animation-delay-2000 animate-float-slow absolute left-1/2 bottom-20 h-2 w-2 rounded-full bg-amber-400/40" />
          <div className="animation-delay-3000 animate-float-slow absolute right-1/4 bottom-40 h-3 w-3 rounded-full bg-pink-400/40" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

function AnimatedNumber({
  value,
  isVisible,
  delay,
}: {
  value: number;
  isVisible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
      {count.toLocaleString()}
    </span>
  );
}

