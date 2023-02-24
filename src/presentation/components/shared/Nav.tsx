import Link from 'next/link';
import { UrlMenu } from '@/domain/entities';

type Props = {
  menus?: UrlMenu[];
};

export function Nav({ menus }: Props) {
  return (
    <nav className="md:flex">
      <ul className="hidden mr-3 text-center md:flex">
        {menus
          ? menus.map(({ name, url }, i) => (
              <li key={i} className="mx-3">
                <Link href={url} className="navlink">
                  {name}
                </Link>
              </li>
            ))
          : null}
      </ul>

      <Link href="#contact" className="button md:block">
        Contact
      </Link>
    </nav>
  );
}
