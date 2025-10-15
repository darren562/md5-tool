"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (pathname === href ? "active" : "");

  return (
    <nav className="topnav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          Hashkitly
        </Link>
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link href="/" className={isActive("/")}>
            MD5
          </Link>
          <Link href="/base64" className={isActive("/base64")}>
            Base64
          </Link>
          <Link href="/sha256" className={isActive("/sha256")}>
            SHA256
          </Link>
          <Link href="/sha3" className={isActive("/sha3")}>
            SHA-3
          </Link>
          <Link href="/sha224" className={isActive("/sha224")}>
            SHA-224
          </Link>
          <Link href="/sha1" className={isActive("/sha1")}>
            SHA-1
          </Link>
          <Link href="/sha384" className={isActive("/sha384")}>
            SHA-384
          </Link>
          <Link href="/sha512" className={isActive("/sha512")}>
            SHA-512
          </Link>
          <Link href="/ripemd160" className={isActive("/ripemd160")}>
            RIPEMD-160
          </Link>
          <Link href="/aes" className={isActive("/aes")}>
            AES
          </Link>
          <Link href="/aes-gcm" className={isActive("/aes-gcm")}>
            AES-GCM
          </Link>
          <Link href="/tripledes" className={isActive("/tripledes")}>
            3DES
          </Link>
          <Link href="/hmac-sha256" className={isActive("/hmac-sha256")}>
            HMAC-SHA256
          </Link>
          <Link href="/hmac-sha512" className={isActive("/hmac-sha512")}>
            HMAC-SHA512
          </Link>
          <Link href="/hmac-sha1" className={isActive("/hmac-sha1")}>
            HMAC-SHA1
          </Link>
          <Link href="/url" className={isActive("/url")}>
            URL
          </Link>
          <Link href="/uuid" className={isActive("/uuid")}>
            UUID
          </Link>
          <Link href="/pbkdf2" className={isActive("/pbkdf2")}>
            PBKDF2
          </Link>
          <Link href="/hkdf" className={isActive("/hkdf")}>
            HKDF
          </Link>
          <Link href="/crc32" className={isActive("/crc32")}>
            CRC32
          </Link>
          <Link href="/hex" className={isActive("/hex")}>
            Hex
          </Link>
          <Link href="/base32" className={isActive("/base32")}>
            Base32
          </Link>
          <Link href="/base58" className={isActive("/base58")}>
            Base58
          </Link>
          <Link href="/random" className={isActive("/random")}>
            Random
          </Link>
          <Link href="/jwt" className={isActive("/jwt")}>
            JWT
          </Link>
          <Link href="/rsa-oaep" className={isActive("/rsa-oaep")}>
            RSA-OAEP
          </Link>
          <Link href="/privacy" className={isActive("/privacy")}>
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
}
