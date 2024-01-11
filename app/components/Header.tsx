"use client";

import { useTranslations } from "next-intl";
import { useRouter, Link, locales } from "@/navigation";
export default function Header() {
  const t = useTranslations("Index");
  const router = useRouter();
  const handleRouter = (locale: string) => {
    router.replace("/", { locale });
  };

  return (
    <div>
      <Link href="/" locale="en">
        en
      </Link>
      <Link href="/" locale="de">
        de
      </Link>
    </div>
  );
}
