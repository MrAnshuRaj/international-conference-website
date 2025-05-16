import React from 'react';

const dates = [
  { label: 'Paper Submission', range: 'Apr 15 - Jun 30, 2025' },
  { label: 'Acceptance Notification', range: 'Sep 30, 2025' },
  { label: 'Online Registration', range: 'Oct 7, 2025' },
  { label: 'Conference Dates', range: 'Dec 15-17, 2025' },
];

const ImportantDates = () => {
  return (
    <div className="bg-gray-200 py-5 px-6">
      <h2 className="text-4xl !font-bold text-center !text-blue-900 uppercase !mb-10">
        Important Dates
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {dates.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-l-4 border-blue-700 shadow-sm rounded-lg py-4 px-5 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold !text-blue-900">{item.label}</h3>
            <p className="text-gray-700 font-semibold text-lg mt-1">{item.range}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
