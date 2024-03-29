import { Config } from '@/config';
import { About, Contact, Hero } from '@/presentation/components/home';

export default function Home() {
  return (
    <>
      <Hero socialMedia={Config.socialMedia} />
      <About skills={Config.skills} />
      <Contact />
    </>
  );
}
