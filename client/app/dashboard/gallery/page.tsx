"use client";

import { useRouter } from "next/navigation";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  bgColor: string;
}

export default function GalleryPage() {
  const router = useRouter();

  const categories: Category[] = [
    {
      id: "create-scene",
      title: "Tạo ảnh từ văn bản",
      description: "Tạo ảnh từ mô tả văn bản với nhiều phong cách khác nhau",
      icon: "✨",
      href: "/dashboard/create-scene",
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    },
    {
      id: "edit-image",
      title: "Chỉnh sửa ảnh",
      description: "Chỉnh sửa ảnh hiện có bằng AI theo mô tả của bạn",
      icon: "🎨",
      href: "/dashboard/edit-image",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      id: "change-hairstyle",
      title: "Đổi kiểu tóc",
      description: "Thử nghiệm các kiểu tóc khác nhau trên ảnh của bạn",
      icon: "💇",
      href: "/dashboard/change-hairstyle",
      color: "text-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100"
    },
    {
      id: "change-outfit",
      title: "Đổi trang phục",
      description: "Thay đổi trang phục trong ảnh một cách dễ dàng",
      icon: "👔",
      href: "/dashboard/change-outfit",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100"
    },
    {
      id: "graduation",
      title: "Ảnh tốt nghiệp",
      description: "Tạo ảnh tốt nghiệp chuyên nghiệp với áo tốt nghiệp",
      icon: "🎓",
      href: "/dashboard/graduation",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    {
      id: "enhance",
      title: "Nâng cao chất lượng",
      description: "Cải thiện chất lượng và độ phân giải của ảnh",
      icon: "⚡",
      href: "/dashboard/enhance",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 hover:bg-yellow-100"
    },
    {
      id: "remove-bg",
      title: "Xóa phông nền",
      description: "Tự động xóa phông nền khỏi ảnh của bạn",
      icon: "🖼️",
      href: "/dashboard/remove-bg",
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    {
      id: "trending",
      title: "Xu hướng",
      description: "Khám phá và tạo ảnh theo các xu hướng phổ biến",
      icon: "🔥",
      href: "/dashboard/trending",
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100"
    }
  ];

  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Thư viện tạo ảnh</h2>
          <p className="mt-2 text-sm text-slate-600">
            Chọn loại ảnh bạn muốn tạo hoặc chỉnh sửa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => router.push(category.href)}
              className={`group relative rounded-xl border-2 border-slate-200 ${category.bgColor} p-6 text-left transition-all hover:border-slate-300 hover:shadow-lg`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className={`text-lg font-semibold ${category.color} mb-2`}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  <div className={`inline-flex items-center gap-2 text-sm font-medium ${category.color} group-hover:gap-3 transition-all`}>
                    <span>Bắt đầu</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white text-2xl">
                💡
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Mẹo sử dụng
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>Mô tả chi tiết sẽ cho kết quả tốt hơn khi tạo ảnh từ văn bản</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>Sử dụng ảnh có độ phân giải cao để có kết quả chỉnh sửa tốt nhất</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>Xem lịch sử và yêu thích để quản lý các ảnh đã tạo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
