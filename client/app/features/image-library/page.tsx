"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function ImageLibraryPage() {
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
              Thư viện ảnh
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tài liệu hướng dẫn về tính năng thư viện ảnh trong EternalPic
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Tổng quan */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tổng quan</h2>
              <p className="text-slate-700 leading-7">
                Thư viện ảnh là nơi tập trung tất cả ảnh bạn đã tạo hoặc upload lên EternalPic. 
                Với công cụ tìm kiếm thông minh, tags và collections, bạn có thể dễ dàng quản lý 
                và tìm lại bất kỳ ảnh nào trong bộ sưu tập của mình.
              </p>
            </section>

            {/* Tính năng chính */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Tính năng chính</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Lưu trữ không giới hạn</h3>
                  <p className="text-slate-700 leading-7">
                    Lưu trữ tất cả ảnh của bạn trên đám mây với dung lượng không giới hạn. 
                    Ảnh được mã hóa và sao lưu tự động để đảm bảo an toàn dữ liệu.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Tags & Collections</h3>
                  <p className="text-slate-700 leading-7">
                    Tổ chức ảnh với hệ thống tags thông minh và collections. Tạo các bộ sưu tập 
                    theo chủ đề, sự kiện hoặc bất kỳ tiêu chí nào bạn muốn.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Tìm kiếm AI</h3>
                  <p className="text-slate-700 leading-7">
                    Tìm ảnh bằng cách mô tả bằng ngôn ngữ tự nhiên. AI sẽ phân tích nội dung ảnh 
                    và đưa ra kết quả chính xác dựa trên mô tả của bạn.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Import & Export</h3>
                  <p className="text-slate-700 leading-7">
                    Import hàng loạt ảnh từ máy tính, Google Drive, Dropbox và nhiều nguồn khác. 
                    Export ảnh với nhiều format (JPG, PNG, WebP) và chất lượng khác nhau.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Metadata & EXIF</h3>
                  <p className="text-slate-700 leading-7">
                    Xem và chỉnh sửa thông tin metadata của ảnh. Hệ thống hỗ trợ EXIF data đầy đủ 
                    và cho phép thêm watermark tự động khi export.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium text-slate-900">Bảo mật & Privacy</h3>
                  <p className="text-slate-700 leading-7">
                    Ảnh được mã hóa end-to-end, chỉ bạn mới có quyền truy cập. Bạn có thể chia sẻ 
                    ảnh với quyền kiểm soát chi tiết, đặt mật khẩu hoặc giới hạn thời gian truy cập.
                  </p>
                </div>
              </div>
            </section>

            {/* Hướng dẫn sử dụng */}
            <section className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Hướng dẫn sử dụng</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Upload ảnh</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Vào "Thư viện ảnh" trong Dashboard</li>
                    <li>Click "Upload ảnh" hoặc kéo thả ảnh vào</li>
                    <li>Chọn ảnh từ máy tính hoặc từ các dịch vụ lưu trữ khác</li>
                    <li>Đợi upload hoàn tất</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Tổ chức với Tags</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Chọn ảnh cần gắn tag</li>
                    <li>Click "Thêm tag" và nhập tên tag</li>
                    <li>Tags sẽ tự động gợi ý dựa trên tags đã có</li>
                    <li>Sử dụng tags để lọc và tìm kiếm ảnh nhanh chóng</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Tạo Collection</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Click "Tạo Collection mới"</li>
                    <li>Đặt tên và mô tả cho collection</li>
                    <li>Chọn ảnh để thêm vào collection</li>
                    <li>Collection có thể chia sẻ công khai hoặc riêng tư</li>
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-slate-900">Tìm kiếm ảnh</h4>
                  <ol className="ml-4 list-decimal space-y-1 text-slate-700">
                    <li>Nhập từ khóa vào thanh tìm kiếm</li>
                    <li>Hoặc sử dụng mô tả ngôn ngữ tự nhiên (ví dụ: "ảnh hoàng hôn trên biển")</li>
                    <li>Lọc kết quả theo tags, collection, ngày tháng</li>
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
                  <span>Ảnh được lưu trữ với chất lượng gốc, không bị nén</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Hỗ trợ format: JPG, PNG, WebP, HEIC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Kích thước file tối đa: 50MB cho gói Free, không giới hạn cho gói Pro/Max</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-slate-400">•</span>
                  <span>Ảnh được tự động đồng bộ trên tất cả thiết bị</span>
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
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Footer />
      </div>
    </div>
  );
}
