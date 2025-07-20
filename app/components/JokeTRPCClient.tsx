"use client";

import { trpc } from "@/utils/trpc";
import Link from "next/link";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function JokeLink() {
  const { data, isLoading, isFetching } = trpc.joke.useQuery();

  if (isLoading || isFetching) return (
    <div className="group flex flex-col items-center justify-center rounded-lg border border-transparent px-5 py-4">
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold text-center`}>Loading...</h2>
    </div>
  );
  if (data?.joke) {
    return (
      <Link 
        className="group flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-100 hover:dark:bg-neutral-700/10"
        href={`/joke/${data.id}`}
      >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Joke TRPC Client{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            &#8594;
          </span>  
        </h2>
        
        <span className="m-0 max-w-[30ch] text-sm text-center opacity-50">{data?.joke}</span>
      </Link>
    );
  }
  return null;
}
