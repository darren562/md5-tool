import Client from "./Client";
export const metadata = {
  title: "Base62 Encode/Decode Online | Text ↔ Base62 Converter",
  description:
    "Convert text to Base62 and Base62 back to text using UTF-8 bytes. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base62" },
};
export default function Page() {
  return <Client />;
}
