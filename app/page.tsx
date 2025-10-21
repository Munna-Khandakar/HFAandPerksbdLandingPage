import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import {ALL_CHAPTERS} from "@/data/ServiceData";
import {Chapter} from "@/types/ServiceType";

type HomeProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const CHAPTER_LOOKUP = new Set<Chapter>(ALL_CHAPTERS);

const isChapterParam = (value: string | undefined): value is Chapter => {
  if (!value) {
    return false;
  }

  return CHAPTER_LOOKUP.has(value as Chapter);
};

export default function Home({ searchParams }: HomeProps) {
  const rawChapter = searchParams?.chapter;
  const chapterParam = Array.isArray(rawChapter) ? rawChapter[0] : rawChapter;
  const chapter = isChapterParam(chapterParam) ? chapterParam : undefined;

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
