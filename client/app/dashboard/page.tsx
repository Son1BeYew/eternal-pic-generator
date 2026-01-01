"use client";

import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            Chào mừng đến với EternalPic
          </h1>
          <p className="mt-4 text-slate-600">
            Chọn một tính năng từ menu bên trái để bắt đầu
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
