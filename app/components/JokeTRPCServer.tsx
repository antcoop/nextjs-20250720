import { initTRPC } from '@trpc/server';
import { z } from 'zod';
 
const t = initTRPC.create();
 
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function JokeLink() {
  const data = await getJoke();

  <div className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4">
    <h2 className={`${inter.className} mb-3 text-2xl font-semibold text-center`}>Loading...</h2>
  </div>
  return (
    <Link 
      className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-neutral-700/10"
      href={`/joke/${data.id}`}
    >
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        Joke TRPC Server{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &#8594;
        </span>  
      </h2>
      
      <span className="m-0 max-w-[30ch] text-sm text-center opacity-50">{data?.joke}</span>
    </Link>
  );
}

export function getJoke() {
  const router = t.router({
    // Create procedure at path 'greeting'
    greeting: t.procedure
      .input(z.object({}))
      .query(async (/* { input } */) => {
        const response = fetch('https://icanhazdadjoke.com', {
          headers: {
            Accept: 'application/json',
          },
        })

        return (await response).json();
      }),
  });

  const caller = router.createCaller({});

  return caller.greeting({});
}


