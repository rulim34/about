import { SocialMedia } from '@/domain/entities';
import { SocialMediaList } from './social-media-list';

type Props = {
  socialMedia?: SocialMedia[];
};

export function Hero({ socialMedia }: Props) {
  return (
    <section className="min-h-screen max-w-5xl mx-auto py-28 flex flex-col justify-center items-start">
      <h1 className="m-0 text-cornflower-blue text-xl">Hello &#128075; I&#39;m</h1>

      <h2 className="mt-3 text-slate-50 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Ahmad Rulim.
      </h2>

      <p className="mt-5 max-w-xl text-slate-400 text-lg">
        I&#39;m a technology enthusiast passionated in developing cloud-based applications.
        Currently based in Indonesia &#127470;&#127465;
      </p>

      {socialMedia && <SocialMediaList className="mt-7" socialMedia={socialMedia} />}
    </section>
  );
}
