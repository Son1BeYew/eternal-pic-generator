"use client";

export default function RotatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Rotating gradient circles - increased opacity and brightness */}
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-spin-slow opacity-40">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-300 via-blue-300 to-purple-300 blur-3xl" />
      </div>
      
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-spin-slower opacity-35">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-3xl" />
      </div>
      
      <div className="absolute left-1/3 -bottom-1/4 h-[450px] w-[450px] animate-spin-reverse opacity-30">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 blur-3xl" />
      </div>

      {/* Geometric shapes pattern - increased opacity */}
      <div className="absolute left-[15%] top-[25%] h-32 w-32 animate-spin-slow opacity-15">
        <div className="h-full w-full border-4 border-emerald-500 rounded-3xl rotate-45" />
      </div>
      
      <div className="absolute right-[20%] top-[15%] h-24 w-24 animate-spin-reverse opacity-15">
        <div className="h-full w-full border-4 border-blue-500 rounded-full" />
      </div>
      
      <div className="absolute left-[70%] top-[60%] h-28 w-28 animate-spin-slower opacity-15">
        <div className="h-full w-full border-4 border-purple-500" />
      </div>

      <div className="absolute left-[25%] top-[70%] h-20 w-20 animate-spin-slow opacity-15">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="4" className="text-pink-500" />
        </svg>
      </div>

      {/* Decorative lines - increased opacity */}
      <div className="absolute left-[5%] top-[40%] h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 animate-float" />
      <div className="absolute right-[10%] top-[55%] h-px w-40 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-float-delayed" />
      <div className="absolute left-[40%] top-[85%] h-px w-36 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30 animate-float-slow" />

      {/* Floating particles - increased size and opacity */}
      <div className="absolute left-[10%] top-[20%] h-3 w-3 animate-float rounded-full bg-emerald-500/50" />
      <div className="absolute left-[80%] top-[40%] h-4 w-4 animate-float-delayed rounded-full bg-blue-500/50" />
      <div className="absolute left-[60%] top-[70%] h-3 w-3 animate-float-slow rounded-full bg-purple-500/50" />
      <div className="absolute left-[30%] top-[80%] h-3.5 w-3.5 animate-float rounded-full bg-pink-500/50" />
      <div className="absolute left-[90%] top-[15%] h-3 w-3 animate-float-delayed rounded-full bg-yellow-500/50" />
      <div className="absolute left-[45%] top-[35%] h-2.5 w-2.5 animate-float-slow rounded-full bg-emerald-500/40" />
      <div className="absolute left-[75%] top-[75%] h-3 w-3 animate-float rounded-full bg-blue-500/40" />
      
      {/* Grid pattern overlay - slightly more visible */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </div>
  );
}
