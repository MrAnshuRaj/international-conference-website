import React from "react";
import { FaCheck } from "react-icons/fa";

const SubmissionPage = () => {

  const dates = [
    {
      title: "Deadline for abstract submission",
      newDate: "30th September 2025",
    }
  ];

  return (
      <div className="bg-white flex flex-col items-center text-center px-4 py-10 w-full">
      <h2 className="text-4xl font-bold text-blue-900 uppercase">Submission</h2>
      <p className="text-red-600 text-lg mt-2">Submit an abstract</p>
      <div className="h-1 w-16 bg-green-600 my-3 rounded"></div>

      {/* Important Dates Cards */}
      <div className="mt-10 grid gap-6 max-w-xl w-full">
        {dates.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <p className="text-gray-600 font-medium">{item.title}</p>
            {item.oldDate && (
              <p className="text-gray-400 line-through text-sm">{item.oldDate}</p>
            )}
            <p className="font-semibold text-black text-lg">{item.newDate}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default SubmissionPage;
