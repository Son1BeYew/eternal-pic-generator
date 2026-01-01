export default function ContactSection() {
  return (
    <section id="contact" className="mt-24">
      <div className="rounded-3xl bg-black px-8 py-10 text-white transition-all duration-500 hover:shadow-2xl md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Liên hệ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Sẵn sàng cho buổi chụp tiếp theo?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Gửi brief và chúng tôi sẽ phản hồi trong một ngày làm việc.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            href="mailto:hello@eternalpic.co"
          >
            Gửi email
          </a>
          <a
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:scale-95"
            href="#"
          >
            Xem lịch trống
          </a>
        </div>
      </div>
    </section>
  );
}
