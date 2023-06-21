import Link from 'next/link';
import { Icon } from '@/presentation/components/shared';
import { SocialMedia } from '@/domain/entities';

type Props = {
  className?: string;
  socialMedia: SocialMedia[];
};

export function SocialMediaList({ className, socialMedia }: Props) {
  return (
    <div className={className}>
      <ul className="flex flex-row flex-wrap items-center list-none">
        {socialMedia &&
          socialMedia.map(({ icon, name, url }, i) => (
            <li key={i}>
              <Link
                href={url}
                className={`group mr-7 my-2 inline-block rounded-sm hover:-translate-y-1 focus:-translate-y-1 focus:outline-offset-8 active:outline-offset-8`}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  name={icon}
                  className="w-6 h-6 fill-slate-400 transition-all group-hover:fill-cornflower-blue group-focus:fill-cornflower-blue"
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
