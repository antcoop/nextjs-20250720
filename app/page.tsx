import { Inter } from 'next/font/google'
import Link from 'next/link';
import Providers from '@/utils/providers';
import JokeLink from '@/components/JokeLink';
import JokeTRPCClient from '@/components/JokeTRPCClient';
import JokeTRPCServer from '@/components/JokeTRPCServer';
import JokeNoStore from '@/components/JokeNoStore';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid justify-items-center text-center lg:mb-0 lg:grid-cols-3">
        <Providers>
          <JokeLink />
        </Providers>
        <JokeTRPCClient />
        <JokeTRPCServer />
        <JokeNoStore />
        <Link
          href="/joke"
          className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-neutral-700/10"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Random Joke{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &#8594;
            </span>
          </h2>
          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50`}
          >
            iCanHazDadJoke random joke
          </p>
        </Link>
      </div>
    </main>
  )
}
