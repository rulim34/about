import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { About, Contact, Hero } from '../components/home';

export default function Home() {
  const { pathname, query } = useRouter();
  const isBusiness = query.utm_campaign === 'business' ? true : false;

  return (
    <Layout pathname={pathname} isBusiness={isBusiness}>
      <Hero isBusiness={isBusiness} />
      <About isBusiness={isBusiness} skills={Config.skills} />
      <Contact />
    </Layout>
  );
}
