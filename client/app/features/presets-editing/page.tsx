"use client";

import { Header, Footer } from "../../components/layout";
import UserMenu from "../../components/ui/UserMenu";

export default function PresetsEditingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <Header />
      <UserMenu />
      <div className="relative overflow-hidden pt-20">
        <div className="relative mx-auto w-full max-w-4xl px-6 pt-16 pb-24 sm:px-10 lg:px-12">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
