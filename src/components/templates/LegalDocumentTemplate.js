import React from "react";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";
export default function LegalDocumentTemplate({ content }) {
  if (!content) {
    return (
      <div className="p-10 text-center text-red-500">
        Legal content data not available.
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1400px] mx-auto pt-10  px-6 text-gray-800">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center mb-6">
          <Link href="/">
            <Icon name="ArrowLeft" />
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pb-10 px-6 text-gray-800">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-orange-500">
          {content.title}
        </h1>
        <p className="text-sm text-gray-500 mb-10 border-b pb-4">
          {content.date}
        </p>

        <div className="space-y-12">
          {content.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-[20px] md:text-2xl font-bold text-gray-700">
                {section.heading}
              </h2>

              {section.body && (
                <p className="leading-relaxed text-gray-700">{section.body}</p>
              )}

              {section.list && (
                <ul className="list-disc ml-8 space-y-3 leading-relaxed text-gray-700">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-16 text-sm text-gray-500 border-t pt-4">
          For any inquiries regarding these policies, please contact us through
          the official channels provided on our website.
        </p>
      </div>
    </>
  );
}
