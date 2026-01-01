"use client";

import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

export default function EnhancePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enhanceLevel, setEnhanceLevel] = useState<string>("medium");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      setError("Vui lòng upload ảnh");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const enhancePrompts = {
        low: "slightly enhanced, improved quality",
        medium: "enhanced quality, sharper details, better colors",
        high: "highly enhanced, 4K quality, ultra sharp, professional photography, perfect lighting",
      };

      const response = await imageApi.enhanceImage({
        baseImage: uploadedImage,
        enhanceLevel: enhanceLevel,
      });

      if (response.success) {
        setResultImage(response.data.imageUrl);
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi nâng cao chất lượng");
      console.error("Error enhancing:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `enhanced-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Nâng cao chất lượng</h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload ảnh để nâng cao độ phân giải và chất lượng
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-96 flex-shrink-0 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload ảnh
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Uploaded" className="h-full w-full object-contain rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">Click để upload ảnh</p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mức độ nâng cao
              </label>
              <select
                value={enhanceLevel}
                onChange={(e) => setEnhanceLevel(e.target.value)}
                className="block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="low">Thấp - Cải thiện nhẹ</option>
                <option value="medium">Trung bình - Nâng cao rõ rệt</option>
                <option value="high">Cao - Chất lượng tối đa</option>
              </select>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!uploadedImage || isGenerating}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Đang xử lý..." : "Nâng cao chất lượng"}
            </button>
          </div>

          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-slate-700">Kết quả</h3>
            </div>

            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4">
              {isGenerating ? (
                <div className="flex h-[400px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
                    <p className="mt-4 text-sm text-slate-600">Đang nâng cao chất lượng...</p>
                  </div>
                </div>
              ) : resultImage ? (
                <div>
                  <img src={resultImage} alt="Result" className="w-full max-h-[500px] object-contain rounded-lg mx-auto" />
                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      onClick={() => handleDownload(resultImage)}
                      className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Tải xuống
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex h-[400px] items-center justify-center">
                  <p className="text-sm text-slate-500">Kết quả sẽ hiển thị ở đây</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
