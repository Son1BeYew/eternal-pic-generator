"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalImages: 0,
    activeUsers: 0,
    storageUsed: "0 GB",
  });

  useEffect(() => {
    // TODO: Fetch real stats from API
    setStats({
      totalUsers: 1247,
      totalImages: 8932,
      activeUsers: 342,
      storageUsed: "45.2 GB",
    });
  }, []);

  const statCards = [
    {
      label: "Tổng người dùng",
      value: stats.totalUsers.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      label: "Tổng ảnh đã tạo",
      value: stats.totalImages.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-emerald-500",
      change: "+8%",
    },
    {
      label: "Người dùng hoạt động",
      value: stats.activeUsers.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-amber-500",
      change: "+5%",
    },
    {
      label: "Dung lượng sử dụng",
      value: stats.storageUsed,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "bg-slate-500",
      change: "+15%",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          Tổng quan hệ thống
        </h1>
        <p className="mt-2 text-slate-600">
          Chào mừng đến với bảng điều khiển quản trị
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-emerald-600">
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-600">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Hoạt động gần đây
        </h2>
        <div className="mt-4 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                U{i}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">
                  Người dùng {i} đã tạo ảnh mới
                </p>
                <p className="text-xs text-slate-500">{i} phút trước</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Hoàn thành
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
