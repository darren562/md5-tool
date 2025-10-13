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
        </div>
      </div>
    </nav>
  );
}
