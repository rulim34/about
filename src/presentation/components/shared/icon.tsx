import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiStackoverflow,
  SiTelegram,
  SiTwitter,
  SiXdadevelopers,
} from '@icons-pack/react-simple-icons';

type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: Props) {
  switch (name) {
    case 'facebook':
      return <SiFacebook title="Facebook" className={className} />;
    case 'github':
      return <SiGithub title="GitHub" className={className} />;
    case 'instagram':
      return <SiInstagram title="Instagram" className={className} />;
    case 'linkedin':
      return <SiLinkedin title="LinkedIn" className={className} />;
    case 'stack-overflow':
      return <SiStackoverflow title="Stack Overflow" className={className} />;
    case 'telegram':
      return <SiTelegram title="Telegram" className={className} />;
    case 'twitter':
      return <SiTwitter title="Twitter" className={className} />;
    case 'xda-developers':
      return <SiXdadevelopers title="XDA Developers" className={className} />;
    default:
      throw new Error(`${name} icon is not found`);
  }
}
