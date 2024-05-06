import type { MetaFunction } from "@remix-run/node";

export const config = { maxDuration: 4 };

export const meta: MetaFunction = () => {
  return [
    { title: "Something" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return { message: "Hello from the loader!" };
};

export default function Something() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome Something Page</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
