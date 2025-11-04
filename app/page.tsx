'use client'

import {Suspense, useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";
import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import {getChapterFromParam} from "@/lib/chapter";

function HomeContent() {
  const searchParams = useSearchParams();
  const catalogueSectionRef = useRef<HTMLDivElement>(null);
  const chapter = getChapterFromParam(searchParams?.get("chapter") ?? undefined);

  useEffect(() => {
    if (chapter && catalogueSectionRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        catalogueSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [chapter]);

  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      {chapter && (
        <div ref={catalogueSectionRef}>
          <CatalogueSection chapter={chapter} />
        </div>
      )}
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <>
        <HeroSection />
        <CompanySection />
        <div className="container py-12 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
            <div className="space-y-4">
              <div className="h-12 animate-pulse bg-gray-200 rounded-lg w-3/4" />
              <div className="h-8 animate-pulse bg-gray-200 rounded-lg w-1/2" />
              <div className="h-24 animate-pulse bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
        <CatalogSwiperSection />
        <ContactSection />
      </>
    }>
      <HomeContent />
    </Suspense>
  );
}
