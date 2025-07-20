export default function JokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-green-700 w-screen">{children}</div>
    </main>
  );
}
