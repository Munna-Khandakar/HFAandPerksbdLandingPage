import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import {getChapterFromParam} from "@/lib/chapter";

type HomeProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Home({ searchParams }: HomeProps) {
  const chapter = getChapterFromParam(searchParams?.chapter ?? undefined);

  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      {chapter && <CatalogueSection chapter={chapter} />}
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
