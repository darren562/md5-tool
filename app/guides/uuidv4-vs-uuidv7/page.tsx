import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUIDv4 vs UUIDv7: Random vs time-ordered identifiers",
  description:
    "UUIDv4 uses random bits; UUIDv7 is time-ordered for better database locality and sorting. Learn tradeoffs and migration tips.",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/uuidv4-vs-uuidv7",
  },
  openGraph: {
    title: "UUIDv4 vs UUIDv7",
    description:
      "Randomness vs time ordering, collision risk, and performance implications.",
    type: "article",
    url: "https://www.hashkitly.com/guides/uuidv4-vs-uuidv7",
  },
  twitter: {
    card: "summary",
    title: "UUIDv4 vs UUIDv7",
    description: "Which to choose and why.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>UUIDv4 vs UUIDv7</h1>
        <ul>
          <li>v4: purely random; widespread today.</li>
          <li>v7: time-ordered; better for sorting and DB index locality.</li>
        </ul>
        <p>
          Tools: <a href="/uuid">UUID</a>
        </p>
      </div>
    </div>
  );
}

export {};
