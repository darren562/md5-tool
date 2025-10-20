"use client";

import { usePathname } from "next/navigation";
import LongTailSEO from "./LongTailSEO";
import { routeSeoConfig } from "../seo/routeSeoConfig";

export default function RouteSEO() {
  const pathname = usePathname();
  // Avoid injecting on the homepage which already contains long-tail content
  if (!pathname || pathname === "/") return null;

  const cfg = routeSeoConfig[pathname];
  if (!cfg) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <LongTailSEO
        title={cfg.title}
        breadcrumbs={cfg.breadcrumbs}
        faqs={cfg.faqs}
        relatedLinks={cfg.relatedLinks}
      />
    </div>
  );
}
