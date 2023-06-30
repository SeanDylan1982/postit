import Link from 'next/link';
import Login from './Login';

export default async function Nav() {
  return(
    <nav>
      <Link href='/' >
        <h1 className="font-bold text-lg">Post it!</h1>
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  )
}