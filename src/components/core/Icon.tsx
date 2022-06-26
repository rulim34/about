import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Xdadevelopers,
} from '@icons-pack/react-simple-icons';

type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: Props) {
  switch (name) {
    case 'facebook':
      return <Facebook title="Facebook" className={className} />;
    case 'github':
      return <Github title="GitHub" className={className} />;
    case 'instagram':
      return <Instagram title="Instagram" className={className} />;
    case 'linkedin':
      return <Linkedin title="LinkedIn" className={className} />;
    case 'twitter':
      return <Twitter title="Twitter" className={className} />;
    case 'xda-developers':
      return <Xdadevelopers title="XDA Developers" className={className} />;
    default:
      throw new Error(`${name} icon is not found`);
  }
}
