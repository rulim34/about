'use client';

import Link from 'next/link';
import { PathMenu, UrlMenu } from '@/domain/entities';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

type Props = {
  menus?: (PathMenu | UrlMenu)[];
};

export function Menu({ menus }: Props) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Hamburger
        size={24}
        rounded={true}
        hideOutline={false}
        label="Menu"
        toggled={toggled}
        toggle={setToggled}
      />

      <aside
        aria-hidden={!toggled}
        tabIndex={toggled ? 1 : -1}
        className={`navmenu ${toggled ? 'open' : ''}`}
      >
        <ul className="w-28 mb-14 text-center">
          {menus
            ? menus.map((menu, i) => (
                <li key={i} className="my-2">
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
      </aside>
    </>
  );
}
