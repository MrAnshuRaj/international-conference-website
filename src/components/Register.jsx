import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-5xl !font-bold !text-blue-900 mb-2 uppercase">Register</h2>
      <p className="text-lg !text-orange-500 mb-2">The registration system is open!</p>
      <div className="w-20 h-1 mx-auto !bg-green-600 mb-6 rounded-sm"></div>
      <p className="!text-gray-700 mb-10 text-sm md:text-base">
        At least one author of each paper must register.
      </p>

      <div className="overflow-x-auto max-w-3xl mx-auto mb-6">
        <table className="w-full border border-gray-300 text-left">
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
              <td className="py-3 px-4">Rs.8000</td>
              <td className="py-3 px-4">US $150</td>
            </tr>
            <tr className="bg-gray-300 border-t border-gray-300">
              <td className="py-3 px-4">Academic</td>
              <td className="py-3 px-4">Rs.12000</td>
              <td className="py-3 px-4">US $200.00</td>
            </tr>
            <tr className="border-t bg-gray-300 border-gray-300">
              <td className="py-3 px-4">Industry</td>
              <td className="py-3 px-4">Rs.15000</td>
              <td className="py-3 px-4">US $250.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-10 text-sm md:text-base">
        There is no difference in the registration fee between presenting and non-presenting participants.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="#"
          className="bg-blue-800  text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-900 border-2 border-blue-300 !no-underline"
        >
          Click here to register
        </a>
        <a
          href="#"
          className="bg-blue-800 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-900 !no-underline"
        >
          Schedule of ICTC-2024
        </a>
      </div>
    </div>
  );
};

export default Register;
