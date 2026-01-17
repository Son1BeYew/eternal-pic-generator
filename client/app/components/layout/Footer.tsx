export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 text-sm text-black/60">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-black">EternalPic</p>
            <p className="mt-3 text-sm text-black/60">
              Nền tảng AI tạo và chỉnh sửa ảnh chuyên nghiệp, nhanh chóng và dễ dàng.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Sản phẩm</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/pricing">
                  Bảng giá
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/docs">
                  Tài liệu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Tính năng</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/dashboard/enhance">
                  Nâng cấp ảnh AI
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/dashboard/remove-bg">
                  Xóa nền ảnh
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:text-black hover:underline" href="/dashboard/change-hairstyle">
                  Đổi kiểu tóc
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Liên hệ</p>
            <ul className="mt-3 space-y-2">
              <li className="transition-colors duration-300 hover:text-black">support@eternalpic.com</li>
              <li>+84 000 000 000</li>
              <li>TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 EternalPic. Bảo lưu mọi quyền.</p>
          <p className="flex gap-2">
            <a href="#" className="transition-colors duration-300 hover:text-black">Chính sách bảo mật</a>
            <span>-</span>
            <a href="#" className="transition-colors duration-300 hover:text-black">Điều khoản</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
