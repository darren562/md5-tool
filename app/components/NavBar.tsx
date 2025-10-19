"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  type Category =
    | "encoders"
    | "hashes"
    | "hmac"
    | "encryption"
    | "kdf"
    | "utils";
  const [openCat, setOpenCat] = useState<Category | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => (pathname === href ? "active" : "");

  useEffect(() => {
    // Close dropdown on route change
    setOpenCat(null);
  }, [pathname]);

  const closeOnClick = () => setOpenCat(null);

  // Close on outside click & ESC
  useEffect(() => {
    if (!openCat) return;
    const onClick = (e: MouseEvent) => {
      const el = panelRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpenCat(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCat(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openCat]);

  return (
    <nav className="topnav">
      <div className="nav-inner" style={{ position: "relative" }}>
        <Link href="/" className="logo">
          Hashkitly
        </Link>
        <div className="nav-cats">
          {[
            { key: "encoders", label: "Encoders" },
            { key: "hashes", label: "Hashes" },
            { key: "hmac", label: "HMAC" },
            { key: "encryption", label: "Encryption" },
            { key: "kdf", label: "KDF & Keys" },
            { key: "utils", label: "Utils" },
          ].map((cat) => (
            <div key={cat.key} className="nav-cat">
              <button
                aria-expanded={openCat === (cat.key as Category)}
                aria-controls={`nav-dropdown-${cat.key}`}
                aria-haspopup="menu"
                onClick={() =>
                  setOpenCat((prev) =>
                    prev === (cat.key as Category)
                      ? null
                      : (cat.key as Category)
                  )
                }
                className="nav-cat-btn"
              >
                <span>{cat.label}</span>
                <span className="caret" aria-hidden="true" />
              </button>
              {openCat === (cat.key as Category) && (
                <div
                  className="dropdown-panel anchored"
                  role="dialog"
                  aria-modal="false"
                  id={`nav-dropdown-${cat.key}`}
                >
                  <div
                    ref={panelRef}
                    className="dropdown-card dropdown-card--narrow"
                  >
                    <button
                      type="button"
                      className="dropdown-close-btn"
                      aria-label="Close menu"
                      onClick={() => setOpenCat(null)}
                    >
                      ×
                    </button>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div className="dropdown-header">{cat.label}</div>
                      <div className="dropdown-list">
                        {cat.key === "encoders" && (
                          <>
                            <Link
                              href="/base64"
                              className={isActive("/base64")}
                              onClick={closeOnClick}
                            >
                              Base64
                            </Link>
                            <Link
                              href="/base32"
                              className={isActive("/base32")}
                              onClick={closeOnClick}
                            >
                              Base32
                            </Link>
                            <Link
                              href="/base32hex"
                              className={isActive("/base32hex")}
                              onClick={closeOnClick}
                            >
                              Base32hex
                            </Link>
                            <Link
                              href="/base58"
                              className={isActive("/base58")}
                              onClick={closeOnClick}
                            >
                              Base58
                            </Link>
                            <Link
                              href="/base64url"
                              className={isActive("/base64url")}
                              onClick={closeOnClick}
                            >
                              Base64url
                            </Link>
                            <Link
                              href="/base36"
                              className={isActive("/base36")}
                              onClick={closeOnClick}
                            >
                              Base36
                            </Link>
                            <Link
                              href="/base45"
                              className={isActive("/base45")}
                              onClick={closeOnClick}
                            >
                              Base45
                            </Link>
                            <Link
                              href="/base62"
                              className={isActive("/base62")}
                              onClick={closeOnClick}
                            >
                              Base62
                            </Link>
                            <Link
                              href="/hex"
                              className={isActive("/hex")}
                              onClick={closeOnClick}
                            >
                              Hex
                            </Link>
                            <Link
                              href="/url"
                              className={isActive("/url")}
                              onClick={closeOnClick}
                            >
                              URL
                            </Link>
                            <Link
                              href="/binary"
                              className={isActive("/binary")}
                              onClick={closeOnClick}
                            >
                              Binary
                            </Link>
                            <Link
                              href="/quoted-printable"
                              className={isActive("/quoted-printable")}
                              onClick={closeOnClick}
                            >
                              Quoted-Printable
                            </Link>
                            <Link
                              href="/rot13"
                              className={isActive("/rot13")}
                              onClick={closeOnClick}
                            >
                              ROT13
                            </Link>
                            <Link
                              href="/rot47"
                              className={isActive("/rot47")}
                              onClick={closeOnClick}
                            >
                              ROT47
                            </Link>
                            <Link
                              href="/ascii85"
                              className={isActive("/ascii85")}
                              onClick={closeOnClick}
                            >
                              ASCII85 (Base85)
                            </Link>
                            <Link
                              href="/base85-rfc1924"
                              className={isActive("/base85-rfc1924")}
                              onClick={closeOnClick}
                            >
                              Base85 (RFC 1924)
                            </Link>
                            <Link
                              href="/z85"
                              className={isActive("/z85")}
                              onClick={closeOnClick}
                            >
                              Z85
                            </Link>
                            <Link
                              href="/base91"
                              className={isActive("/base91")}
                              onClick={closeOnClick}
                            >
                              Base91
                            </Link>
                            <Link
                              href="/base32-crockford"
                              className={isActive("/base32-crockford")}
                              onClick={closeOnClick}
                            >
                              Base32 Crockford
                            </Link>
                            <Link
                              href="/atbash"
                              className={isActive("/atbash")}
                              onClick={closeOnClick}
                            >
                              Atbash
                            </Link>
                            <Link
                              href="/rot5"
                              className={isActive("/rot5")}
                              onClick={closeOnClick}
                            >
                              ROT5
                            </Link>
                            <Link
                              href="/rot18"
                              className={isActive("/rot18")}
                              onClick={closeOnClick}
                            >
                              ROT18
                            </Link>
                            <Link
                              href="/morse"
                              className={isActive("/morse")}
                              onClick={closeOnClick}
                            >
                              Morse
                            </Link>
                            <Link
                              href="/railfence"
                              className={isActive("/railfence")}
                              onClick={closeOnClick}
                            >
                              Rail Fence
                            </Link>
                            <Link
                              href="/affine"
                              className={isActive("/affine")}
                              onClick={closeOnClick}
                            >
                              Affine
                            </Link>
                            <Link
                              href="/baconian"
                              className={isActive("/baconian")}
                              onClick={closeOnClick}
                            >
                              Baconian
                            </Link>
                            <Link
                              href="/polybius"
                              className={isActive("/polybius")}
                              onClick={closeOnClick}
                            >
                              Polybius
                            </Link>
                            <Link
                              href="/playfair"
                              className={isActive("/playfair")}
                              onClick={closeOnClick}
                            >
                              Playfair
                            </Link>
                            <Link
                              href="/beaufort"
                              className={isActive("/beaufort")}
                              onClick={closeOnClick}
                            >
                              Beaufort
                            </Link>
                            <Link
                              href="/autokey"
                              className={isActive("/autokey")}
                              onClick={closeOnClick}
                            >
                              Autokey
                            </Link>
                            <Link
                              href="/porta"
                              className={isActive("/porta")}
                              onClick={closeOnClick}
                            >
                              Porta
                            </Link>
                            <Link
                              href="/bifid"
                              className={isActive("/bifid")}
                              onClick={closeOnClick}
                            >
                              Bifid
                            </Link>
                            <Link
                              href="/columnar"
                              className={isActive("/columnar")}
                              onClick={closeOnClick}
                            >
                              Columnar
                            </Link>
                            <Link
                              href="/scytale"
                              className={isActive("/scytale")}
                              onClick={closeOnClick}
                            >
                              Scytale
                            </Link>
                            <Link
                              href="/double-transposition"
                              className={isActive("/double-transposition")}
                              onClick={closeOnClick}
                            >
                              Double Transposition
                            </Link>
                            <Link
                              href="/xor-cipher"
                              className={isActive("/xor-cipher")}
                              onClick={closeOnClick}
                            >
                              XOR Cipher
                            </Link>
                            <Link
                              href="/keyword"
                              className={isActive("/keyword")}
                              onClick={closeOnClick}
                            >
                              Keyword Substitution
                            </Link>
                            <Link
                              href="/gronsfeld"
                              className={isActive("/gronsfeld")}
                              onClick={closeOnClick}
                            >
                              Gronsfeld
                            </Link>
                            <Link
                              href="/html-entities"
                              className={isActive("/html-entities")}
                              onClick={closeOnClick}
                            >
                              HTML Entities
                            </Link>
                            <Link
                              href="/caesar"
                              className={isActive("/caesar")}
                              onClick={closeOnClick}
                            >
                              Caesar Cipher
                            </Link>
                            <Link
                              href="/vigenere"
                              className={isActive("/vigenere")}
                              onClick={closeOnClick}
                            >
                              Vigenère
                            </Link>
                          </>
                        )}
                        {cat.key === "hashes" && (
                          <>
                            <Link
                              href="/"
                              className={isActive("/")}
                              onClick={closeOnClick}
                            >
                              MD5
                            </Link>
                            <Link
                              href="/sha256"
                              className={isActive("/sha256")}
                              onClick={closeOnClick}
                            >
                              SHA256
                            </Link>
                            <Link
                              href="/sha224"
                              className={isActive("/sha224")}
                              onClick={closeOnClick}
                            >
                              SHA-224
                            </Link>
                            <Link
                              href="/sha384"
                              className={isActive("/sha384")}
                              onClick={closeOnClick}
                            >
                              SHA-384
                            </Link>
                            <Link
                              href="/sha512"
                              className={isActive("/sha512")}
                              onClick={closeOnClick}
                            >
                              SHA-512
                            </Link>
                            <Link
                              href="/sha3"
                              className={isActive("/sha3")}
                              onClick={closeOnClick}
                            >
                              SHA-3
                            </Link>
                            <Link
                              href="/sha1"
                              className={isActive("/sha1")}
                              onClick={closeOnClick}
                            >
                              SHA-1
                            </Link>
                            <Link
                              href="/ripemd160"
                              className={isActive("/ripemd160")}
                              onClick={closeOnClick}
                            >
                              RIPEMD-160
                            </Link>
                            <Link
                              href="/crc32"
                              className={isActive("/crc32")}
                              onClick={closeOnClick}
                            >
                              CRC32
                            </Link>
                            <Link
                              href="/crc32c"
                              className={isActive("/crc32c")}
                              onClick={closeOnClick}
                            >
                              CRC32C
                            </Link>
                            <Link
                              href="/crc64"
                              className={isActive("/crc64")}
                              onClick={closeOnClick}
                            >
                              CRC64
                            </Link>
                            <Link
                              href="/crc16"
                              className={isActive("/crc16")}
                              onClick={closeOnClick}
                            >
                              CRC16
                            </Link>
                            <Link
                              href="/adler32"
                              className={isActive("/adler32")}
                              onClick={closeOnClick}
                            >
                              Adler-32
                            </Link>
                            <Link
                              href="/fnv1a32"
                              className={isActive("/fnv1a32")}
                              onClick={closeOnClick}
                            >
                              FNV-1a 32
                            </Link>
                            <Link
                              href="/murmur3"
                              className={isActive("/murmur3")}
                              onClick={closeOnClick}
                            >
                              Murmur3 (32)
                            </Link>
                            <Link
                              href="/fnv1a64"
                              className={isActive("/fnv1a64")}
                              onClick={closeOnClick}
                            >
                              FNV-1a 64
                            </Link>
                            <Link
                              href="/crc8"
                              className={isActive("/crc8")}
                              onClick={closeOnClick}
                            >
                              CRC-8
                            </Link>
                            <Link
                              href="/crc24"
                              className={isActive("/crc24")}
                              onClick={closeOnClick}
                            >
                              CRC-24 (OpenPGP)
                            </Link>
                            <Link
                              href="/crc7"
                              className={isActive("/crc7")}
                              onClick={closeOnClick}
                            >
                              CRC-7
                            </Link>
                            <Link
                              href="/xxhash32"
                              className={isActive("/xxhash32")}
                              onClick={closeOnClick}
                            >
                              xxHash32
                            </Link>
                            <Link
                              href="/jenkins"
                              className={isActive("/jenkins")}
                              onClick={closeOnClick}
                            >
                              Jenkins OAAT
                            </Link>
                            <Link
                              href="/djb2"
                              className={isActive("/djb2")}
                              onClick={closeOnClick}
                            >
                              DJB2
                            </Link>
                            <Link
                              href="/bkdr"
                              className={isActive("/bkdr")}
                              onClick={closeOnClick}
                            >
                              BKDR
                            </Link>
                            <Link
                              href="/loselose"
                              className={isActive("/loselose")}
                              onClick={closeOnClick}
                            >
                              Lose Lose
                            </Link>
                            <Link
                              href="/fletcher16"
                              className={isActive("/fletcher16")}
                              onClick={closeOnClick}
                            >
                              Fletcher-16
                            </Link>
                            <Link
                              href="/fletcher32"
                              className={isActive("/fletcher32")}
                              onClick={closeOnClick}
                            >
                              Fletcher-32
                            </Link>
                            <Link
                              href="/crc16-modbus"
                              className={isActive("/crc16-modbus")}
                              onClick={closeOnClick}
                            >
                              CRC-16/MODBUS
                            </Link>
                            <Link
                              href="/crc16-xmodem"
                              className={isActive("/crc16-xmodem")}
                              onClick={closeOnClick}
                            >
                              CRC-16/XMODEM
                            </Link>
                            <Link
                              href="/crc16-ibm"
                              className={isActive("/crc16-ibm")}
                              onClick={closeOnClick}
                            >
                              CRC-16/IBM
                            </Link>
                            <Link
                              href="/crc16-ccitt"
                              className={isActive("/crc16-ccitt")}
                              onClick={closeOnClick}
                            >
                              CRC-16/CCITT-FALSE
                            </Link>
                            <Link
                              href="/crc16-x25"
                              className={isActive("/crc16-x25")}
                              onClick={closeOnClick}
                            >
                              CRC-16/X25
                            </Link>
                            <Link
                              href="/crc16-kermit"
                              className={isActive("/crc16-kermit")}
                              onClick={closeOnClick}
                            >
                              CRC-16/KERMIT
                            </Link>
                            <Link
                              href="/sdbm"
                              className={isActive("/sdbm")}
                              onClick={closeOnClick}
                            >
                              SDBM
                            </Link>
                            <Link
                              href="/sum8"
                              className={isActive("/sum8")}
                              onClick={closeOnClick}
                            >
                              Sum-8
                            </Link>
                            <Link
                              href="/xor8"
                              className={isActive("/xor8")}
                              onClick={closeOnClick}
                            >
                              XOR-8
                            </Link>
                            <Link
                              href="/lrc8"
                              className={isActive("/lrc8")}
                              onClick={closeOnClick}
                            >
                              LRC-8
                            </Link>
                            <Link
                              href="/rshash"
                              className={isActive("/rshash")}
                              onClick={closeOnClick}
                            >
                              RS Hash
                            </Link>
                            <Link
                              href="/aphash"
                              className={isActive("/aphash")}
                              onClick={closeOnClick}
                            >
                              AP Hash
                            </Link>
                            <Link
                              href="/dekhash"
                              className={isActive("/dekhash")}
                              onClick={closeOnClick}
                            >
                              DEK Hash
                            </Link>
                            <Link
                              href="/pjwhash"
                              className={isActive("/pjwhash")}
                              onClick={closeOnClick}
                            >
                              PJW Hash
                            </Link>
                            <Link
                              href="/jshash"
                              className={isActive("/jshash")}
                              onClick={closeOnClick}
                            >
                              JS Hash
                            </Link>
                            <Link
                              href="/sum8"
                              className={isActive("/sum8")}
                              onClick={closeOnClick}
                            >
                              Sum-8
                            </Link>
                            <Link
                              href="/xor8"
                              className={isActive("/xor8")}
                              onClick={closeOnClick}
                            >
                              XOR-8
                            </Link>
                            <Link
                              href="/elf"
                              className={isActive("/elf")}
                              onClick={closeOnClick}
                            >
                              ELF
                            </Link>
                            <Link
                              href="/fnv132"
                              className={isActive("/fnv132")}
                              onClick={closeOnClick}
                            >
                              FNV-1 32
                            </Link>
                            <Link
                              href="/fnv164"
                              className={isActive("/fnv164")}
                              onClick={closeOnClick}
                            >
                              FNV-1 64
                            </Link>
                            <Link
                              href="/superfasthash"
                              className={isActive("/superfasthash")}
                              onClick={closeOnClick}
                            >
                              SuperFastHash
                            </Link>
                            <Link
                              href="/crc32-bzip2"
                              className={isActive("/crc32-bzip2")}
                              onClick={closeOnClick}
                            >
                              CRC-32/BZIP2
                            </Link>
                            <Link
                              href="/crc32-mpeg2"
                              className={isActive("/crc32-mpeg2")}
                              onClick={closeOnClick}
                            >
                              CRC-32/MPEG-2
                            </Link>
                          </>
                        )}
                        {cat.key === "hmac" && (
                          <>
                            <Link
                              href="/hmac-md5"
                              className={isActive("/hmac-md5")}
                              onClick={closeOnClick}
                            >
                              HMAC-MD5
                            </Link>
                            <Link
                              href="/hmac-sha256"
                              className={isActive("/hmac-sha256")}
                              onClick={closeOnClick}
                            >
                              HMAC-SHA256
                            </Link>
                            <Link
                              href="/hmac-sha512"
                              className={isActive("/hmac-sha512")}
                              onClick={closeOnClick}
                            >
                              HMAC-SHA512
                            </Link>
                            <Link
                              href="/hmac-sha1"
                              className={isActive("/hmac-sha1")}
                              onClick={closeOnClick}
                            >
                              HMAC-SHA1
                            </Link>
                          </>
                        )}
                        {cat.key === "encryption" && (
                          <>
                            <Link
                              href="/aes"
                              className={isActive("/aes")}
                              onClick={closeOnClick}
                            >
                              AES
                            </Link>
                            <Link
                              href="/aes-gcm"
                              className={isActive("/aes-gcm")}
                              onClick={closeOnClick}
                            >
                              AES-GCM
                            </Link>
                            <Link
                              href="/tripledes"
                              className={isActive("/tripledes")}
                              onClick={closeOnClick}
                            >
                              3DES
                            </Link>
                            <Link
                              href="/rsa-oaep"
                              className={isActive("/rsa-oaep")}
                              onClick={closeOnClick}
                            >
                              RSA-OAEP
                            </Link>
                          </>
                        )}
                        {cat.key === "kdf" && (
                          <>
                            <Link
                              href="/pbkdf2"
                              className={isActive("/pbkdf2")}
                              onClick={closeOnClick}
                            >
                              PBKDF2
                            </Link>
                            <Link
                              href="/hkdf"
                              className={isActive("/hkdf")}
                              onClick={closeOnClick}
                            >
                              HKDF
                            </Link>
                          </>
                        )}
                        {cat.key === "utils" && (
                          <>
                            <Link
                              href="/uuid"
                              className={isActive("/uuid")}
                              onClick={closeOnClick}
                            >
                              UUID
                            </Link>
                            <Link
                              href="/jwt"
                              className={isActive("/jwt")}
                              onClick={closeOnClick}
                            >
                              JWT
                            </Link>
                            <Link
                              href="/random"
                              className={isActive("/random")}
                              onClick={closeOnClick}
                            >
                              Random
                            </Link>
                            <Link
                              href="/uuencode"
                              className={isActive("/uuencode")}
                              onClick={closeOnClick}
                            >
                              UUEncode
                            </Link>
                            <Link
                              href="/base58check"
                              className={isActive("/base58check")}
                              onClick={closeOnClick}
                            >
                              Base58Check
                            </Link>
                            <Link
                              href="/q-encoding"
                              className={isActive("/q-encoding")}
                              onClick={closeOnClick}
                            >
                              Q-encoding
                            </Link>
                            <Link
                              href="/isbn13"
                              className={isActive("/isbn13")}
                              onClick={closeOnClick}
                            >
                              ISBN-13
                            </Link>
                            <Link
                              href="/issn"
                              className={isActive("/issn")}
                              onClick={closeOnClick}
                            >
                              ISSN
                            </Link>
                            <Link
                              href="/soundex"
                              className={isActive("/soundex")}
                              onClick={closeOnClick}
                            >
                              Soundex
                            </Link>
                            <Link
                              href="/iban"
                              className={isActive("/iban")}
                              onClick={closeOnClick}
                            >
                              IBAN
                            </Link>
                            <Link
                              href="/luhn"
                              className={isActive("/luhn")}
                              onClick={closeOnClick}
                            >
                              Luhn Check
                            </Link>
                            <Link
                              href="/verhoeff"
                              className={isActive("/verhoeff")}
                              onClick={closeOnClick}
                            >
                              Verhoeff Check
                            </Link>
                            <Link
                              href="/damm"
                              className={isActive("/damm")}
                              onClick={closeOnClick}
                            >
                              Damm Check
                            </Link>
                            <Link
                              href="/isbn10"
                              className={isActive("/isbn10")}
                              onClick={closeOnClick}
                            >
                              ISBN-10
                            </Link>
                            <Link
                              href="/ean13"
                              className={isActive("/ean13")}
                              onClick={closeOnClick}
                            >
                              EAN-13
                            </Link>
                            <Link
                              href="/ean8"
                              className={isActive("/ean8")}
                              onClick={closeOnClick}
                            >
                              EAN-8
                            </Link>
                            <Link
                              href="/upca"
                              className={isActive("/upca")}
                              onClick={closeOnClick}
                            >
                              UPC-A
                            </Link>
                            <Link
                              href="/nato"
                              className={isActive("/nato")}
                              onClick={closeOnClick}
                            >
                              NATO Phonetic
                            </Link>
                            <Link
                              href="/leetspeak"
                              className={isActive("/leetspeak")}
                              onClick={closeOnClick}
                            >
                              Leetspeak
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Link
            href="/privacy"
            className={`nav-privacy-link ${isActive("/privacy")}`}
          >
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
}
