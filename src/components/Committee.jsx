import React from "react";
import image1 from '../assets/image.png';
const committeeMembers = [
  {
    name: "Prof. Rangan Banerjee",
    role: "Chief Patron",
    designation: "Director, IIT Delhi, India",
    image: image1
  },
  {
    name: "Prof. A. B. Sharma",
    role: "Patron",
    designation: "Director, NIT Jamshedpur, India",
    image: image1
  },
  {
    name: "Prof. C. D. Verma",
    role: "Patron",
    designation: "Dean Academics, NIT Jamshedpur, India",
    image: image1
  },
  {
    name: "Prof. E. F. Khan",
    role: "General Chair",
    designation: "Professor, NIT Trichy, India",
    image: image1
  },
  {
    name: "Dr. G. H. Mehta",
    role: "General Chair",
    designation: "Associate Professor, IIT Roorkee, India",
    image: image1
  },
  {
    name: "Dr. I. J. Singh",
    role: "Organizing Secretary",
    designation: "Assistant Professor, NIT Jamshedpur, India",
    image: image1
  }
];

const groupByRole = (members) => {
  const grouped = {};
  members.forEach((member) => {
    if (!grouped[member.role]) grouped[member.role] = [];
    grouped[member.role].push(member);
  });
  return grouped;
};

export default function CommitteePage() {
  const groupedMembers = groupByRole(committeeMembers);

  return (
    <div className="bg-gray-50 py-15 px-4 sm:px-6 lg:px-8 min-h-screen mt-10">
      <h2 className="text-4xl !font-bold !text-blue-900 text-center">COMMITTEE</h2>
      <div className="space-y-16">
        {Object.entries(groupedMembers).map(([role, members], idx) => (
          <div key={role}>
            <div className={`flex flex-wrap justify-center gap-8`}>
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md max-w-xs text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto rounded-full w-40 h-40 object-cover"
                  />
                  <p className="mt-4 font-medium text-lg">{member.name}</p>
                  <p className="text-gray-500 text-sm">{member.designation}</p>
                  <p className="font-semibold text-gray-700 mt-2">{member.role}</p>
                </div>
              ))}
            </div>
            {idx < Object.entries(groupedMembers).length - 1 && (
              <hr className="my-12 border-t-2 border-gray-300 w-2/3 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
