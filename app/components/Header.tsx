import Link from 'next/link';

export default function Header({ id }: { id?: string }) {
  return (
    <header className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/">Home</Link>
      {id && (
        <span>
          <span className="mx-2">&#8594;</span>
          <Link href="/joke">Random Joke</Link>
        </span>
      )}
    </header>
  )
}
