"use client";

export default function ImagesManagement() {
  const images = [
    {
      id: "1",
      user: "Nguyễn Văn A",
      prompt: "Một quán cà phê ấm cúng với ánh sáng vàng",
      style: "realistic",
      createdAt: "2024-01-20 14:30",
      status: "completed",
    },
    {
      id: "2",
      user: "Trần Thị B",
      prompt: "Anime girl with pink hair",
      style: "anime",
      createdAt: "2024-01-20 15:45",
      status: "completed",
    },
    {
      id: "3",
      user: "Lê Văn C",
      prompt: "Sunset over mountains",
      style: "painting",
      createdAt: "2024-01-20 16:20",
      status: "completed",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">
          Quản lý ảnh
        </h1>
        <p className="mt-2 text-slate-600">
          Quản lý tất cả ảnh được tạo trong hệ thống
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="aspect-square bg-slate-100"></div>
            <div className="p-4">
              <p className="text-sm font-medium text-slate-900">
                {image.user}
              </p>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                {image.prompt}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {image.style}
                </span>
                <button className="text-xs font-medium text-red-600 transition-colors hover:text-red-700">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
