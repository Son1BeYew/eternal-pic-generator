import { Header, Footer } from "./components/layout";
import UserMenu from "./components/ui/UserMenu";
import {
  HeroSection,
  FeaturesSection,
  GallerySection,
  SocialConnect,
  ProcessSection,
  StatsSection,
  ContactSection,
} from "./components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]">
      <Header />
      <UserMenu />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_10%,#f1f5f9_0%,transparent_60%),radial-gradient(50%_70%_at_80%_20%,#f0fdf4_0%,transparent_55%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pt-4 sm:px-10 lg:px-12">
          <main className="flex-1 py-14 sm:py-16">
            <HeroSection />
            <FeaturesSection />
            <GallerySection />
            <SocialConnect />
            <ProcessSection />
            <StatsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
