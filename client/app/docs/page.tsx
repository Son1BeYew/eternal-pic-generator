"use client";

import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function DocsPage() {
  return (
    <DashboardLayout>
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Trợ giúp</h2>
          <p className="mt-2 text-slate-600">
            Hướng dẫn sử dụng các tính năng của EternalPic
          </p>
        </div>

        <div className="space-y-6">
          {/* Tạo ảnh */}
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">🎨 Tạo ảnh</h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium text-slate-900">Tạo bối cảnh</h4>
                <p className="text-sm text-slate-600">
                  Tạo ảnh từ mô tả văn bản. Nhập prompt mô tả cảnh bạn muốn và chọn phong cách (Realistic, Anime, Oil Painting...).
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Thay đổi trang phục</h4>
                <p className="text-sm text-slate-600">
                  Upload ảnh của bạn và mô tả trang phục mong muốn. AI sẽ thay đổi trang phục giữ nguyên khuôn mặt.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Thay đổi kiểu tóc</h4>
                <p className="text-sm text-slate-600">
                  Chọn kiểu tóc từ thư viện có sẵn, upload ảnh chân dung của bạn. AI sẽ thay đổi kiểu tóc tự nhiên.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Ảnh tốt nghiệp</h4>
                <p className="text-sm text-slate-600">
                  Tạo ảnh tốt nghiệp chuyên nghiệp. Chọn trường học, upload ảnh chân dung và ảnh áo tốt nghiệp.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Tạo ảnh xu hướng</h4>
                <p className="text-sm text-slate-600">
                  Tạo ảnh theo các phong cách đang thịnh hành. Chọn style yêu thích và upload ảnh của bạn.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Nâng cấp chất lượng</h4>
                <p className="text-sm text-slate-600">
                  Cải thiện chất lượng ảnh, tăng độ phân giải và chi tiết. Upload ảnh cần nâng cấp.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-slate-900">Xóa phông nền</h4>
                <p className="text-sm text-slate-600">
                  Tự động xóa phông nền ảnh, giữ lại đối tượng chính. Kết quả có nền trong suốt.
                </p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">💡 Mẹo sử dụng</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Viết prompt chi tiết để có kết quả tốt hơn (màu sắc, ánh sáng, góc chụp...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Sử dụng ảnh chân dung rõ nét, ánh sáng tốt cho kết quả chính xác</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Thêm ảnh vào yêu thích để dễ dàng tìm lại sau này</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>Tải xuống ảnh ngay sau khi tạo để lưu trữ bản sao</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
