"use client";

import { useState } from "react";
import ToolLinks from "../components/ToolLinks";
import LongTailSEO from "../components/LongTailSEO";
import { SafetyNote } from "../components/SafetyNote";

const MAP: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  ":": "---...",
  '"': ".-..-.",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  $: "...-..-",
  "@": ".--.-.",
};
const REV: Record<string, string> = Object.fromEntries(
  Object.entries(MAP).map(([k, v]) => [v, k])
);

function encodeMorse(input: string): string {
  return input
    .split(/\s+/)
    .map((word) =>
      word
        .split("")
        .map((ch) => {
          const up = ch.toUpperCase();
          return MAP[up] || "";
        })
        .filter(Boolean)
        .join(" ")
    )
    .join(" / ");
}

function decodeMorse(input: string): string {
  // Accept separators: space between letters, / or 3 spaces between words
  const words = input
    .trim()
    .replace(/ {3,}/g, " / ")
    .split(/\s*\/\s*|\s\/\s/);
  return words
    .map((w) =>
      w
        .trim()
        .split(/\s+/)
        .map((sym) => REV[sym] || "")
        .join("")
    )
    .join(" ");
}

export default function MorseClient() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const run = () => {
    const s = input.trim();
    setOutput(mode === "encode" ? encodeMorse(s) : decodeMorse(s));
  };
  return (
    <div className="container">
      <div className="box">
        <h1>Morse Code</h1>
        <SafetyNote kind="url" />
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <label>
            <input
              type="radio"
              checked={mode === "encode"}
              onChange={() => setMode("encode")}
            />{" "}
            Encode
          </label>
          <label>
            <input
              type="radio"
              checked={mode === "decode"}
              onChange={() => setMode("decode")}
            />{" "}
            Decode
          </label>
        </div>
        <textarea
          placeholder={
            mode === "encode"
              ? "Enter text..."
              : "Enter Morse (letters separated by spaces, words by /)"
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={run} style={{ margin: "12px 0" }}>
          Run
        </button>
        {output !== "" && (
          <div className="result">
            <div className="row">
              <span>Result:</span>
              <span className="hash" style={{ wordBreak: "break-all" }}>
                {output}
              </span>
            </div>
          </div>
        )}
        <div className="intro">
          <LongTailSEO
            title="Morse code encoder/decoder — free, no upload (FAQs)"
            breadcrumbs={[
              { name: "Home", url: "https://www.hashkitly.com/" },
              { name: "Morse", url: "https://www.hashkitly.com/morse" },
            ]}
            faqs={[
              {
                q: "Separators?",
                a: 'Space between letters, "/" between words (or three spaces).',
              },
            ]}
            relatedLinks={[
              { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
              { name: "Vigenere", url: "https://www.hashkitly.com/vigenere" },
            ]}
          />
        </div>
      </div>
      <ToolLinks />
    </div>
  );
}
