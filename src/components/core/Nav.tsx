import Link from 'next/link';

type Props = {
  navLinks?: {
    name: string;
    url: string;
  }[];
};

export function Nav({ navLinks }: Props) {
  return (
    <nav className="md:flex">
      <ul className="hidden mr-3 text-center md:flex">
        {navLinks &&
          navLinks.map(({ name, url }, i) => (
            <li key={i} className="mx-3">
              <Link href={url}>
                <a className="navlink">{name}</a>
              </Link>
            </li>
          ))}
      </ul>

      <Link href="#contact">
        <a className="button md:block">Contact</a>
      </Link>
    </nav>
  );
}
