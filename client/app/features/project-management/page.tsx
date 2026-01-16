"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function ProjectManagementPage() {
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
              Quản lý dự án
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tài liệu hướng dẫn về tính năng quản lý dự án trong EternalPic
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tổng quan */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Tổng quan
              </h2>
              <p className="text-slate-700 leading-7">
                Tính năng Quản lý dự án giúp bạn tổ chức và quản lý tất cả các
                dự án ảnh của mình một cách hiệu quả. Bạn có thể tạo nhiều dự
                án, sắp xếp ảnh theo thư mục, cộng tác với team và theo dõi tiến
                độ công việc.
              </p>
            </section>

            {/* Tính năng chính */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Tính năng chính
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Tổ chức dự án
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Tạo và quản lý nhiều dự án ảnh cùng lúc. Mỗi dự án có thể
                    chứa nhiều ảnh, được sắp xếp theo thư mục và gắn tags để dễ
                    dàng tìm kiếm sau này.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Cộng tác nhóm
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Làm việc cùng với team bằng cách chia sẻ dự án và quyền truy
                    cập. Các thành viên có thể xem, chỉnh sửa hoặc comment trên
                    ảnh trong thời gian thực.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Lịch sử phiên bản
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Hệ thống tự động lưu lại mọi thay đổi của dự án. Bạn có thể
                    xem lại lịch sử và khôi phục về bất kỳ phiên bản nào trước
                    đó nếu cần.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Tìm kiếm thông minh
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Tìm kiếm dự án và ảnh bằng từ khóa, tags, hoặc mô tả. Hệ
                    thống sử dụng AI để hiểu ngữ cảnh và đưa ra kết quả chính
                    xác nhất.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Templates & Presets
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Sử dụng các templates có sẵn để khởi tạo dự án nhanh chóng.
                    Bạn cũng có thể tạo preset riêng để tái sử dụng cho các dự
                    án tương tự.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">
                    Thống kê & Analytics
                  </h3>
                  <p className="text-slate-700 leading-7">
                    Theo dõi tiến độ dự án với các biểu đồ và báo cáo chi tiết.
                    Xem số lượng ảnh đã tạo, thời gian sử dụng và hiệu suất của
                    từng dự án.
                  </p>
                </div>
              </div>
            </section>

            {/* Hướng dẫn sử dụng */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Hướng dẫn sử dụng
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-slate-900">
                    Tạo dự án mới
                  </h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Vào Dashboard và chọn "Quản lý dự án"</li>
                    <li>Click nút "Tạo dự án mới"</li>
                    <li>Điền tên dự án, mô tả và chọn template (nếu có)</li>
                    <li>Click "Tạo" để hoàn tất</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">
                    Thêm ảnh vào dự án
                  </h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Mở dự án bạn muốn thêm ảnh</li>
                    <li>Click "Thêm ảnh" hoặc kéo thả ảnh vào</li>
                    <li>Thêm tags và mô tả cho ảnh</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">
                    Chia sẻ dự án với team
                  </h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Mở dự án cần chia sẻ</li>
                    <li>Click "Cài đặt" → "Chia sẻ"</li>
                    <li>Nhập email thành viên và chọn quyền truy cập</li>
                    <li>Click "Gửi lời mời"</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Lưu ý */}
            <section className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Lưu ý
              </h2>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>
                    Mỗi tài khoản có thể tạo tối đa số dự án tùy theo gói dịch
                    vụ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>
                    Dữ liệu dự án được đồng bộ tự động trên tất cả thiết bị
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Lịch sử phiên bản được lưu trong 30 ngày</span>
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
                  <a href="/features/image-library" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Thư viện ảnh
                  </a>
                </li>
                <li>
                  <a href="/features/presets-editing" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Preset & Chỉnh sửa
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
      <Footer />
    </div>
  );
}
