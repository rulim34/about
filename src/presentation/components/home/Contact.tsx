import Link from 'next/link';
import { Config } from '@/config';

export function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto mb-14 py-14 text-center xs:py-20 md:mb-20 md:py-24"
    >
      <h2 className="text-slate-50 text-3xl text-center font-bold">Contact</h2>

      <p className="mt-10 text-slate-400 text-lg text-center">
        Have a problem to solve with code? Or just want to have a chat? Whatever it is, feel free to
        email me.
      </p>

      <Link href={`mailto:${Config.contact.business}`} className="button mt-8">
        Get in touch
      </Link>

      <p className="mt-8 text-slate-400 text-md text-center">
        Not a business inquiry? Use{' '}
        <Link href={`mailto:${Config.contact.personal}`} className="link">
          my personal inbox
        </Link>{' '}
        instead.
      </p>
    </section>
  );
}
