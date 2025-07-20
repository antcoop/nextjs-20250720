'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Joke(props: { id: string, joke?: string, hasBreadcrumb?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center p-36">
      <Link href={`/joke/${props.id}`} className="text-4xl mb-12">{props.joke}</Link>
      {!props.hasBreadcrumb && <h1 onClick={() => pathname === '/joke' ? router.refresh() : router.push('/joke')} className="cursor-pointer text-4xl my-3 p-3 border rounded bg-green-800">
        Fetch Random Joke
      </h1>}
    </main>
  );
}

