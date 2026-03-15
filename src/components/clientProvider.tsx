"use client";

import Script from "next/script";

export default function ClientProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
