import '@/presentation/styles/globals.css';
import { Config } from '@/config';
import { Footer, Header, Menu } from '@/presentation/components/shared';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Source_Code_Pro, Ubuntu } from 'next/font/google';

type Props = {
  children: ReactNode;
};

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: Config.site.title,
    template: '%s - ' + Config.site.title,
  },
  description: Config.site.description,
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: Config.site.title,
    description: Config.site.description,
    url: Config.site.url,
    images: {
      url: Config.site.image,
    },
    locale: Config.site.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: Config.site.title,
    description: Config.site.description,
    creator: Config.site.twitter,
    images: {
      url: Config.site.image,
    },
  },
};

export default function Layout({ children }: Props) {
  return (
    <html lang="en-UK" className={`${ubuntu.variable} ${sourceCodePro.variable}`}>
      <body>
        <a
          href="#content"
          className="button absolute top-2 -left-96 z-[-99] focus:left-2 focus:z-50 active:left-2 active:z-50"
        >
          Skip to Content
        </a>

        <div className="bg-vampire-black">
          <Header />
          <Menu menus={Config.nav} />
          <main id="content" className="px-6 xs:px-12 md:px-24 lg:px-36">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
