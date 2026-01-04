"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi, getUserData } from "@/lib/api";

const sceneStyles = [
  { id: "realistic", label: "Realistic" },
  { id: "anime", label: "Anime" },
  { id: "cartoon", label: "Cartoon" },
  { id: "painting", label: "Painting" },
];

export default function CreateScenePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("realistic");
  const [outputType, setOutputType] = useState<"normal" | "360">("normal");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sceneId, setSceneId] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [show360Modal, setShow360Modal] = useState(false);
  const [userPlan, setUserPlan] = useState<string>("free");

  useEffect(() => {
    // Check user plan from user data
    const user = getUserData();
    if (user) {
      // Assuming user object has a plan field, otherwise default to "free"
      setUserPlan((user as any).plan || "free");
    }
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await imageApi.generateScene({
        prompt: prompt.trim(),
        style: selectedStyle,
        outputType: outputType,
      });

      if (response.success) {
        setGeneratedImage(response.data.imageUrl);
        setSceneId(response.data._id);
        setIsFavorite(response.data.isFavorite);
      }
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi tạo ảnh');
      console.error('Error generating scene:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `scene-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleToggleFavorite = async () => {
    if (!sceneId) return;
    
    try {
      const response = await imageApi.toggleFavorite(sceneId);
      if (response.success) {
        setIsFavorite(response.data.isFavorite);
      }
    } catch (err: any) {
      console.error('Error toggling favorite:', err);
    }
  };

  const handleOpenVariation = () => {
    if (!generatedImage || !sceneId) return;
    
    // Save data to localStorage instead of URL params
    localStorage.setItem('editImageData', JSON.stringify({
      imageUrl: generatedImage,
      prompt: prompt,
      sceneId: sceneId,
      style: selectedStyle
    }));
    
    // Navigate to edit page
    window.location.href = '/dashboard/edit-image';
  };

  return (
    <DashboardLayout>
      <div className="flex h-full gap-6">
        {/* Left Panel - Prompt Input */}
        <div className="w-80 flex-shrink-0 space-y-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Tạo bối cảnh
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Chọn phong cách và mô tả bối cảnh
            </p>
          </div>

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phong cách
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            >
              {sceneStyles.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>

          {/* Prompt Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Mô tả bối cảnh
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ví dụ: Một quán cà phê ấm cúng với ánh sáng vàng..."
              rows={5}
              maxLength={500}
              className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
            <p className="mt-1.5 text-xs text-slate-500">
              {prompt.length}/500 ký tự
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isGenerating ? "Đang tạo..." : "Tạo ảnh"}
          </button>
        </div>

        {/* Right Panel - Output */}
        <div className="flex flex-1 flex-col">
          <div className="mb-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Kết quả
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ảnh của bạn sau khi thay đổi bối cảnh
                  </p>
                </div>
              </div>
              
              {/* Output Type Selection - Toggle Style */}
              <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 w-fit">
                <button
                  type="button"
                  onClick={() => {
                    if (outputType !== "normal") {
                      setOutputType("normal");
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    outputType === "normal"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Ảnh thường</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (outputType !== "360") {
                      // Always show modal first to confirm
                      setShow360Modal(true);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    outputType === "360"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Ảnh 360°</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
            {isGenerating ? (
              <div className="text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
                <p className="mt-4 text-sm text-slate-600">
                  Đang tạo ảnh của bạn...
                </p>
              </div>
            ) : generatedImage ? (
              <div className="w-full px-8">
                {/* Action Buttons Above Image */}
                <div className="mb-4 flex justify-center gap-3">
                  <button 
                    onClick={() => {
                      // Re-generate with same prompt
                      handleGenerate();
                    }}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Tạo lại
                  </button>
                  
                  <button 
                    onClick={handleOpenVariation}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Biến thể
                  </button>

                  <button 
                    onClick={handleToggleFavorite}
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      isFavorite
                        ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
                        : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill={isFavorite ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {isFavorite ? "Đã yêu thích" : "Yêu thích"}
                  </button>

                  <button 
                    onClick={handleDownload}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Tải xuống
                  </button>
                </div>

                {/* Generated Image */}
                <div className="flex justify-center">
                  <img
                    src={generatedImage}
                    alt="Generated"
                    className="max-h-[550px] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <svg
                  className="mx-auto h-16 w-16 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-4 text-sm text-slate-600">
                  Viết mô tả bối cảnh để bắt đầu tạo ảnh
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 360° Modal */}
      {show360Modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShow360Modal(false)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
              userPlan === "pro" || userPlan === "max" 
                ? "bg-green-100" 
                : "bg-blue-100"
            }`}>
              <svg className={`h-8 w-8 ${
                userPlan === "pro" || userPlan === "max" 
                  ? "text-green-600" 
                  : "text-blue-600"
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-center text-2xl font-semibold text-slate-900">
              {userPlan === "pro" || userPlan === "max" 
                ? "Xác nhận tạo ảnh 360°" 
                : "Tính năng Ảnh 360°"}
            </h3>

            {/* Description */}
            {userPlan === "pro" || userPlan === "max" ? (
              <div className="mb-6">
                <p className="mb-4 text-center text-sm text-slate-600">
                  Bạn đã có gói <span className="font-semibold text-slate-900 capitalize">{userPlan}</span>. Bạn có muốn tạo ảnh 360° không?
                </p>
                <div className="space-y-3 rounded-lg bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Tính năng độc quyền</p>
                      <p className="text-xs text-slate-600">Tạo ảnh panoramic 360° chất lượng cao</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="mb-6 text-center text-sm text-slate-600">
                  Tính năng tạo ảnh 360° chỉ dành cho gói <span className="font-semibold text-slate-900">Pro</span> và <span className="font-semibold text-slate-900">Max</span>
                </p>

                {/* Requirements List */}
                <div className="mb-6 space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Yêu cầu bắt buộc</p>
                      <p className="text-xs text-slate-600">Phải có gói Pro hoặc Max</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Tính năng độc quyền</p>
                      <p className="text-xs text-slate-600">Tạo ảnh panoramic 360° chất lượng cao</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShow360Modal(false)}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Hủy
              </button>
              {userPlan === "pro" || userPlan === "max" ? (
                <button
                  onClick={() => {
                    setOutputType("360");
                    setShow360Modal(false);
                  }}
                  className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Xác nhận
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShow360Modal(false);
                    router.push("/pricing");
                  }}
                  className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Nâng cấp ngay
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
