import Link from 'next/link';
import { PathMenu, UrlMenu } from '@/domain/entities';

type Props = {
  menus?: (PathMenu | UrlMenu)[];
};

export function Nav({ menus }: Props) {
  return (
    <nav className="md:flex">
      <ul className="hidden mr-3 text-center md:flex">
        {menus
          ? menus.map((menu, i) => (
              <li key={i} className="mx-3">
                <Link
                  href={
                    menu.hasOwnProperty('path') ? (menu as PathMenu).path : (menu as UrlMenu).url
                  }
                  scroll={menu.hasOwnProperty('path') ? (menu as PathMenu).scroll : true}
                  className="navlink"
                >
                  {menu.name}
                </Link>
              </li>
            ))
          : null}
      </ul>

      <Link href="/#contact" scroll={false} className="button md:block">
        Contact
      </Link>
    </nav>
  );
}
