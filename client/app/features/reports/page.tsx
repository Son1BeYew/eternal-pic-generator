"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function ReportsPage() {
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
              Báo cáo & Analytics
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tài liệu hướng dẫn về tính năng báo cáo và phân tích trong EternalPic
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tổng quan */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tổng quan</h2>
              <p className="text-slate-700 leading-7">
                Tính năng Báo cáo & Analytics giúp bạn theo dõi và phân tích hiệu suất hoạt động 
                một cách chi tiết. Với các biểu đồ trực quan, báo cáo tự động và insights thông minh, 
                bạn có thể hiểu rõ hơn về cách sử dụng dịch vụ và tối ưu hóa hiệu quả công việc.
              </p>
            </section>

            {/* Tính năng chính */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tính năng chính</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Thống kê chi tiết</h3>
                  <p className="text-slate-700 leading-7">
                    Xem số liệu chi tiết về số lượng ảnh đã tạo, số dự án, thời gian sử dụng, 
                    và nhiều chỉ số khác. Tất cả được trình bày dưới dạng biểu đồ và số liệu trực quan.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Phân tích sử dụng</h3>
                  <p className="text-slate-700 leading-7">
                    Theo dõi tài nguyên đã sử dụng như dung lượng lưu trữ, số lượng API calls, 
                    và dự báo ngân sách. Giúp bạn quản lý chi phí hiệu quả và lên kế hoạch sử dụng.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Báo cáo tự động</h3>
                  <p className="text-slate-700 leading-7">
                    Nhận báo cáo định kỳ qua email (hàng tuần, hàng tháng) với các số liệu tổng hợp. 
                    Export báo cáo ra PDF, CSV hoặc Excel để lưu trữ và chia sẻ.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Báo cáo team</h3>
                  <p className="text-slate-700 leading-7">
                    Với gói Team/Business, bạn có thể xem thống kê hoạt động của từng thành viên, 
                    hiệu suất làm việc, đóng góp và phân tích chi tiết theo người dùng.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Xu hướng & Insights</h3>
                  <p className="text-slate-700 leading-7">
                    Phân tích xu hướng sử dụng theo thời gian, so sánh giữa các kỳ. AI đưa ra insights 
                    và đề xuất để tối ưu hóa workflow và tăng hiệu quả công việc.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Export & Chia sẻ</h3>
                  <p className="text-slate-700 leading-7">
                    Export báo cáo ra nhiều format (PDF, CSV, Excel) với các template có sẵn. 
                    Chia sẻ báo cáo với stakeholders hoặc lưu trữ để tham khảo sau này.
                  </p>
                </div>
              </div>
            </section>

            {/* Hướng dẫn sử dụng */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Hướng dẫn sử dụng</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Xem báo cáo tổng quan</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Vào Dashboard và chọn "Báo cáo"</li>
                    <li>Xem dashboard với các số liệu chính và biểu đồ</li>
                    <li>Chọn khoảng thời gian (7 ngày, 30 ngày, 3 tháng, 1 năm)</li>
                    <li>Click vào từng metric để xem chi tiết</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Tạo báo cáo tùy chỉnh</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Click "Tạo báo cáo mới"</li>
                    <li>Chọn các metrics và biểu đồ muốn hiển thị</li>
                    <li>Thiết lập bộ lọc (thời gian, dự án, người dùng...)</li>
                    <li>Đặt tên và mô tả báo cáo</li>
                    <li>Lưu và xem báo cáo</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Xuất báo cáo</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Mở báo cáo cần xuất</li>
                    <li>Click "Export" và chọn format (PDF, CSV, Excel)</li>
                    <li>Chọn template nếu có</li>
                    <li>Tải xuống và lưu vào máy tính</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Thiết lập báo cáo tự động</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Vào "Cài đặt" → "Báo cáo"</li>
                    <li>Chọn "Báo cáo tự động"</li>
                    <li>Chọn tần suất (hàng tuần, hàng tháng)</li>
                    <li>Chọn metrics muốn nhận</li>
                    <li>Nhập email nhận báo cáo và lưu</li>
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
                  <span>Dữ liệu báo cáo được cập nhật theo thời gian thực</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Báo cáo lưu trữ tối đa 2 năm lịch sử</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Tính năng báo cáo team chỉ có trong gói Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Báo cáo tự động được gửi vào đầu tuần/tháng</span>
                </li>
              </ul>
            </section>
          </div>
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
                  <a href="/features/presets-editing" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                    → Preset & Chỉnh sửa
                  </a>
                </li>
              </ul>
            </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Footer />
      </div>
    </div>
  );
}
