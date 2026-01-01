"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi, schoolApi } from "@/lib/api";

interface School {
  _id: string;
  name: string;
  shortName?: string;
  logo?: string;
  gownColor?: string;
  isActive: boolean;
}

export default function GraduationPage() {
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [outfitImage, setOutfitImage] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoadingSchools, setIsLoadingSchools] = useState(true);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      setIsLoadingSchools(true);
      const response = await schoolApi.getAll();
      setSchools(response.data);
    } catch (err: any) {
      console.error("Error fetching schools:", err);
      setError("Không thể tải danh sách trường");
    } finally {
      setIsLoadingSchools(false);
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
    if (!personImage || !outfitImage || !selectedSchool) {
      setError("Vui lòng upload đầy đủ ảnh và chọn trường");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await imageApi.generateGraduation({
        personImage: personImage,
        outfitImage: outfitImage,
        schoolId: selectedSchool,
      });

      if (response.success) {
        setResultImage(response.data.imageUrl);
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi tạo ảnh tốt nghiệp");
      console.error("Error creating graduation photo:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `graduation-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Tạo ảnh tốt nghiệp</h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload ảnh cá nhân, ảnh trang phục và chọn trường để tạo ảnh tốt nghiệp
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-96 flex-shrink-0 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Ảnh cá nhân
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
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {personImage ? (
                    <img src={personImage} alt="Person" className="h-full w-full object-contain rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">Ảnh chân dung</p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Ảnh trang phục tốt nghiệp
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
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {outfitImage ? (
                    <img src={outfitImage} alt="Outfit" className="h-full w-full object-contain rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">Áo tốt nghiệp</p>
                      <p className="text-xs text-slate-500">PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Chọn trường
              </label>
              {isLoadingSchools ? (
                <div className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900"></div>
                </div>
              ) : (
                <select
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                >
                  <option value="">-- Chọn trường --</option>
                  {schools.map((school) => (
                    <option key={school._id} value={school._id}>
                      {school.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!personImage || !outfitImage || !selectedSchool || isGenerating}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGenerating ? "Đang xử lý..." : "Tạo ảnh tốt nghiệp"}
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
                    <p className="mt-4 text-sm text-slate-600">Đang tạo ảnh tốt nghiệp...</p>
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
