"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

export default function GalleryPage() {
  const [scenes, setScenes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadScenes();
  }, []);

  const loadScenes = async () => {
    try {
      setIsLoading(true);
      const response = await imageApi.getUserScenes();
      if (response.success) {
        setScenes(response.data);
      }
    } catch (err: any) {
      setError(err.message || "Không thể tải ảnh");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = async (id: string) => {
    try {
      const response = await imageApi.toggleFavorite(id);
      if (response.success) {
        setScenes(scenes.map(scene => 
          scene._id === id ? { ...scene, isFavorite: response.data.isFavorite } : scene
        ));
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa ảnh này?")) return;
    
    try {
      await imageApi.deleteScene(id);
      setScenes(scenes.filter(scene => scene._id !== id));
    } catch (err) {
      console.error("Error deleting scene:", err);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Thư viện của tôi</h2>
          <p className="mt-1 text-sm text-slate-600">
            Tất cả ảnh bạn đã tạo ({scenes.length} ảnh)
          </p>
        </div>

        {isLoading ? (
          <div className="flex h-96 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
              <p className="mt-4 text-sm text-slate-600">Đang tải...</p>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        ) : scenes.length === 0 ? (
          <div className="flex h-96 items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-4 text-sm text-slate-600">Chưa có ảnh nào</p>
              <p className="mt-1 text-xs text-slate-500">Hãy tạo ảnh đầu tiên của bạn</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scenes.map((scene) => (
              <div
                key={scene._id}
                className="group relative rounded-lg border border-slate-200 bg-white overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={scene.imageUrl}
                    alt={scene.prompt}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleToggleFavorite(scene._id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
                  >
                    <svg
                      className={`h-5 w-5 ${scene.isFavorite ? 'text-red-500' : 'text-slate-600'}`}
                      fill={scene.isFavorite ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-600 line-clamp-2">{scene.prompt}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleDownload(scene.imageUrl)}
                      className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Tải xuống
                    </button>
                    <button
                      onClick={() => handleDelete(scene._id)}
                      className="rounded-lg border border-red-300 bg-white px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
