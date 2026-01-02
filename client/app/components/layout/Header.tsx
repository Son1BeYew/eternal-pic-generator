"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getUserData } from "@/lib/api";

const navItems = [
  {
    label: "Tính năng",
    hasDropdown: true,
    items: [
      { label: "Quản lý dự án", href: "/features/project-management" },
      { label: "Thư viện ảnh", href: "/features/image-library" },
      { label: "Preset & Chỉnh sửa", href: "/features/presets-editing" },
      { label: "Báo cáo", href: "/features/reports" },
    ],
  },
  {
    label: "Nền tảng",
    hasDropdown: true,
    items: [
      { label: "Web App", href: "#" },
      { label: "Desktop", href: "#" },
      { label: "Mobile", href: "#" },
    ],
  },
  {
    label: "Nâng cấp",
    hasDropdown: false,
    href: "/pricing",
  },
  {
    label: "Tài nguyên",
    hasDropdown: true,
    items: [
      { label: "Hướng dẫn", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Hỗ trợ", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const user = getUserData();
    setIsLoggedIn(!!user);
  }, []);

  return (
    <header className="ep-header fixed left-1/2 top-4 z-50 mx-4 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)]">
      <div className="ep-header__left flex items-center gap-8">
        <a href="/" className="ep-header__logo group flex items-center gap-2.5">
          <div className="ep-header__logo-icon flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-md transition-transform duration-300 group-hover:scale-110">
            <span className="text-xs font-bold text-white">EP</span>
          </div>
          <span className="ep-header__logo-text text-base font-semibold tracking-tight text-slate-800">
            EternalPic
          </span>
        </a>

        <nav className="ep-header__nav hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="ep-header__nav-wrapper relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.hasDropdown ? (
                <button className="ep-header__nav-item flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95">
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <a
                  href={item.href}
                  className="ep-header__nav-item flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95"
                >
                  {item.label}
                </a>
              )}

              {item.hasDropdown && openDropdown === item.label && (
                <div className="ep-header__dropdown absolute left-0 top-full z-50 mt-2 min-w-[180px] animate-fade-in rounded-xl border border-black/5 bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="ep-header__dropdown-item block rounded-lg px-3 py-2 text-sm text-slate-600 transition-all duration-150 hover:bg-slate-100 hover:text-slate-900"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="ep-header__actions flex items-center gap-3">
        {isLoggedIn ? (
          <Link
            href="/dashboard"
            className="ep-header__btn ep-header__btn--dashboard rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 active:scale-95"
          >
            Bảng điều khiển
          </Link>
        ) : (
          <>
            <Link
              href="/auth"
              className="ep-header__btn ep-header__btn--signin px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:text-slate-900 active:scale-95"
            >
              Đăng nhập
            </Link>
            <Link
              href="/auth"
              className="ep-header__btn ep-header__btn--cta rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg active:scale-95"
            >
              Bắt đầu ngay
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
