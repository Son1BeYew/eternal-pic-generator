"use client";

import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

export default function ChangeOutfitPage() {
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [outfitImage, setOutfitImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePersonImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOutfitImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOutfitImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!personImage || !outfitImage) {
      setError("Vui lòng upload cả ảnh người và ảnh trang phục");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const prompt = `A person wearing the outfit from the reference image, professional photography, high quality, detailed clothing, realistic`;

      const response = await imageApi.changeOutfit({
        prompt,
        style: "realistic",
        baseImage: personImage,
      });

      if (response.success) {
        setResultImage(response.data.imageUrl);
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi thay đổi trang phục");
      console.error("Error changing outfit:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `outfit-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Thay đổi trang phục
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload ảnh người và ảnh trang phục để thay đổi
          </p>
        </div>

        <div className="flex gap-6">
          {/* Left: Upload Images */}
          <div className="w-96 flex-shrink-0 space-y-4">
            {/* Upload Person Image */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Ảnh người
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePersonImageUpload}
                  className="hidden"
                  id="person-upload"
                />
                <label
                  htmlFor="person-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {personImage ? (
                    <img
                      src={personImage}
                      alt="Person"
                      className="h-full w-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-slate-400"
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
                      <p className="mt-2 text-sm text-slate-600">
                        Click để upload ảnh người
                      </p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Upload Outfit Image */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Ảnh trang phục
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleOutfitImageUpload}
                  className="hidden"
                  id="outfit-upload"
                />
                <label
                  htmlFor="outfit-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {outfitImage ? (
                    <img
                      src={outfitImage}
                      alt="Outfit"
                      className="h-full w-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">
                        Click để upload ảnh trang phục
                      </p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!personImage || !outfitImage || isGenerating}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Đang xử lý..." : "Thay đổi trang phục"}
            </button>
          </div>

          {/* Right: Result */}
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-slate-700">Kết quả</h3>
            </div>

            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4">
              {isGenerating ? (
                <div className="flex h-[400px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
                    <p className="mt-4 text-sm text-slate-600">
                      Đang thay đổi trang phục...
                    </p>
                  </div>
                </div>
              ) : resultImage ? (
                <div>
                  <img
                    src={resultImage}
                    alt="Result"
                    className="w-full max-h-[500px] object-contain rounded-lg mx-auto"
                  />
                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleDownload(resultImage)}
                      className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Tải xuống
                    </button>
                    <button
                      onClick={() => {
                        setResultImage(null);
                      }}
                      className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Thử lại
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex h-[400px] items-center justify-center">
                  <p className="text-sm text-slate-500">
                    Kết quả sẽ hiển thị ở đây
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
