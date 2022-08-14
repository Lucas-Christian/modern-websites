import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="hover:underline">About</a>
      </Link>
    </nav>
  )
}