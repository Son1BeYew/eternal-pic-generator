const galleryItems = [
  { key: "studio", label: "Studio" },
  { key: "product", label: "Sản phẩm" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "editorial", label: "Biên tập" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="mt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
          Thư viện nổi bật
        </h2>
        <span className="text-sm text-black/60">Cập nhật hàng tuần</span>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.key}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[4/3] rounded-xl bg-white/70 p-4 backdrop-blur transition-transform duration-500 group-hover:scale-[1.02]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                {item.label}
              </p>
              <p className="mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-emerald-700">
                Bộ sưu tập
              </p>
              <p className="mt-2 text-sm text-black/60">
                Tông màu nhẹ với ánh sáng chính xác.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
