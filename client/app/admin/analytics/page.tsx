"use client";

export default function Analytics() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Thống kê</h1>
        <p className="mt-2 text-slate-600">
          Phân tích chi tiết về hoạt động hệ thống
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Chart Placeholder 1 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Người dùng mới theo tháng
          </h3>
          <div className="mt-6 flex h-64 items-end justify-around gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-emerald-500"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-around text-xs text-slate-500">
            {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Chart Placeholder 2 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Ảnh được tạo theo ngày
          </h3>
          <div className="mt-6 flex h-64 items-end justify-around gap-1">
            {[30, 45, 60, 40, 70, 55, 80].map((height, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-blue-500"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-around text-xs text-slate-500">
            {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        {/* Popular Styles */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Phong cách phổ biến
          </h3>
          <div className="mt-6 space-y-4">
            {[
              { name: "Realistic", value: 45, color: "bg-emerald-500" },
              { name: "Anime", value: 30, color: "bg-blue-500" },
              { name: "Cartoon", value: 15, color: "bg-amber-500" },
              { name: "Painting", value: 10, color: "bg-slate-500" },
            ].map((style) => (
              <div key={style.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{style.name}</span>
                  <span className="text-slate-600">{style.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full ${style.color}`}
                    style={{ width: `${style.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Users */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Người dùng tích cực nhất
          </h3>
          <div className="mt-6 space-y-4">
            {[
              { name: "Nguyễn Văn A", images: 234 },
              { name: "Trần Thị B", images: 189 },
              { name: "Lê Văn C", images: 156 },
              { name: "Phạm Thị D", images: 142 },
              { name: "Hoàng Văn E", images: 128 },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-slate-900">
                    {user.name}
                  </span>
                </div>
                <span className="text-sm text-slate-600">{user.images} ảnh</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
