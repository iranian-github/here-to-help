import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto text-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-3">
        متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد
      </h1>
      <Link href="/">بازگشت به صفحه اصلی</Link>
    </main>
  );
}
