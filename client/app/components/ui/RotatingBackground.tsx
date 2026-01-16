"use client";

export default function RotatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Rotating gradient circles */}
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-spin-slow opacity-30">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-200 via-blue-200 to-purple-200 blur-3xl" />
      </div>
      
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-spin-slower opacity-25">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 blur-3xl" />
      </div>
      
      <div className="absolute left-1/3 -bottom-1/4 h-[450px] w-[450px] animate-spin-reverse opacity-20">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-float rounded-full bg-emerald-400/40" />
      <div className="absolute left-[80%] top-[40%] h-3 w-3 animate-float-delayed rounded-full bg-blue-400/40" />
      <div className="absolute left-[60%] top-[70%] h-2 w-2 animate-float-slow rounded-full bg-purple-400/40" />
      <div className="absolute left-[30%] top-[80%] h-2.5 w-2.5 animate-float rounded-full bg-pink-400/40" />
      <div className="absolute left-[90%] top-[15%] h-2 w-2 animate-float-delayed rounded-full bg-yellow-400/40" />
    </div>
  );
}
