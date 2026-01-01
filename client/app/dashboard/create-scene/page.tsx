"use client";

import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

const sceneStyles = [
  { id: "realistic", label: "Realistic" },
  { id: "anime", label: "Anime" },
  { id: "cartoon", label: "Cartoon" },
  { id: "painting", label: "Painting" },
];

export default function CreateScenePage() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("realistic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sceneId, setSceneId] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await imageApi.generateScene({
        prompt: prompt.trim(),
        style: selectedStyle,
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
            <h3 className="text-lg font-semibold text-slate-900">
              Kết quả
            </h3>
            <p className="text-sm text-slate-600">
              Ảnh của bạn sau khi thay đổi bối cảnh
            </p>
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
    </DashboardLayout>
  );
}
