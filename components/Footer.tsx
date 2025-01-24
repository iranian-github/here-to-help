"use client";

import { toFarsiNumber } from "@/utils/farsiNumber";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(toFarsiNumber(currentYear));
  }, []);

  return (
    <footer className="mt-auto pt-8 sm:pt-12 p-4 sm:p-5 text-brand-footer text-xs font-normal text-center text-gray-500">
      <p className="text-right pb-6 leading-relaxed text-xs sm:text-sm">
        این وب‌سایت تنها برای اطلاع‌رسانی است و فقط فهرستی از منابعی که
        می‌توانند برای این مسائل کمک ارائه دهند را فراهم می‌کند و جایگزینی برای
        مشاوره یا درمان حرفه‌ای نیست. ما هیچ‌یک از سازمان‌ها را تأیید یا رد
        نکرده و هیچ‌یک از منابع ذکر شده در این وب‌سایت را اداره نمی‌کنیم.
      </p>
      <p className="border-b border-[#d2d2d7] pb-3 text-right leading-relaxed text-xs sm:text-sm">
        این یک{" "}
        <Link href="https://github.com/iranian-github/here-to-help">
          پروژه‌ی متن باز
        </Link>{" "}
        است. اگر مایل به مشارکت هستید، از{" "}
        <Link href="https://github.com/iranian-github/here-to-help/issues/new">
          اینجا
        </Link>{" "}
        می‌توانید کمک کنید.
      </p>

      <p className="pt-6 mb-2 leading-relaxed text-xs sm:text-sm">
        کپی‌رایت © <span>{year}</span>.
        <span> اینجا برای کمک هستیم. تمامی حقوق محفوظ است.</span>
      </p>
    </footer>
  );
}
