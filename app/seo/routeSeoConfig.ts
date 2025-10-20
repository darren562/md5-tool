import type { FAQItem } from "../components/LongTailSEO";

export type RouteSEOConfig = {
  title: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: FAQItem[];
  relatedLinks?: { name: string; url: string }[];
};

export const routeSeoConfig: Record<string, RouteSEOConfig> = {
  "/base64": {
    title: "Base64 online encoder/decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base64", url: "https://www.hashkitly.com/base64" },
    ],
    faqs: [
      {
        q: "How to encode text to Base64?",
        a: "Paste text, click Encode. Output appears instantly in your browser.",
      },
      {
        q: "How to decode Base64?",
        a: "Paste Base64 string and click Decode. Invalid input is highlighted.",
      },
      {
        q: "Is my data uploaded?",
        a: "No. All conversions are client-side; your data never leaves your device.",
      },
      {
        q: "How to remove padding =?",
        a: "Use our Base64URL page for URL-safe, no padding encoding when needed.",
      },
    ],
    relatedLinks: [
      { name: "Base64URL", url: "https://www.hashkitly.com/base64url" },
      { name: "Hex converter", url: "https://www.hashkitly.com/hex" },
      { name: "URL encode/decode", url: "https://www.hashkitly.com/url" },
    ],
  },
  "/sha256": {
    title: "SHA-256 hash generator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
    ],
    faqs: [
      {
        q: "How to create a SHA-256 checksum?",
        a: "Enter text or use a file tool. For files, see our guides on verifying checksums.",
      },
      {
        q: "Is SHA-256 reversible?",
        a: "No. SHA-256 is a one-way function; you cannot retrieve original input from the hash.",
      },
      {
        q: "Which is better for passwords?",
        a: "Use Argon2, scrypt, bcrypt, or PBKDF2 with salt—not plain SHA-256.",
      },
      {
        q: "How to verify a file hash?",
        a: "Compare the computed SHA-256 with the publisher's provided checksum.",
      },
    ],
    relatedLinks: [
      {
        name: "Verify file SHA-256 (guide)",
        url: "https://www.hashkitly.com/guides/verify-file-sha256",
      },
      { name: "PBKDF2", url: "https://www.hashkitly.com/pbkdf2" },
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
    ],
  },
  "/url": {
    title: "URL encoding and decoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "URL Encode/Decode", url: "https://www.hashkitly.com/url" },
    ],
    faqs: [
      {
        q: "What is percent-encoding?",
        a: "It replaces unsafe characters with %HH bytes to make URLs safe for transport.",
      },
      {
        q: "When to use + vs %20?",
        a: "+ is for application/x-www-form-urlencoded spaces; %20 is the raw percent-encoding for space.",
      },
      {
        q: "How to encode non-ASCII?",
        a: "Use UTF-8 before encoding; the tool handles this automatically.",
      },
    ],
    relatedLinks: [
      { name: "Base64URL", url: "https://www.hashkitly.com/base64url" },
      { name: "HTML entities", url: "https://www.hashkitly.com/html-entities" },
    ],
  },
  "/uuid": {
    title: "UUID v4 generator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "UUID", url: "https://www.hashkitly.com/uuid" },
    ],
    faqs: [
      {
        q: "What is UUID v4?",
        a: "A randomly generated 128-bit identifier formatted as 8-4-4-4-12 hexadecimal.",
      },
      {
        q: "Is UUID unique?",
        a: "Collisions are astronomically unlikely; v4 is safe for most practical uses.",
      },
      {
        q: "UUID vs GUID?",
        a: "GUID is Microsoft's implementation; terms are used interchangeably in many contexts.",
      },
    ],
    relatedLinks: [
      { name: "Random generator", url: "https://www.hashkitly.com/random" },
      { name: "SHA-1", url: "https://www.hashkitly.com/sha1" },
    ],
  },
  "/crc32": {
    title: "CRC32 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC32", url: "https://www.hashkitly.com/crc32" },
    ],
    faqs: [
      {
        q: "What is CRC32 used for?",
        a: "Error-detection in storage and transmission; not for security.",
      },
      {
        q: "CRC vs Hash?",
        a: "CRC is linear and not cryptographic; use SHA-256 for security-sensitive needs.",
      },
    ],
  },
  "/hmac-sha256": {
    title: "HMAC-SHA256 signing FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
    ],
    faqs: [
      {
        q: "What is HMAC?",
        a: "A message authentication code combining a hash function and a secret key.",
      },
      {
        q: "What is a good key length?",
        a: "Use a 256-bit randomly generated key for strong security.",
      },
    ],
    relatedLinks: [
      {
        name: "JWT guide",
        url: "https://www.hashkitly.com/guides/decode-jwt-safely",
      },
      {
        name: "PBKDF2 vs HKDF",
        url: "https://www.hashkitly.com/guides/pbkdf2-vs-hkdf",
      },
    ],
  },
  "/aes": {
    title: "AES encryption FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "AES", url: "https://www.hashkitly.com/aes" },
    ],
    faqs: [
      {
        q: "What mode should I use?",
        a: "Prefer GCM for authenticated encryption. Use unique IVs and never reuse keys+IVs.",
      },
      {
        q: "Is AES-256 better than AES-128?",
        a: "Both are secure; AES-256 offers larger key space but may be slower.",
      },
    ],
    relatedLinks: [
      { name: "AES-GCM", url: "https://www.hashkitly.com/aes-gcm" },
      { name: "RSA-OAEP", url: "https://www.hashkitly.com/rsa-oaep" },
    ],
  },
  "/jwt": {
    title: "JWT decoding and security FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "JWT", url: "https://www.hashkitly.com/jwt" },
    ],
    faqs: [
      {
        q: "Is Base64 decoding validating JWT?",
        a: "No. Decoding reveals claims but does not verify signature or trustworthiness.",
      },
      {
        q: "What algorithms are safe?",
        a: "Use RS256/ES256/EdDSA. Never accept 'none'. Validate 'aud', 'iss', 'exp'.",
      },
    ],
    relatedLinks: [
      { name: "HMAC-SHA256", url: "https://www.hashkitly.com/hmac-sha256" },
      {
        name: "Verify file SHA-256",
        url: "https://www.hashkitly.com/guides/verify-file-sha256",
      },
    ],
  },
  "/base64url": {
    title: "Base64URL encoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base64URL", url: "https://www.hashkitly.com/base64url" },
    ],
    faqs: [
      {
        q: "Base64 vs Base64URL?",
        a: "Base64URL replaces +/ with -_ and usually omits padding to be URL-safe.",
      },
      {
        q: "Why no = padding?",
        a: "Padding is optional in Base64URL and often removed for brevity; decoding can infer length.",
      },
      {
        q: "When to use Base64URL?",
        a: "Use in URLs, JWT, and systems where + and / are problematic.",
      },
    ],
    relatedLinks: [
      { name: "Base64", url: "https://www.hashkitly.com/base64" },
      { name: "JWT", url: "https://www.hashkitly.com/jwt" },
    ],
  },
  "/base32": {
    title: "Base32 encoder/decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base32", url: "https://www.hashkitly.com/base32" },
    ],
    faqs: [
      {
        q: "Why Base32?",
        a: "Base32 is case-insensitive and more human-friendly; useful for secret keys and otpauth.",
      },
      {
        q: "Base32 alphabet?",
        a: "RFC 4648 uses A–Z and 2–7; padding with = may appear.",
      },
    ],
    relatedLinks: [
      { name: "Base32hex", url: "https://www.hashkitly.com/base32hex" },
      {
        name: "Base32 Crockford",
        url: "https://www.hashkitly.com/base32-crockford",
      },
    ],
  },
  "/base32hex": {
    title: "Base32hex (RFC 4648) FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base32hex", url: "https://www.hashkitly.com/base32hex" },
    ],
    faqs: [
      {
        q: "How is Base32hex different?",
        a: "It uses 0–9 and A–V mapping instead of A–Z + 2–7.",
      },
      {
        q: "Is it compatible with Base32?",
        a: "Not directly; alphabets differ. Use the correct decoder.",
      },
    ],
  },
  "/base58": {
    title: "Base58 (Bitcoin) encoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base58", url: "https://www.hashkitly.com/base58" },
    ],
    faqs: [
      {
        q: "What is Base58?",
        a: "An alphabet avoiding look-alikes (0,O,l,I, etc.), popular in Bitcoin addresses.",
      },
      {
        q: "Base58 vs Base58Check?",
        a: "Base58Check adds version + checksum for error detection.",
      },
    ],
    relatedLinks: [
      { name: "Base58Check", url: "https://www.hashkitly.com/base58check" },
      { name: "Hex", url: "https://www.hashkitly.com/hex" },
    ],
  },
  "/hex": {
    title: "Hex encoder/decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Hex", url: "https://www.hashkitly.com/hex" },
    ],
    faqs: [
      {
        q: "Uppercase vs lowercase?",
        a: "Both are equivalent; hex is case-insensitive.",
      },
      {
        q: "Remove 0x prefix?",
        a: "It's a display convention; the value is the same without it.",
      },
    ],
    relatedLinks: [
      { name: "Base64", url: "https://www.hashkitly.com/base64" },
      { name: "Binary", url: "https://www.hashkitly.com/binary" },
    ],
  },
  "/binary": {
    title: "Binary text converter FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Binary", url: "https://www.hashkitly.com/binary" },
    ],
    faqs: [
      {
        q: "What encoding is used?",
        a: "UTF-8 to bytes and then rendered as 0/1 groups.",
      },
      {
        q: "Spacing in output?",
        a: "Use grouping (8-bits) for readability; functionality unaffected.",
      },
    ],
  },
  "/quoted-printable": {
    title: "Quoted-Printable FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      {
        name: "Quoted-Printable",
        url: "https://www.hashkitly.com/quoted-printable",
      },
    ],
    faqs: [
      {
        q: "What is Quoted-Printable?",
        a: "An email-safe encoding from MIME to keep messages mostly readable ASCII.",
      },
      {
        q: "Soft line breaks =?",
        a: "= at end of line indicates soft line break as per MIME wrapping rules.",
      },
    ],
  },
  "/rot13": {
    title: "ROT13 encoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ROT13", url: "https://www.hashkitly.com/rot13" },
    ],
    faqs: [
      {
        q: "Is ROT13 encryption?",
        a: "No. It's a simple letter substitution for obfuscation only.",
      },
      {
        q: "Double-apply ROT13?",
        a: "Applying ROT13 twice returns the original text.",
      },
    ],
    relatedLinks: [
      { name: "ROT47", url: "https://www.hashkitly.com/rot47" },
      { name: "Caesar", url: "https://www.hashkitly.com/caesar" },
    ],
  },
  "/rot47": {
    title: "ROT47 encoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ROT47", url: "https://www.hashkitly.com/rot47" },
    ],
    faqs: [
      {
        q: "What is ROT47?",
        a: "A rotation over visible ASCII (33–126), affecting more than letters only.",
      },
      {
        q: "Is it secure?",
        a: "No. It's for obfuscation, not cryptographic security.",
      },
    ],
  },
  "/ascii85": {
    title: "ASCII85 (Base85) FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ASCII85", url: "https://www.hashkitly.com/ascii85" },
    ],
    faqs: [
      {
        q: "What is ASCII85?",
        a: "An encoding packing 4 bytes into 5 ASCII chars; used in PostScript/PDF.",
      },
      {
        q: "ASCII85 vs Z85?",
        a: "Z85 is a ZeroMQ variant with a different alphabet and no delimiters.",
      },
    ],
    relatedLinks: [
      { name: "Z85", url: "https://www.hashkitly.com/z85" },
      {
        name: "Base85 (RFC1924)",
        url: "https://www.hashkitly.com/base85-rfc1924",
      },
    ],
  },
  "/base85-rfc1924": {
    title: "Base85 (RFC 1924) FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      {
        name: "Base85 (RFC 1924)",
        url: "https://www.hashkitly.com/base85-rfc1924",
      },
    ],
    faqs: [
      {
        q: "What is RFC 1924 Base85?",
        a: "A compact representation with 85 printable characters; differs from ASCII85.",
      },
      {
        q: "Is it compatible with ASCII85?",
        a: "No, alphabets and framing differ.",
      },
    ],
  },
  "/z85": {
    title: "Z85 encoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Z85", url: "https://www.hashkitly.com/z85" },
    ],
    faqs: [
      {
        q: "Where is Z85 used?",
        a: "ZeroMQ and environments needing compact textual binary encoding.",
      },
      {
        q: "Padding rules?",
        a: "Z85 has fixed 4-byte grouping; padding must align to 4 bytes.",
      },
    ],
  },
  "/base91": {
    title: "Base91 encoding FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base91", url: "https://www.hashkitly.com/base91" },
    ],
    faqs: [
      {
        q: "Why Base91?",
        a: "Higher efficiency than Base64 for some data at cost of complexity.",
      },
    ],
  },
  "/base32-crockford": {
    title: "Base32 Crockford FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      {
        name: "Base32 Crockford",
        url: "https://www.hashkitly.com/base32-crockford",
      },
    ],
    faqs: [
      {
        q: "What is Crockford Base32?",
        a: "A human-friendly Base32 with no ambiguous chars and optional checksum.",
      },
    ],
  },
  "/atbash": {
    title: "Atbash cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Atbash", url: "https://www.hashkitly.com/atbash" },
    ],
    faqs: [
      {
        q: "What is Atbash?",
        a: "A monoalphabetic substitution reversing the alphabet (A↔Z).",
      },
    ],
  },
  "/rot5": {
    title: "ROT5 encoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ROT5", url: "https://www.hashkitly.com/rot5" },
    ],
    faqs: [
      {
        q: "What is ROT5?",
        a: "Digit rotation cipher affecting 0–9 only; used for obfuscation.",
      },
    ],
  },
  "/rot18": {
    title: "ROT18 encoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ROT18", url: "https://www.hashkitly.com/rot18" },
    ],
    faqs: [
      {
        q: "What is ROT18?",
        a: "Combined ROT13 (letters) + ROT5 (digits) for broader obfuscation.",
      },
    ],
  },
  "/morse": {
    title: "Morse code converter FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Morse", url: "https://www.hashkitly.com/morse" },
    ],
    faqs: [
      {
        q: "International vs American Morse?",
        a: "This tool uses International Morse unless specified otherwise.",
      },
    ],
  },
  "/railfence": {
    title: "Rail Fence cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Rail Fence", url: "https://www.hashkitly.com/railfence" },
    ],
    faqs: [
      {
        q: "What is key/rails?",
        a: "Number of rails controls the zig-zag depth of transposition.",
      },
    ],
  },
  "/affine": {
    title: "Affine cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Affine", url: "https://www.hashkitly.com/affine" },
    ],
    faqs: [
      {
        q: "Valid 'a' values?",
        a: "'a' must be coprime with 26 to ensure invertibility.",
      },
    ],
  },
  "/baconian": {
    title: "Baconian cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Baconian", url: "https://www.hashkitly.com/baconian" },
    ],
    faqs: [
      {
        q: "Variant A/B?",
        a: "Different mappings for I/J and U/V; choose consistent scheme for encode/decode.",
      },
    ],
  },
  "/polybius": {
    title: "Polybius square FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Polybius", url: "https://www.hashkitly.com/polybius" },
    ],
    faqs: [
      {
        q: "I/J merging?",
        a: "Classic 5x5 squares merge I and J into one cell to fit 26 letters into 25.",
      },
    ],
  },
  "/playfair": {
    title: "Playfair cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Playfair", url: "https://www.hashkitly.com/playfair" },
    ],
    faqs: [
      {
        q: "Digraph rules?",
        a: "Pairs in same row/col shift; rectangle corners swap columns.",
      },
    ],
  },
  "/beaufort": {
    title: "Beaufort cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Beaufort", url: "https://www.hashkitly.com/beaufort" },
    ],
    faqs: [
      {
        q: "How is it different from Vigenère?",
        a: "It uses a different tableau operation resulting in complementary mapping.",
      },
    ],
  },
  "/autokey": {
    title: "Autokey cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Autokey", url: "https://www.hashkitly.com/autokey" },
    ],
    faqs: [
      {
        q: "What is the key stream?",
        a: "After seed key, plaintext extends the key sequence (autokey).",
      },
    ],
  },
  "/porta": {
    title: "Porta cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Porta", url: "https://www.hashkitly.com/porta" },
    ],
    faqs: [
      {
        q: "Key pairing?",
        a: "Pairs of letters share substitution alphabets; symmetric for enc/dec.",
      },
    ],
  },
  "/bifid": {
    title: "Bifid cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Bifid", url: "https://www.hashkitly.com/bifid" },
    ],
    faqs: [
      {
        q: "Fractionation?",
        a: "It diffuses by splitting coordinates before recombining into letters.",
      },
    ],
  },
  "/columnar": {
    title: "Columnar transposition FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Columnar", url: "https://www.hashkitly.com/columnar" },
    ],
    faqs: [
      {
        q: "Key order?",
        a: "Columns are reordered by the alphabetical order of key letters.",
      },
    ],
  },
  "/scytale": {
    title: "Scytale cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Scytale", url: "https://www.hashkitly.com/scytale" },
    ],
    faqs: [
      {
        q: "What is scytale?",
        a: "Ancient transposition using a rod (diameter as key).",
      },
    ],
  },
  "/double-transposition": {
    title: "Double transposition FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      {
        name: "Double Transposition",
        url: "https://www.hashkitly.com/double-transposition",
      },
    ],
    faqs: [
      {
        q: "Two-stage shuffle?",
        a: "Applies two transposition keys in sequence for added diffusion.",
      },
    ],
  },
  "/xor-cipher": {
    title: "XOR cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "XOR Cipher", url: "https://www.hashkitly.com/xor-cipher" },
    ],
    faqs: [
      {
        q: "Key reuse problem?",
        a: "Never reuse a keystream; XOR with repeated key leaks plaintext patterns.",
      },
    ],
  },
  "/keyword": {
    title: "Keyword substitution FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Keyword", url: "https://www.hashkitly.com/keyword" },
    ],
    faqs: [
      {
        q: "Alphabet derivation?",
        a: "Start with keyword unique letters, then append remaining alphabet.",
      },
    ],
  },
  "/gronsfeld": {
    title: "Gronsfeld cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Gronsfeld", url: "https://www.hashkitly.com/gronsfeld" },
    ],
    faqs: [
      {
        q: "Digits-only key?",
        a: "Gronsfeld uses numeric keys (0–9 shifts) similar to Vigenère.",
      },
    ],
  },
  "/html-entities": {
    title: "HTML entities encoder/decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HTML Entities", url: "https://www.hashkitly.com/html-entities" },
    ],
    faqs: [
      {
        q: "When to use entities?",
        a: "To display reserved characters like < > & in HTML content.",
      },
      {
        q: "Named vs numeric?",
        a: "Numeric references are universal; named are shorter but limited set.",
      },
    ],
  },
  "/caesar": {
    title: "Caesar cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Caesar", url: "https://www.hashkitly.com/caesar" },
    ],
    faqs: [
      {
        q: "Brute force?",
        a: "Only 25 non-trivial shifts; trivially broken—educational use only.",
      },
    ],
  },
  "/vigenere": {
    title: "Vigenère cipher FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Vigenère", url: "https://www.hashkitly.com/vigenere" },
    ],
    faqs: [
      {
        q: "Key length effects?",
        a: "Longer, random keys resist frequency analysis better.",
      },
    ],
  },
  "/sha1": {
    title: "SHA-1 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-1", url: "https://www.hashkitly.com/sha1" },
    ],
    faqs: [
      {
        q: "Is SHA-1 safe?",
        a: "No for new systems; collisions exist. Prefer SHA-256/512 or SHA-3.",
      },
    ],
  },
  "/sha224": {
    title: "SHA-224 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-224", url: "https://www.hashkitly.com/sha224" },
    ],
    faqs: [
      {
        q: "What is SHA-224?",
        a: "A truncated SHA-256 variant (224-bit output).",
      },
    ],
  },
  "/sha384": {
    title: "SHA-384 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-384", url: "https://www.hashkitly.com/sha384" },
    ],
    faqs: [
      {
        q: "When to use SHA-384?",
        a: "When stronger-than-256 bits are desired with SHA-512 family performance.",
      },
    ],
  },
  "/sha512": {
    title: "SHA-512 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-512", url: "https://www.hashkitly.com/sha512" },
    ],
    faqs: [
      { q: "Output length?", a: "512-bit (64 bytes) hex digest by default." },
    ],
  },
  "/sha3": {
    title: "SHA-3 (Keccak) FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SHA-3", url: "https://www.hashkitly.com/sha3" },
    ],
    faqs: [
      {
        q: "SHA-2 vs SHA-3?",
        a: "Different internal design (Merkle–Damgård vs sponge). Both secure for modern use.",
      },
    ],
  },
  "/ripemd160": {
    title: "RIPEMD-160 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "RIPEMD-160", url: "https://www.hashkitly.com/ripemd160" },
    ],
    faqs: [
      {
        q: "Where used?",
        a: "Legacy systems and some crypto wallets; SHA-2 family is generally preferred now.",
      },
    ],
  },
  "/crc32c": {
    title: "CRC32C checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC32C", url: "https://www.hashkitly.com/crc32c" },
    ],
    faqs: [
      {
        q: "CRC32 vs CRC32C?",
        a: "They use different polynomials; CRC32C is Castagnoli and widely accelerated (SSE4.2).",
      },
    ],
  },
  "/crc64": {
    title: "CRC64 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC64", url: "https://www.hashkitly.com/crc64" },
    ],
    faqs: [
      {
        q: "Which variant?",
        a: "CRC64 has multiple variants (ECMA, ISO); ensure both sides use same parameters.",
      },
    ],
  },
  "/crc16": {
    title: "CRC-16 family FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16", url: "https://www.hashkitly.com/crc16" },
    ],
    faqs: [
      {
        q: "Why so many variants?",
        a: "Initial values, polynomial, and reflections differ; match variant exactly.",
      },
    ],
    relatedLinks: [
      {
        name: "CRC-16/CCITT-FALSE",
        url: "https://www.hashkitly.com/crc16-ccitt",
      },
      { name: "CRC-16/MODBUS", url: "https://www.hashkitly.com/crc16-modbus" },
    ],
  },
  "/crc16-ccitt": {
    title: "CRC-16/CCITT-FALSE FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      {
        name: "CRC-16/CCITT-FALSE",
        url: "https://www.hashkitly.com/crc16-ccitt",
      },
    ],
    faqs: [
      {
        q: "Init and poly?",
        a: "Commonly 0xFFFF init, poly 0x1021; verify exact params with counterpart.",
      },
    ],
  },
  "/crc16-ibm": {
    title: "CRC-16/IBM FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16/IBM", url: "https://www.hashkitly.com/crc16-ibm" },
    ],
    faqs: [
      {
        q: "Reflections?",
        a: "Many CRC-16 forms differ in refin/refout flags; they must match for interop.",
      },
    ],
  },
  "/crc16-x25": {
    title: "CRC-16/X25 FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16/X25", url: "https://www.hashkitly.com/crc16-x25" },
    ],
    faqs: [
      {
        q: "Final XOR?",
        a: "Some variants apply final XOR; mismatches cause differing checksums.",
      },
    ],
  },
  "/crc16-kermit": {
    title: "CRC-16/KERMIT FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16/KERMIT", url: "https://www.hashkitly.com/crc16-kermit" },
    ],
    faqs: [
      {
        q: "Byte order?",
        a: "Ensure both producers and consumers use same endian and reflection settings.",
      },
    ],
  },
  "/crc16-modbus": {
    title: "CRC-16/MODBUS FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16/MODBUS", url: "https://www.hashkitly.com/crc16-modbus" },
    ],
    faqs: [
      {
        q: "Register order?",
        a: "MODBUS often transmits low byte first; confirm with device protocol docs.",
      },
    ],
  },
  "/crc16-xmodem": {
    title: "CRC-16/XMODEM FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-16/XMODEM", url: "https://www.hashkitly.com/crc16-xmodem" },
    ],
    faqs: [
      {
        q: "Typical usage?",
        a: "Legacy modem/file transfer protocols; ensure same block padding rules.",
      },
    ],
  },
  "/adler32": {
    title: "Adler-32 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Adler-32", url: "https://www.hashkitly.com/adler32" },
    ],
    faqs: [
      {
        q: "Adler vs CRC32?",
        a: "Adler-32 is simpler and faster but less robust for short messages.",
      },
    ],
  },
  "/fnv132": {
    title: "FNV-1 32-bit hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "FNV-1 32", url: "https://www.hashkitly.com/fnv132" },
    ],
    faqs: [
      {
        q: "FNV-1 vs FNV-1a?",
        a: "FNV-1 multiplies then XORs; FNV-1a XORs first then multiplies (better avalanche).",
      },
    ],
  },
  "/fnv164": {
    title: "FNV-1 64-bit hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "FNV-1 64", url: "https://www.hashkitly.com/fnv164" },
    ],
    faqs: [
      {
        q: "Offset basis?",
        a: "Ensure you use the standard offset basis and prime for 64-bit variant.",
      },
    ],
  },
  "/fnv1a32": {
    title: "FNV-1a 32-bit hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "FNV-1a 32", url: "https://www.hashkitly.com/fnv1a32" },
    ],
    faqs: [
      {
        q: "Use cases?",
        a: "Hash tables, checksums in non-adversarial contexts, fast fingerprints.",
      },
    ],
  },
  "/fnv1a64": {
    title: "FNV-1a 64-bit hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "FNV-1a 64", url: "https://www.hashkitly.com/fnv1a64" },
    ],
    faqs: [
      {
        q: "Collisions?",
        a: "Low collision rate for typical usage but not cryptographically secure.",
      },
    ],
  },
  "/jenkins": {
    title: "Jenkins one-at-a-time hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Jenkins OAAT", url: "https://www.hashkitly.com/jenkins" },
    ],
    faqs: [
      {
        q: "What is OAAT?",
        a: "A simple non-cryptographic hash mixing bytes one at a time.",
      },
    ],
  },
  "/djb2": {
    title: "DJB2 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "DJB2", url: "https://www.hashkitly.com/djb2" },
    ],
    faqs: [
      {
        q: "Origin?",
        a: "Popularized by Dan Bernstein; simple and effective for small keys.",
      },
    ],
  },
  "/sdbm": {
    title: "SDBM hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SDBM", url: "https://www.hashkitly.com/sdbm" },
    ],
    faqs: [
      {
        q: "Usage?",
        a: "Historically used in sdbm/ndbm-like databases for string keys.",
      },
    ],
  },
  "/elf": {
    title: "ELF hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ELF", url: "https://www.hashkitly.com/elf" },
    ],
    faqs: [
      {
        q: "Relation to PJW?",
        a: "ELF and PJW are related hash functions with similar splitting/mixing.",
      },
    ],
  },
  "/bkdr": {
    title: "BKDR hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "BKDR", url: "https://www.hashkitly.com/bkdr" },
    ],
    faqs: [
      {
        q: "What prime?",
        a: "Typical BKDR uses 131, 1313, 13131... choose consistent prime.",
      },
    ],
  },
  "/loselose": {
    title: "Lose Lose hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Lose Lose", url: "https://www.hashkitly.com/loselose" },
    ],
    faqs: [
      {
        q: "Why educational only?",
        a: "Very poor distribution and high collision rate—avoid in production.",
      },
    ],
  },
  "/sum8": {
    title: "Sum-8 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Sum-8", url: "https://www.hashkitly.com/sum8" },
    ],
    faqs: [
      {
        q: "Use cases?",
        a: "Tiny embedded integrity checks where performance matters more than robustness.",
      },
    ],
  },
  "/xor8": {
    title: "XOR-8 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "XOR-8", url: "https://www.hashkitly.com/xor8" },
    ],
    faqs: [
      {
        q: "Pros/cons?",
        a: "Extremely fast but detects only certain error patterns; weak against permutations.",
      },
    ],
  },
  "/lrc8": {
    title: "LRC-8 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "LRC-8", url: "https://www.hashkitly.com/lrc8" },
    ],
    faqs: [
      {
        q: "What is LRC?",
        a: "Longitudinal Redundancy Check across bytes; simple parity-like checksum.",
      },
    ],
  },
  "/rshash": {
    title: "RS Hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "RS Hash", url: "https://www.hashkitly.com/rshash" },
    ],
    faqs: [
      {
        q: "Parameterization?",
        a: "Uses sequence of multipliers; parameters affect distribution.",
      },
    ],
  },
  "/aphash": {
    title: "AP Hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "AP Hash", url: "https://www.hashkitly.com/aphash" },
    ],
    faqs: [
      {
        q: "Alternating ops?",
        a: "Alternates operations per index for mixing; not cryptographic.",
      },
    ],
  },
  "/dekhash": {
    title: "DEK Hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "DEK Hash", url: "https://www.hashkitly.com/dekhash" },
    ],
    faqs: [
      {
        q: "Who proposed it?",
        a: "Attributed to Donald E. Knuth; simple shift and xor mixing.",
      },
    ],
  },
  "/pjwhash": {
    title: "PJW Hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "PJW Hash", url: "https://www.hashkitly.com/pjwhash" },
    ],
    faqs: [
      {
        q: "Relation to ELF?",
        a: "ELF hash is derived from PJW with minor differences.",
      },
    ],
  },
  "/jshash": {
    title: "JS Hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "JS Hash", url: "https://www.hashkitly.com/jshash" },
    ],
    faqs: [
      {
        q: "Where used?",
        a: "Educational examples and simple hash table demos; not for security.",
      },
    ],
  },
  "/xxhash32": {
    title: "xxHash32 FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "xxHash32", url: "https://www.hashkitly.com/xxhash32" },
    ],
    faqs: [
      {
        q: "Why xxHash?",
        a: "Extremely fast non-cryptographic hash for checksumming and hashing large data.",
      },
    ],
  },
  "/crc8": {
    title: "CRC-8 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-8", url: "https://www.hashkitly.com/crc8" },
    ],
    faqs: [
      {
        q: "Polynomial choice?",
        a: "Multiple CRC-8 polynomials exist (e.g., 0x07); match device spec.",
      },
    ],
  },
  "/crc24": {
    title: "CRC-24 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-24", url: "https://www.hashkitly.com/crc24" },
    ],
    faqs: [
      {
        q: "Where used?",
        a: "PGP uses a CRC-24 variant; verify parameters for compatibility.",
      },
    ],
  },
  "/crc7": {
    title: "CRC-7 checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-7", url: "https://www.hashkitly.com/crc7" },
    ],
    faqs: [
      {
        q: "Typical use?",
        a: "SD card commands often use CRC-7; ensure bit-order is correct.",
      },
    ],
  },
  "/superfasthash": {
    title: "SuperFastHash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "SuperFastHash", url: "https://www.hashkitly.com/superfasthash" },
    ],
    faqs: [
      {
        q: "Use cases?",
        a: "Fast general-purpose hashing for hash tables; not cryptographically secure.",
      },
    ],
  },
  "/crc32-bzip2": {
    title: "CRC-32/BZIP2 variant FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-32/BZIP2", url: "https://www.hashkitly.com/crc32-bzip2" },
    ],
    faqs: [
      {
        q: "Variant differences?",
        a: "Different init/reflection/xor settings produce variant-specific results.",
      },
    ],
  },
  "/crc32-mpeg2": {
    title: "CRC-32/MPEG-2 variant FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "CRC-32/MPEG-2", url: "https://www.hashkitly.com/crc32-mpeg2" },
    ],
    faqs: [
      {
        q: "Bit-reflection?",
        a: "MPEG-2 variant parameters differ from standard CRC32; ensure matching config.",
      },
    ],
  },
  "/murmur3": {
    title: "Murmur3 hash FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Murmur3 (32)", url: "https://www.hashkitly.com/murmur3" },
    ],
    faqs: [
      {
        q: "Why Murmur?",
        a: "Good distribution and speed for hash tables; not cryptographic.",
      },
    ],
  },
  "/random": {
    title: "Random string/bytes generator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Random", url: "https://www.hashkitly.com/random" },
    ],
    faqs: [
      {
        q: "Secure vs pseudo?",
        a: "Use cryptographically secure RNGs for keys/tokens; avoid Math.random() for secrets.",
      },
    ],
  },
  "/uuencode": {
    title: "UUEncode decoder FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "UUEncode", url: "https://www.hashkitly.com/uuencode" },
    ],
    faqs: [
      {
        q: "Legacy usage?",
        a: "Historic encoding for email/file transfer; replaced by MIME standards.",
      },
    ],
  },
  "/base58check": {
    title: "Base58Check FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Base58Check", url: "https://www.hashkitly.com/base58check" },
    ],
    faqs: [
      {
        q: "Checksum details?",
        a: "Uses double SHA-256 to generate 4-byte checksum for error detection.",
      },
    ],
    relatedLinks: [
      { name: "Base58", url: "https://www.hashkitly.com/base58" },
      { name: "SHA-256", url: "https://www.hashkitly.com/sha256" },
    ],
  },
  "/q-encoding": {
    title: "Q-encoding (RFC 2047) FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Q-encoding", url: "https://www.hashkitly.com/q-encoding" },
    ],
    faqs: [
      {
        q: "Where used?",
        a: "Email headers to represent non-ASCII text safely (=?charset?Q?...?=).",
      },
    ],
  },
  "/isbn13": {
    title: "ISBN-13 validator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ISBN-13", url: "https://www.hashkitly.com/isbn13" },
    ],
    faqs: [
      {
        q: "Checksum rule?",
        a: "Alternating weights 1 and 3 modulo 10 determine the check digit.",
      },
    ],
  },
  "/isbn10": {
    title: "ISBN-10 validator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ISBN-10", url: "https://www.hashkitly.com/isbn10" },
    ],
    faqs: [
      {
        q: "Check digit X?",
        a: "X represents value 10 for the final checksum calculation.",
      },
    ],
  },
  "/issn": {
    title: "ISSN validator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "ISSN", url: "https://www.hashkitly.com/issn" },
    ],
    faqs: [
      {
        q: "Format?",
        a: "Eight digits with optional hyphen; last digit may be X (10).",
      },
    ],
  },
  "/soundex": {
    title: "Soundex phonetic code FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Soundex", url: "https://www.hashkitly.com/soundex" },
    ],
    faqs: [
      {
        q: "Use cases?",
        a: "Name matching and fuzzy search in English language datasets.",
      },
    ],
  },
  "/iban": {
    title: "IBAN validator FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "IBAN", url: "https://www.hashkitly.com/iban" },
    ],
    faqs: [
      {
        q: "Checksum method?",
        a: "Move first 4 chars to end, map A=10..Z=35, mod 97 must equal 1.",
      },
    ],
  },
  "/ean13": {
    title: "EAN-13 barcode checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "EAN-13", url: "https://www.hashkitly.com/ean13" },
    ],
    faqs: [
      {
        q: "Check digit rule?",
        a: "Sum of digits with weights (1,3) modulo 10; final digit makes total a multiple of 10.",
      },
    ],
  },
  "/ean8": {
    title: "EAN-8 barcode checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "EAN-8", url: "https://www.hashkitly.com/ean8" },
    ],
    faqs: [
      {
        q: "Use cases?",
        a: "Smaller packages where EAN-13 won't fit; same weight rules with fewer digits.",
      },
    ],
  },
  "/upca": {
    title: "UPC-A barcode checksum FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "UPC-A", url: "https://www.hashkitly.com/upca" },
    ],
    faqs: [
      {
        q: "Check digit?",
        a: "Weighted sum by position (3x for odd positions) rounded up to nearest 10.",
      },
    ],
  },
  "/nato": {
    title: "NATO phonetic alphabet FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "NATO Phonetic", url: "https://www.hashkitly.com/nato" },
    ],
    faqs: [
      {
        q: "Purpose?",
        a: "Avoid confusion in radio/phone communication—spell with standardized words.",
      },
    ],
  },
  "/leetspeak": {
    title: "Leetspeak converter FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "Leetspeak", url: "https://www.hashkitly.com/leetspeak" },
    ],
    faqs: [
      {
        q: "What is 1337?",
        a: "A playful transformation replacing letters with similar-looking symbols/numbers.",
      },
    ],
  },
  "/rsa-oaep": {
    title: "RSA-OAEP encrypt/decrypt FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "RSA-OAEP", url: "https://www.hashkitly.com/rsa-oaep" },
    ],
    faqs: [
      {
        q: "Key size?",
        a: "Use >= 2048-bit keys; prefer hybrid with AES-GCM for large data.",
      },
      {
        q: "Padding?",
        a: "OAEP with SHA-256 recommended over PKCS#1 v1.5 for new designs.",
      },
    ],
  },
  "/aes-gcm": {
    title: "AES-GCM encryption FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "AES-GCM", url: "https://www.hashkitly.com/aes-gcm" },
    ],
    faqs: [
      {
        q: "Nonce size?",
        a: "12 bytes recommended; never reuse nonce with same key.",
      },
      {
        q: "AAD?",
        a: "Additional Authenticated Data is bound to ciphertext but not encrypted.",
      },
    ],
  },
  "/tripledes": {
    title: "3DES encryption FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "3DES", url: "https://www.hashkitly.com/tripledes" },
    ],
    faqs: [
      {
        q: "Status?",
        a: "Deprecated for new systems; AES-GCM preferred for authenticated encryption.",
      },
    ],
  },
  "/pbkdf2": {
    title: "PBKDF2 key derivation FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "PBKDF2", url: "https://www.hashkitly.com/pbkdf2" },
    ],
    faqs: [
      {
        q: "Iterations?",
        a: "Choose cost based on device; thousands to hundreds of thousands today.",
      },
      {
        q: "Salt?",
        a: "Always use a unique, random salt per password to thwart rainbow tables.",
      },
    ],
  },
  "/hkdf": {
    title: "HKDF key derivation FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HKDF", url: "https://www.hashkitly.com/hkdf" },
    ],
    faqs: [
      {
        q: "Extract and expand?",
        a: "HKDF has two phases; extract with salt/IKM, then expand with info/context.",
      },
    ],
  },
  "/hmac-md5": {
    title: "HMAC-MD5 signing FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HMAC-MD5", url: "https://www.hashkitly.com/hmac-md5" },
    ],
    faqs: [
      {
        q: "Is HMAC-MD5 safe?",
        a: "HMAC construction mitigates MD5 collision issues for many cases, but SHA-256 HMAC is recommended.",
      },
    ],
  },
  "/hmac-sha1": {
    title: "HMAC-SHA1 signing FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HMAC-SHA1", url: "https://www.hashkitly.com/hmac-sha1" },
    ],
    faqs: [
      {
        q: "Should I upgrade?",
        a: "Prefer HMAC-SHA256+ for new systems; SHA1 is considered weak for collisions.",
      },
    ],
  },
  "/hmac-sha512": {
    title: "HMAC-SHA512 signing FAQs",
    breadcrumbs: [
      { name: "Home", url: "https://www.hashkitly.com/" },
      { name: "HMAC-SHA512", url: "https://www.hashkitly.com/hmac-sha512" },
    ],
    faqs: [
      {
        q: "When to use?",
        a: "When you need large security margins and are fine with bigger outputs/signatures.",
      },
    ],
  },
};
