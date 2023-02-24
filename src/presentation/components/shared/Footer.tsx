import Link from 'next/link';

export function Footer() {
  return (
    <footer className="px-6 py-4">
      <p className="max-w-2xl mx-auto text-slate-400 text-sm text-center font-mono">
        Developed by{' '}
        <Link href="https://about.rulim34.dev" className="link">
          Ahmad Rulim
        </Link>
        . Open Sourced at{' '}
        <Link href="https://github.com/rulim34/about.git" target="_blank" className="link">
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}
