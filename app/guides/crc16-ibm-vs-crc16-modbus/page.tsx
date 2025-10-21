import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRC16-IBM vs CRC16-MODBUS: Polynomial and init differences",
  description:
    "Compare CRC16-IBM and CRC16-MODBUS variants: polynomials, initial values, refin/out, and typical protocols.",
  alternates: {
    canonical: "https://www.hashkitly.com/guides/crc16-ibm-vs-crc16-modbus",
  },
  openGraph: {
    title: "CRC16-IBM vs CRC16-MODBUS",
    description:
      "Understand variant parameters and when each is required by a system.",
    type: "article",
    url: "https://www.hashkitly.com/guides/crc16-ibm-vs-crc16-modbus",
  },
  twitter: {
    card: "summary",
    title: "CRC16-IBM vs CRC16-MODBUS",
    description: "Variant parameters and typical use-cases.",
  },
};

export default function Page() {
  return (
    <div className="container">
      <div className="box">
        <h1>CRC16-IBM vs CRC16-MODBUS</h1>
        <p>
          CRC16 variants differ by polynomial, initial value, refin/refout, and
          final XOR. IBM and MODBUS are common, but not interchangeable—use the
          one specified by your protocol.
        </p>
        <p>
          Tools: <a href="/crc16-ibm">CRC16-IBM</a>,{" "}
          <a href="/crc16-modbus">CRC16-MODBUS</a>
        </p>
      </div>
    </div>
  );
}

export {};
