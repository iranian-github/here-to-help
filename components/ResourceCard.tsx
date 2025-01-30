import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description?: string;
  phone?: string;
  website?: string;
  other?: { url: string; label: string }[];
}

export default function ResourceCard({
  title,
  description,
  phone,
  website,
  other,
}: ResourceCardProps) {
  return (
    <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gray-100 h-full flex flex-col justify-center">
      <div
        className={`${
          !description ? "sm:flex sm:justify-between sm:items-center" : ""
        }`}
      >
        <h3
          className={`text-base sm:text-lg font-bold ${
            description ? "mb-3 sm:mb-4" : ""
          }`}
        >
          {title}
        </h3>
        {!description && (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 mt-auto">
            {phone && (
              <Link
                href={`tel:${phone}`}
                className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto"
              >
                تماس
              </Link>
            )}
            {website && (
              <Link
                href={website}
                target="_blank"
                className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto"
              >
                بیشتر بدانید
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        )}
      </div>
      {description && (
        <>
          <p className="mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 mt-auto">
            {phone && (
              <Link
                href={`tel:${phone}`}
                className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto hover:text-white"
              >
                تماس
              </Link>
            )}
            {website && (
              <Link
                href={website}
                className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto hover:text-white"
              >
                بیشتر بدانید
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  className="bg-blue-500 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors text-center w-full sm:w-auto hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
