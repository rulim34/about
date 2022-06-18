import { ChevronRight } from './ChevronRight';
import { Facebook } from './Facebook';
import { GitHub } from './GitHub';
import { Instagram } from './Instagram';
import { LinkedIn } from './LinkedIn';
import { Twitter } from './Twitter';
import { XdaDevelopers } from './XdaDevelopers';

type Props = {
  name: string;
  className?: string;
};

export function Icon({ name, className }: Props) {
  switch (name) {
    case 'chevron-right':
      return <ChevronRight className={className} />;
    case 'facebook':
      return <Facebook className={className} />;
    case 'github':
      return <GitHub className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'linkedin':
      return <LinkedIn className={className} />;
    case 'twitter':
      return <Twitter className={className} />;
    case 'xda-developers':
      return <XdaDevelopers className={className} />;
    default:
      throw new Error(`${name} icon is not found`);
  }
}
