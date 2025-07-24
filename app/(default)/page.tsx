export const metadata = {
  title: 'Agent DiY',
  description: 'Empowering Businesses with AI-Driven Solutions',
};

import PageIllustration from '@/components/page-illustration';
import Hero from '@/components/hero-home';
import Services from '@/components/services';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
// import Cta from '@/components/cta';
import Pricing from '@/components/ui/pricing';
import ContactUs from '@/components/ui/contactus';
import Faq from '@/components/ui/faq';
import AboutUs from '@/components/ui/aboutus';

export default function Home() {
  return (
    <>
      <PageIllustration />
      <AboutUs />

      {/* <Hero /> */}
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      {/* <Cta /> */}
      <ContactUs />
      <Faq />
    </>
  );
}
