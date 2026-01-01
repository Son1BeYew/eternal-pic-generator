"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi, hairstylePromptApi } from "@/lib/api";

interface HairstylePrompt {
  _id: string;
  name: string;
  prompt: string;
  thumbnail?: string;
  isActive: boolean;
}

export default function ChangeHairstylePage() {
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [selectedHairstyle, setSelectedHairstyle] = useState<HairstylePrompt | null>(null);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [hairstyles, setHairstyles] = useState<HairstylePrompt[]>([]);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoadingHairstyles, setIsLoadingHairstyles] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHairstyles();
  }, []);

  const fetchHairstyles = async () => {
    try {
      setIsLoadingHairstyles(true);
      const response = await hairstylePromptApi.getAll();
      // Only show active hairstyles
      setHairstyles(response.data.filter((h: HairstylePrompt) => h.isActive));
    } catch (err: any) {
      console.error("Error fetching hairstyles:", err);
      setError("Không thể tải danh sách kiểu tóc");
    } finally {
      setIsLoadingHairstyles(false);
    }
  };

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

  const handleGenerate = async () => {
    if (!personImage || !selectedHairstyle) {
      setError("Vui lòng upload ảnh người và chọn kiểu tóc");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const genderPrefix = gender === "male" ? "male person" : "female person";
      const enhancedPrompt = `${genderPrefix} with ${selectedHairstyle.prompt}`;

      const response = await imageApi.changeHairstyle({
        prompt: enhancedPrompt,
        style: "realistic",
        baseImage: personImage,
      });

      if (response.success) {
        setResultImage(response.data.imageUrl);
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi thay đổi kiểu tóc");
      console.error("Error changing hairstyle:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `hairstyle-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Thay đổi kiểu tóc
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload ảnh người và chọn kiểu tóc bạn muốn
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-96 flex-shrink-0 space-y-4">
            {/* Upload ảnh người */}
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
                    <img src={personImage} alt="Person" className="h-full w-full object-contain rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">Click để upload ảnh người</p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Chọn giới tính */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Giới tính
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setGender("male");
                    setResultImage(null);
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    gender === "male"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nam
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGender("female");
                    setResultImage(null);
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    gender === "female"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nữ
                </button>
              </div>
            </div>

            {/* Chọn kiểu tóc */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Chọn kiểu tóc
              </label>
              
              {isLoadingHairstyles ? (
                <div className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900"></div>
                </div>
              ) : (
                <select
                  value={selectedHairstyle?._id || ""}
                  onChange={(e) => {
                    const hairstyle = hairstyles.find(h => h._id === e.target.value);
                    setSelectedHairstyle(hairstyle || null);
                    setResultImage(null);
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="">-- Chọn kiểu tóc --</option>
                  {hairstyles.map((hairstyle) => (
                    <option key={hairstyle._id} value={hairstyle._id}>
                      {hairstyle.name}
                    </option>
                  ))}
                </select>
              )}

              {/* Show selected hairstyle details */}
              {selectedHairstyle && (
                <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-start gap-3">
                    {selectedHairstyle.thumbnail ? (
                      <img
                        src={selectedHairstyle.thumbnail}
                        alt={selectedHairstyle.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{selectedHairstyle.name}</p>
                      <p className="mt-1 text-xs text-slate-600 line-clamp-3">
                        {selectedHairstyle.prompt}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!personImage || !selectedHairstyle || isGenerating}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Đang xử lý..." : "Thay đổi kiểu tóc"}
            </button>
          </div>

          {/* Kết quả */}
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-slate-700">Kết quả</h3>
            </div>

            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4">
              {isGenerating ? (
                <div className="flex h-[400px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
                    <p className="mt-4 text-sm text-slate-600">Đang thay đổi kiểu tóc...</p>
                  </div>
                </div>
              ) : resultImage ? (
                <div>
                  <img src={resultImage} alt="Result" className="w-full max-h-[500px] object-contain rounded-lg" />
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
