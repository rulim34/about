import Head from 'next/head';
import { ReactNode } from 'react';
import { Config } from '../../config';
import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from './Menu';

type Props = {
  pathname: string;
  title?: string;
  description?: string;
  image?: string;
  navLinks?: {
    name: string;
    url: string;
  }[];
  isBusiness?: boolean;
  children?: ReactNode;
};

export function Layout({
  pathname,
  title,
  description,
  image,
  navLinks,
  isBusiness,
  children,
}: Props) {
  const siteTitle = isBusiness ? Config.site.title.business : Config.site.title.personal;
  const seo = {
    title: title ? `${title} - ${siteTitle}` : siteTitle,
    description: description ?? Config.site.description,
    image: image ?? Config.site.image,
    url: `${Config.site.url}${pathname}`,
    twitter: Config.site.twitter,
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="#content"
        className="button absolute top-2 -left-96 z-[-99] focus:left-2 focus:z-50 active:left-2 active:z-50"
      >
        Skip to Content
      </a>

      <div className="bg-vampire-black">
        <Header navLinks={navLinks} />
        <Menu navLinks={navLinks} />
        <main id="content" className="px-6 xs:px-12 md:px-24 lg:px-36">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
