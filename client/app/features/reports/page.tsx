"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <Header />
      <UserMenu />
      <div className="relative overflow-hidden pt-20">
        <div className="relative mx-auto w-full max-w-4xl px-6 pt-16 pb-24 sm:px-10 lg:px-12">
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
      </div>
      <Footer />
    </div>
  );
}
