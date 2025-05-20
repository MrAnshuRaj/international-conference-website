import React from "react";
const Register = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl !font-bold !text-blue-900 mb-2 uppercase">Register</h2>
      <p className="text-lg !text-orange-500 mb-2">The registration system is open!</p>
      <div className="w-20 h-1 mx-auto !bg-green-600 mb-6 rounded-sm"></div>

      <div className="overflow-x-auto max-w-3xl mx-auto mb-6">
        <table className="w-full border border-white text-left">
          <thead>
            <tr className="bg-gray-400 !text-gray-800">
              <th className="py-3 px-4 font-semibold">Category</th>
              <th className="py-3 px-4 font-semibold">India</th>
              <th className="py-3 px-4 font-semibold">Overseas</th>
            </tr>
          </thead>
          <tbody className="!text-gray-700 text-sm md:text-base">
            <tr className="border-t bg-gray-300 border-gray-400">
              <td className="py-3 px-4">Student</td>
              <td className="py-3 px-4">Rs.5,000</td>
              <td className="py-3 px-4">US $250</td>
            </tr>
            <tr className="bg-gray-300 border-t border-gray-300">
              <td className="py-3 px-4">Faculty</td>
              <td className="py-3 px-4">Rs.7,000</td>
              <td className="py-3 px-4">US $400</td>
            </tr>
            <tr className="border-t bg-gray-300 border-gray-300">
              <td className="py-3 px-4">Industry</td>
              <td className="py-3 px-4">Rs.10,000</td>
              <td className="py-3 px-4">US $500</td>
            </tr>
            <tr className="border-t bg-gray-300 border-gray-300">
              <td className="py-3 px-4">Participation Only (Outside NIT JSR Delegates)</td>
              <td className="py-3 px-4">Rs.4,000</td>
              <td className="py-3 px-4">US $200</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          target="_blank"
          href="https://easychair.org/conferences?conf=icirme2025"
          className="bg-blue-800  text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-900 border-2 border-blue-300 !no-underline"
        >
          Click here to register
        </a>
        <a
          href="/ICIRME Brochure.pdf"
          download
          className="bg-blue-800 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-900 !no-underline"
        >
          Download Brochure
        </a>
      </div>
    </div>
  );
};

export default Register;
