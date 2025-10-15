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
                              href="/base58"
                              className={isActive("/base58")}
                              onClick={closeOnClick}
                            >
                              Base58
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
                          </>
                        )}
                        {cat.key === "hmac" && (
                          <>
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
