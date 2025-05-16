import React from "react";
import { FaCheck } from "react-icons/fa";

const SubmissionPage = () => {
  const tracks = [
    "High Temperature Tribo-corrosion",
    "Lubricants and tribo-corrosion interactions",
    "Industrial Tribo-corrosion and Detection Methods",
    "Models and mechanistic maps of Tribo-corrosion",
    "Tribology in Bio-Medical Applications",
    "Case studies",
    "Corrosion Protection for Electric Vehicles",
    "Many more related to the theme"
  ];

  const dates = [
    {
      title: "Deadline for abstract submission",
      oldDate: "31st July",
      newDate: "26th August 2024",
    },
    {
      title: "Acceptance notification",
      oldDate: "20th Aug.",
      newDate: "09th September 2024",
    },
    {
      title: "Registration Start",
      oldDate: "01st Sept. 2024",
      newDate: "16th September 2024",
    },
    {
      title: "Registration End",
      newDate: "30th November 2024",
    },
  ];

  return (
    <div className="bg-white text-center px-4 py-8">
      <h2 className="text-4xl font-bold text-blue-900 uppercase">Submission</h2>
      <p className="text-red-600 text-lg mt-2">Submit an abstract</p>
      <div className="h-1 w-16 bg-green-600 mx-auto my-3 rounded"></div>

      <p className="text-lg font-semibold mt-4 max-w-3xl mx-auto">
        The deadline for submission of the Abstracts has been postponed to <span className="text-red-600 font-bold">August 26th</span>!!! Please{" "}
        <span className="text-red-600 font-bold">find here the template for your Abstract</span>.
      </p>

      {/* Important Dates Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
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

      {/* Tracks List */}
      <div className="bg-blue-100 mt-12 px-6 py-6 rounded-xl max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Submit your abstract for the tracks:
        </h3>
        <ul className="text-left text-gray-800 space-y-3">
          {tracks.map((track, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" />
              <span>{track}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmissionPage;
