"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
// import NonSSR from "@/NonSSR";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  const t = useTranslations("Index");
  const router = useRouter();
  const handleRouter = (locale: string) => {
    // router.replace("/", { locale });
    router.push("/", { locale });
  };

  // Enable static rendering
  //   unstable_setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div onClick={() => handleRouter("en")}>en</div>
        <div onClick={() => handleRouter("de")}>de</div>
      </div>
      <w3m-button />

      <h1>{t("title")}</h1>
    </main>
  );
}
