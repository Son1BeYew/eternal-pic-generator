"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

interface TrendingImage {
  _id: string;
  title: string;
  prompt: string;
  imageUrl: string;
  category: string;
  order: number;
  isActive: boolean;
}

export default function TrendingPage() {
  const [trendingStyles, setTrendingStyles] = useState<TrendingImage[]>([]);
  const [isLoadingStyles, setIsLoadingStyles] = useState(true);
  const [selectedTrend, setSelectedTrend] = useState<TrendingImage | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [sceneId, setSceneId] = useState<string | null>(null);

  useEffect(() => {
    fetchTrendingImages();
  }, []);

  const fetchTrendingImages = async () => {
    try {
      setIsLoadingStyles(true);
      const response = await fetch("http://localhost:5000/api/trending-images");
      const data = await response.json();
      
      if (data.success) {
        setTrendingStyles(data.data);
      }
    } catch (err) {
      console.error("Error fetching trending images:", err);
    } finally {
      setIsLoadingStyles(false);
    }
  };

  const displayedStyles = showAll ? trendingStyles : trendingStyles.slice(0, 8);

  const handleTrendSelect = (trend: TrendingImage) => {
    setSelectedTrend(trend);
    setUploadedImage(null);
    setResultImage(null);
  };

  const handleBack = () => {
    setSelectedTrend(null);
    setUploadedImage(null);
    setResultImage(null);
    setError(null);
  };

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
    if (!uploadedImage || !selectedTrend) {
      setError("Vui lòng upload ảnh");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/trending-images/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          trendingImageId: selectedTrend._id,
          personImage: uploadedImage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResultImage(data.data.imageUrl);
        setSceneId(data.data._id);
        setIsFavorite(data.data.isFavorite || false);
      } else {
        setError(data.message || "Có lỗi xảy ra");
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi tạo ảnh xu hướng");
      console.error("Error creating trending image:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `trending-${Date.now()}.png`;
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
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  // If no trend selected, show grid
  if (!selectedTrend) {
    return (
      <DashboardLayout>
        <div className="h-full">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Tạo ảnh xu hướng</h2>
            <p className="mt-1 text-sm text-slate-600">
              Chọn phong cách xu hướng để bắt đầu tạo ảnh
            </p>
          </div>

          {isLoadingStyles ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
            </div>
          ) : trendingStyles.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-sm text-slate-500">Chưa có ảnh xu hướng nào</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedStyles.map((trend) => (
                  <div
                    key={trend._id}
                    className="group relative rounded-lg border border-slate-200 bg-white overflow-hidden transition-all hover:shadow-lg hover:border-slate-300"
                  >
                    {/* Favorite button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Add to favorites
                      }}
                      className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
                    >
                      <svg
                        className="h-5 w-5 text-slate-600 hover:text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    <div
                      onClick={() => handleTrendSelect(trend)}
                      className="cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={trend.imageUrl}
                          alt={trend.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-slate-900">{trend.title}</h3>
                        <p className="mt-1 text-xs text-slate-600 line-clamp-2">{trend.prompt}</p>
                        <span className="mt-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                          {trend.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!showAll && trendingStyles.length > 8 && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Xem thêm
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}

              {showAll && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowAll(false)}
                    className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Thu gọn
                    <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </DashboardLayout>
    );
  }

  // If trend selected, show upload page
  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Quay lại
              </button>
              <h2 className="text-xl font-semibold text-slate-900">{selectedTrend.title}</h2>
            </div>
            <p className="mt-1 text-sm text-slate-600 line-clamp-1">{selectedTrend.prompt}</p>
          </div>
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
              {isGenerating ? "Đang xử lý..." : "Tạo ảnh"}
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
                    <p className="mt-4 text-sm text-slate-600">Đang tạo ảnh xu hướng...</p>
                  </div>
                </div>
              ) : resultImage ? (
                <div>
                  <img src={resultImage} alt="Result" className="w-full max-h-[500px] object-contain rounded-lg mx-auto" />
                  <div className="mt-4 flex justify-center gap-3">
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {isFavorite ? "Đã yêu thích" : "Yêu thích"}
                    </button>
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
