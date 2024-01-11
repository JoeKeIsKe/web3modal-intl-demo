"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"));

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <w3m-button />
      <h1>{t("title")}</h1>
    </main>
  );
}
