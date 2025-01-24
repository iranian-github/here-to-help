import Header from "@/components/Header";
import { testCenters } from "@/data/freeHIVTestCenters";
import { toFarsiNumber } from "@/utils/farsiNumber";
import Link from "next/link";

const FreeHIVTestCenters = () => {
  return (
    <>
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-12 text-center">
          لیست مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-right">شهر</th>
                <th className="border border-gray-300 p-3 text-right">آدرس</th>
                <th className="border border-gray-300 p-3 text-right">
                  شماره تماس
                </th>
              </tr>
            </thead>
            <tbody>
              {testCenters.map((center, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{center.city}</td>
                  <td className="border border-gray-300 p-3">
                    {center.address}
                  </td>
                  <td className="border border-gray-300 p-3 font-mono">
                    <Link href={`tel:${center.phone}`}>
                      {toFarsiNumber(parseInt(center.phone))}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-right">
          منبع:{" "}
          <a
            href="https://doctoreto.com/blog/free-aids-test-centers/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            دکترتو
          </a>
        </p>
      </main>
    </>
  );
};

export default FreeHIVTestCenters;
