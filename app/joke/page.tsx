"use server";

import Joke from "../components/Joke";
import Header from "../components/Header";

export default async function JokePage() {
  const data: { joke: string, id: string } = await getData();
  return (
    <>
      <Header />
      <Joke joke={data.joke} id={data.id} />
    </>
  );
}

async function getData() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
