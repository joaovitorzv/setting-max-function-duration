import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const config = {
  maxDuration: 5,
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const loader = async () => {
  const API_URL = "https://catfact.ninja/fact";

  const response = await fetch(API_URL);
  const data = await response.json();

  return json(data as { fact: string; length: number });
};

export const meta = () => {
  return [
    {
      title: "Cat Fact At Index",
    },
  ];
};

export default function CatFact() {
  const { fact, length } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Cat Fact at Index</h1>
      <p>feat: {fact}</p>
      <p>length: {length}</p>
    </div>
  );
}
