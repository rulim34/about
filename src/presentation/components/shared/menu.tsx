'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { UrlMenu } from '@/domain/entities';

type Props = {
  menus?: UrlMenu[];
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
            ? menus.map(({ name, url }, i) => (
                <li key={i} className="my-2">
                  <a href={url} className="navlink">
                    {name}
                  </a>
                </li>
              ))
            : null}
        </ul>
      </aside>
    </>
  );
}
