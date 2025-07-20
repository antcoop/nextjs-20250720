import Joke from "@/components/Joke";
import Header from "@/components/Header";

async function getData(id: string) {
  const response = await fetch(`https://icanhazdadjoke.com/j/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

// @ts-expect-error - This is a server component, so we can use async/await directly.
export default async function JokePage({ params }) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <>
      <Header id={id} />
      <Joke joke={data.joke} id={data.id} hasBreadcrumb />
    </>
  );
}
