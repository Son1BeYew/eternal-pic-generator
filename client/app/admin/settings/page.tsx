"use client";

import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: "EternalPic",
    siteDescription: "Nền tảng tạo ảnh AI chuyên nghiệp",
    maxImageSize: "10",
    allowRegistration: true,
    requireEmailVerification: false,
    maintenanceMode: false,
  });

  const handleSave = () => {
    // TODO: Save settings to API
    alert("Đã lưu cài đặt!");
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Cài đặt</h1>
        <p className="mt-2 text-slate-600">
          Quản lý cấu hình hệ thống
        </p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Cài đặt chung
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Tên trang web
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) =>
                  setSettings({ ...settings, siteName: e.target.value })
                }
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Mô tả trang web
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) =>
                  setSettings({ ...settings, siteDescription: e.target.value })
                }
                rows={3}
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Kích thước ảnh tối đa (MB)
              </label>
              <input
                type="number"
                value={settings.maxImageSize}
                onChange={(e) =>
                  setSettings({ ...settings, maxImageSize: e.target.value })
                }
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>
        </div>

        {/* User Settings */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Cài đặt người dùng
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Cho phép đăng ký
                </p>
                <p className="text-xs text-slate-600">
                  Người dùng mới có thể tạo tài khoản
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    allowRegistration: !settings.allowRegistration,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.allowRegistration ? "bg-emerald-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.allowRegistration ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Yêu cầu xác thực email
                </p>
                <p className="text-xs text-slate-600">
                  Người dùng phải xác thực email trước khi sử dụng
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    requireEmailVerification: !settings.requireEmailVerification,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.requireEmailVerification
                    ? "bg-emerald-600"
                    : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.requireEmailVerification
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Cài đặt hệ thống
          </h2>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Chế độ bảo trì
                </p>
                <p className="text-xs text-slate-600">
                  Tạm thời tắt trang web để bảo trì
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    maintenanceMode: !settings.maintenanceMode,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.maintenanceMode ? "bg-red-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.maintenanceMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
