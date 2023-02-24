import {
  Sifacebook,
  Sigithub,
  Siinstagram,
  Silinkedin,
  Sistackoverflow,
  Sitelegram,
  Sitwitter,
  Sixdadevelopers,
} from '@icons-pack/react-simple-icons';

type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: Props) {
  switch (name) {
    case 'facebook':
      return <Sifacebook title="Facebook" className={className} />;
    case 'github':
      return <Sigithub title="GitHub" className={className} />;
    case 'instagram':
      return <Siinstagram title="Instagram" className={className} />;
    case 'linkedin':
      return <Silinkedin title="LinkedIn" className={className} />;
    case 'stack-overflow':
      return <Sistackoverflow title="Stack Overflow" className={className} />;
    case 'telegram':
      return <Sitelegram title="Telegram" className={className} />;
    case 'twitter':
      return <Sitwitter title="Twitter" className={className} />;
    case 'xda-developers':
      return <Sixdadevelopers title="XDA Developers" className={className} />;
    default:
      throw new Error(`${name} icon is not found`);
  }
}
