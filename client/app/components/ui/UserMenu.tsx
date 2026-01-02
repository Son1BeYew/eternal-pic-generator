"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getUserData, logout } from "@/lib/api";

export default function UserMenu() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Tiếng Việt");
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Will be calculated from bottom-left
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const user = getUserData();
    if (user) {
      setIsLoggedIn(true);
      setUserEmail(user.email);
      setUserName(user.fullName || user.username);
    }

    // Load saved language
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    // Load saved position or set default (bottom-left: 16px from left, 16px from bottom)
    const savedPosition = localStorage.getItem("userMenuPosition");
    if (savedPosition) {
      try {
        const pos = JSON.parse(savedPosition);
        setPosition(pos);
      } catch (e) {
        console.error("Error loading user menu position:", e);
        // Default: bottom-left
        setPosition({ x: 16, y: window.innerHeight - 56 });
      }
    } else {
      // Default: bottom-left (16px from left, 16px from bottom)
      setPosition({ x: 16, y: window.innerHeight - 56 });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only allow dragging from the button, not when clicking on menu
    if (showMenu) {
      setShowMenu(false);
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setHasDragged(false); // Reset drag flag
    setIsDragging(true);
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      // Calculate offset from mouse position to button's top-left corner
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      setHasDragged(true);

      // Calculate new position based on mouse position minus the offset
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Constrain to viewport
      const buttonWidth = buttonRef.current?.offsetWidth || 40;
      const buttonHeight = buttonRef.current?.offsetHeight || 40;
      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    };

    const snapToCorner = (x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 40;
      const buttonHeight = buttonRef.current?.offsetHeight || 40;
      const padding = 16; // 16px padding from edges
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate distances to each corner
      const distances = {
        topLeft: Math.sqrt(x ** 2 + y ** 2),
        topRight: Math.sqrt((viewportWidth - x - buttonWidth) ** 2 + y ** 2),
        bottomLeft: Math.sqrt(
          x ** 2 + (viewportHeight - y - buttonHeight) ** 2
        ),
        bottomRight: Math.sqrt(
          (viewportWidth - x - buttonWidth) ** 2 +
            (viewportHeight - y - buttonHeight) ** 2
        ),
      };

      // Find the closest corner
      const closestCorner = Object.entries(distances).reduce((a, b) =>
        distances[a[0] as keyof typeof distances] <
        distances[b[0] as keyof typeof distances]
          ? a
          : b
      )[0] as keyof typeof distances;

      // Snap to the closest corner
      switch (closestCorner) {
        case "topLeft":
          return { x: padding, y: padding };
        case "topRight":
          return { x: viewportWidth - buttonWidth - padding, y: padding };
        case "bottomLeft":
          return { x: padding, y: viewportHeight - buttonHeight - padding };
        case "bottomRight":
          return {
            x: viewportWidth - buttonWidth - padding,
            y: viewportHeight - buttonHeight - padding,
          };
        default:
          return { x: padding, y: viewportHeight - buttonHeight - padding };
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // Snap to nearest corner and save position
        setPosition((currentPos) => {
          const snappedPos = snapToCorner(currentPos.x, currentPos.y);
          localStorage.setItem("userMenuPosition", JSON.stringify(snappedPos));
          return snappedPos;
        });

        // Reset hasDragged after a short delay
        setTimeout(() => setHasDragged(false), 100);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setShowMenu(false);
    router.push("/");
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
    setShowLanguageMenu(false);
    // Here you can add i18n logic to change the app language
  };

  const getInitials = (name: string) => {
    if (!name) return "U";
    return name.trim()[0].toUpperCase();
  };

  if (!mounted || !isLoggedIn) return null;

  return (
    <div
      className="fixed z-50"
      ref={menuRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute bottom-full left-0 mb-2 w-64 animate-fade-in rounded-xl border border-slate-200 bg-white shadow-lg">
          {/* User Info */}
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {getInitials(userName)}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {userName}
                </p>
                <p className="truncate text-xs text-slate-500">{userEmail}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              href="/dashboard"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Tài khoản
            </Link>

            <Link
              href="/settings"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Cài đặt
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  Ngôn ngữ
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">
                    {selectedLanguage}
                  </span>
                  <svg
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      showLanguageMenu ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {showLanguageMenu && (
                <div className="ml-4 space-y-1 border-l-2 border-slate-100 pl-4">
                  <button
                    onClick={() => handleLanguageChange("Tiếng Việt")}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50 ${
                      selectedLanguage === "Tiếng Việt"
                        ? "bg-slate-50 font-medium text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    Tiếng Việt
                    {selectedLanguage === "Tiếng Việt" && (
                      <svg
                        className="h-4 w-4 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50 ${
                      selectedLanguage === "English"
                        ? "bg-slate-50 font-medium text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    English
                    {selectedLanguage === "English" && (
                      <svg
                        className="h-4 w-4 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Đăng xuất
            </button>
          </div>
        </div>
      )}

      {/* User Button */}
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={(e) => {
          // Only toggle menu if not dragging and not just finished dragging
          if (!isDragging && !hasDragged) {
            setShowMenu(!showMenu);
          }
        }}
        className={`flex h-10 w-10 cursor-move items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-200 hover:border-slate-300 hover:shadow-lg ${
          isDragging ? "scale-105 shadow-xl" : "active:scale-95"
        }`}
        aria-label="User menu"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white pointer-events-none">
          {getInitials(userName)}
        </div>
      </button>
    </div>
  );
}
