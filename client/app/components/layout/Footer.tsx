export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 text-sm text-black/60">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-black">EternalPic</p>
          <p className="mt-3 text-sm text-black/60">
            Nhiếp ảnh thương mại và biên tập với quy trình sản xuất chuyên
            nghiệp.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-black">Studio</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Giới thiệu
              </a>
            </li>
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Đội ngũ
              </a>
            </li>
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Tuyển dụng
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-black">Dịch vụ</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Chiến dịch quảng cáo
              </a>
            </li>
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Chụp sản phẩm
              </a>
            </li>
            <li>
              <a className="transition-all duration-300 hover:text-black hover:underline" href="#">
                Chỉnh sửa ảnh
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-black">Liên hệ</p>
          <ul className="mt-3 space-y-2">
            <li className="transition-colors duration-300 hover:text-black">hello@eternalpic.co</li>
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
    </footer>
  );
}
