import {
  HeroSearch,
  FeaturedProperties,
  CategoryDiscovery,
  TrustSection,
  CTASection,
} from '@/components/home';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { getPublishedProperties } from '@/lib/crm';
import { toPublicPropertyList } from '@/lib/dto';

export default async function Home() {
  const { data: rawProperties } = await getPublishedProperties({ limit: 6 });
  const properties = toPublicPropertyList(rawProperties || []);

  return (
    <>
      <HeroCarousel slides={[]}>
        <HeroSearch />
      </HeroCarousel>
      <FeaturedProperties properties={properties} />
      <CategoryDiscovery />
      <TrustSection />
      <CTASection />
    </>
  );
}
