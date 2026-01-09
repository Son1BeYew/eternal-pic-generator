"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "../components/layout";
import UserMenu from "../components/ui/UserMenu";

export default function PricingPage() {
  const [planType, setPlanType] = useState<"individual" | "team">("individual");
  const [proBillingPeriod, setProBillingPeriod] = useState<
    "monthly" | "yearly"
  >("yearly");

  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <Header />
      <UserMenu />
      <div className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_10%,#f1f5f9_0%,transparent_60%),radial-gradient(50%_70%_at_80%_20%,#f0fdf4_0%,transparent_55%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-24 sm:px-10 lg:px-12">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Gói dịch vụ phù hợp với bạn
            </h1>

            {/* Plan Type Toggle */}
            <div className="mt-10 flex items-center justify-center">
              <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setPlanType("individual")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    planType === "individual"
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Cá nhân
                </button>
                <button
                  onClick={() => setPlanType("team")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    planType === "team"
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Nhóm & Doanh nghiệp
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div 
            className="mt-16 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gridAutoRows: '1fr'
            }}
          >
            {/* Free Plan */}
            <div 
              className="pricing-card-wrapper relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              style={{ minHeight: '100%' }}
            >
              {/* Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    className="h-8 w-8 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="pricing-card-header">
                <h3 className="text-xl font-semibold text-slate-900">Free</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Khám phá EternalPic
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">
                    0 VND
                  </span>
                </div>
                <div className="h-5"></div>

                <Link
                  href="/auth"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-center text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
                >
                  Sử dụng miễn phí
                </Link>
              </div>

              <div className="pricing-card-features mt-8 grow space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Tạo và chỉnh sửa ảnh trên web, iOS và Android
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Nâng cao chất lượng ảnh
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Xóa nền và chỉnh sửa nâng cao
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Tạo ảnh từ mô tả
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Lưu trữ 100 ảnh
                  </span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div 
              className="pricing-card-wrapper relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              style={{ minHeight: '100%' }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <svg
                      className="h-8 w-8 text-slate-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </div>

                  {/* Billing Toggle for Pro */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="inline-flex rounded-full border border-slate-200 bg-white p-0.5">
                      <button
                        onClick={() => setProBillingPeriod("monthly")}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          proBillingPeriod === "monthly"
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        Tháng
                      </button>
                      <button
                        onClick={() => setProBillingPeriod("yearly")}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          proBillingPeriod === "yearly"
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        Năm
                      </button>
                    </div>
                    <div className="h-4">
                      {proBillingPeriod === "yearly" && (
                        <span className="text-xs font-medium text-emerald-600">
                          Tiết kiệm 17%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pricing-card-header">
                <h3 className="text-xl font-semibold text-slate-900">Pro</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Sáng tạo chuyên nghiệp
                </p>

                <div className="mt-6">
                  {proBillingPeriod === "monthly" ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-semibold tracking-tight text-slate-900">
                        199K VND
                      </span>
                      <span className="ml-2 text-sm font-medium text-slate-600">
                        / tháng
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-semibold tracking-tight text-slate-900">
                          166K VND
                        </span>
                        <span className="ml-2 text-sm font-medium text-slate-600">
                          / tháng
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        thanh toán hàng năm
                      </p>
                    </div>
                  )}
                </div>
                <div className="h-5"></div>

                <Link
                  href="/auth"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-center text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
                >
                  Nâng cấp lên Pro
                </Link>
              </div>

              <div className="pricing-card-features mt-8 grow space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Tất cả tính năng trong Free, và:
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Sử dụng nhiều hơn gói Free*
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Truy cập nhiều mô hình AI hơn
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Dự án không giới hạn để tổ chức ảnh
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Công cụ chỉnh sửa nâng cao
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Xử lý ảnh chất lượng cao
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Kết nối với Google Workspace
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">Tích hợp API</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Bao gồm tất cả tính năng Pro
                  </span>
                </div>
              </div>
            </div>

            {/* Max Plan - Highlighted */}
            <div 
              className="pricing-card-wrapper relative flex flex-col rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              style={{ minHeight: '100%' }}
            >
              {/* Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg
                    className="h-8 w-8 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="pricing-card-header">
                <h3 className="text-xl font-semibold text-slate-900">Max</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">
                  Giới hạn cao hơn, ưu tiên truy cập
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold tracking-tight text-slate-900">
                      Từ 499K VND
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    / tháng thanh toán hàng tháng
                  </p>
                </div>
                <div className="h-5"></div>

                <Link
                  href="/auth"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-center text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
                >
                  Nâng cấp lên Max
                </Link>
              </div>

              <div className="pricing-card-features mt-8 grow space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Tất cả tính năng trong Pro, và:
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Chọn 5x hoặc 20x sử dụng nhiều hơn Pro*
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Giới hạn output cao hơn cho mọi tác vụ
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Truy cập sớm các tính năng nâng cao
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Ưu tiên truy cập vào giờ cao điểm
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-700">
                    Bao gồm tất cả tính năng Max
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600">
              *Giới hạn sử dụng có áp dụng. Giá hiển thị chưa bao gồm thuế VAT.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
