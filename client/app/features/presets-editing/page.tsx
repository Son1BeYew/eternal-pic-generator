"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function PresetsEditingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <Header />
      <UserMenu />
      <div className="relative overflow-hidden pt-20">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-100/40 to-teal-100/40 blur-3xl" />
          <div className="absolute top-60 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/40 blur-3xl" />
          <div className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-teal-100/30 to-emerald-100/30 blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-24 sm:px-10 lg:px-12">
          <div className="flex gap-8">
            {/* Main content */}
            <div className="flex-1 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Preset & Chỉnh sửa
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tài liệu hướng dẫn về tính năng preset và chỉnh sửa ảnh trong EternalPic
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tổng quan */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tổng quan</h2>
              <p className="text-slate-700 leading-7">
                Preset & Chỉnh sửa là bộ công cụ mạnh mẽ giúp bạn biến đổi ảnh thành tác phẩm nghệ thuật. 
                Với hàng trăm preset được tạo bởi chuyên gia và công cụ chỉnh sửa AI thông minh, 
                bạn có thể tạo ra những bức ảnh đẹp chỉ với vài cú click.
              </p>
            </section>

            {/* Tính năng chính */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tính năng chính</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Presets chuyên nghiệp</h3>
                  <p className="text-slate-700 leading-7">
                    Thư viện với hàng trăm preset được thiết kế bởi các nhiếp ảnh gia chuyên nghiệp. 
                    Từ phong cách vintage, film, đến hiện đại, minimal - có đủ mọi phong cách bạn cần.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Chỉnh sửa AI nâng cao</h3>
                  <p className="text-slate-700 leading-7">
                    AI tự động phân tích ảnh và điều chỉnh màu sắc, độ sáng, contrast một cách thông minh. 
                    Chỉ cần một cú click, ảnh của bạn sẽ trở nên chuyên nghiệp hơn.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Batch Processing</h3>
                  <p className="text-slate-700 leading-7">
                    Áp dụng cùng một preset hoặc chỉnh sửa cho hàng trăm ảnh cùng lúc. 
                    Tiết kiệm thời gian và đảm bảo tính nhất quán cho bộ ảnh của bạn.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Tùy chỉnh không giới hạn</h3>
                  <p className="text-slate-700 leading-7">
                    Tạo preset riêng với các tham số tùy chỉnh. Điều chỉnh từng yếu tố như exposure, 
                    saturation, highlights, shadows, và nhiều hơn nữa.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Smart Presets</h3>
                  <p className="text-slate-700 leading-7">
                    AI tự động đề xuất preset phù hợp nhất dựa trên nội dung và phong cách của ảnh. 
                    Học từ sở thích của bạn để đưa ra gợi ý ngày càng chính xác.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Export & Share</h3>
                  <p className="text-slate-700 leading-7">
                    Export ảnh với nhiều format và chất lượng. Chia sẻ preset của bạn với cộng đồng 
                    hoặc team, tạo preset marketplace để mọi người sử dụng.
                  </p>
                </div>
              </div>
            </section>

            {/* Hướng dẫn sử dụng */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Hướng dẫn sử dụng</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Áp dụng Preset</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Mở ảnh cần chỉnh sửa trong trình chỉnh sửa</li>
                    <li>Chọn tab "Presets" ở thanh công cụ</li>
                    <li>Duyệt qua các preset hoặc tìm kiếm theo tên/loại</li>
                    <li>Click vào preset để áp dụng, xem preview trước khi lưu</li>
                    <li>Điều chỉnh intensity nếu cần, sau đó lưu</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Chỉnh sửa thủ công</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Mở ảnh trong trình chỉnh sửa</li>
                    <li>Sử dụng các thanh điều chỉnh: Brightness, Contrast, Saturation, etc.</li>
                    <li>Hoặc để AI tự động điều chỉnh bằng nút "Auto Enhance"</li>
                    <li>Xem kết quả real-time và so sánh với ảnh gốc</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Tạo Preset riêng</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Chỉnh sửa ảnh với các tham số mong muốn</li>
                    <li>Click "Lưu Preset"</li>
                    <li>Đặt tên, mô tả và chọn danh mục</li>
                    <li>Chọn công khai hoặc riêng tư</li>
                    <li>Preset sẽ xuất hiện trong thư viện của bạn</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Batch Processing</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Chọn nhiều ảnh từ thư viện</li>
                    <li>Click "Chỉnh sửa hàng loạt"</li>
                    <li>Chọn preset hoặc thiết lập chỉnh sửa</li>
                    <li>Xem preview và xác nhận</li>
                    <li>Hệ thống sẽ xử lý tự động, thông báo khi hoàn tất</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Lưu ý */}
            <section className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Lưu ý</h2>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Preset có thể áp dụng cho cả ảnh RAW và JPG</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Luôn xem preview trước khi áp dụng để đảm bảo kết quả như mong muốn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Bạn có thể kết hợp nhiều preset với nhau bằng cách điều chỉnh intensity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Preset đã áp dụng có thể undo bất cứ lúc nào</span>
                </li>
              </ul>
            </section>
          </div>
          
          {/* Right Sidebar */}
          <aside className="hidden lg:block w-80 space-y-6 sticky top-24 self-start">
            {/* Quick Links */}
            <div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Liên kết nhanh</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#tong-quan" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Tổng quan
                  </a>
                </li>
                <li>
                  <a href="#tinh-nang" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Tính năng chính
                  </a>
                </li>
                <li>
                  <a href="#huong-dan" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Hướng dẫn sử dụng
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Card */}
            <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg">
                  ?
                </div>
                <h3 className="text-sm font-semibold text-slate-900">Cần hỗ trợ?</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Liên hệ với đội ngũ hỗ trợ của chúng tôi để được giúp đỡ
              </p>
              <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors">
                Liên hệ hỗ trợ
              </button>
            </div>

            {/* Related Features */}
            <div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Tính năng liên quan</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/features/project-management" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Quản lý dự án
                  </a>
                </li>
                <li>
                  <a href="/features/image-library" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Thư viện ảnh
                  </a>
                </li>
                <li>
                  <a href="/features/reports" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Báo cáo & Analytics
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
