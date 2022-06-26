import Link from 'next/link';
import { useState } from 'react';
import { Menu as MenuBar, X } from 'react-feather';

type Props = {
  navLinks?: {
    name: string;
    url: string;
  }[];
};

export function Menu({ navLinks }: Props) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <button className="menu" aria-label="Menu" onClick={() => setToggled(!toggled)}>
        <X
          className={`absolute transition-all ${
            toggled ? 'delay-150 visible rotate-0' : 'invisible rotate-90'
          }`}
        />
        <MenuBar
          className={`absolute transition-all ${
            !toggled ? 'delay-150 visible rotate-0' : 'invisible -rotate-90'
          }`}
        />
      </button>

      <aside
        aria-hidden={!toggled}
        tabIndex={toggled ? 1 : -1}
        className={`navmenu ${toggled ? 'open' : ''}`}
      >
        <ul className="w-28 mb-14 text-center">
          {navLinks &&
            navLinks.map(({ name, url }, i) => (
              <li key={i} className="my-2">
                <Link href={url}>
                  <a className="navlink">{name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </aside>
    </>
  );
}
