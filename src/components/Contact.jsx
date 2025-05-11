import React from 'react';

const contactPersons = [
  {
    name: "Dr. Pranab Kumar Kundu",
    phone: "+91 94338 87700",
    url:"https://nitjsr.ac.in/backend/uploads/Faculty/ME132/profile/029a5ca6-46ba-43e9-ac33-98d8a40f8603.png",
  },
  {
    name: "Dr. Saikat Ranjan Maity",
    phone: "+91 96788 21875",
    url:"https://nitjsr.ac.in/backend/uploads/Faculty/ME140/profile/7a07882f-0dad-41ff-bdcf-ecfa3c34c3ea.jpg",
  },
  {
    name: "Dr. Abhijit Dey",
    phone: "+91 88997 78875",
    url:"https://nitjsr.ac.in/backend/uploads/Faculty/ME145/profile/f5c7cae1-bc61-4057-b82b-dd6b471fbf8b.jpg",
  },
  {
    name: "Dr. Vishesh Ranjan Kar",
    phone: "+91 94395 69975",
    url:"https://nitjsr.ac.in/backend/uploads/Faculty/ME122/profile/99ac05f2-1a3b-42f8-95ee-9ae7028f255c.jpg",
  }
];

const Contact = () => {
  return (
    <div className="py-16 px-6 mt-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center !text-blue-900 mb-6 uppercase">Contact Us</h2>
      <div className="w-16 h-1 bg-green-600 mx-auto mb-10" />

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {contactPersons.map((person, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={person.url ? person.url : "/assets/committee/placeholder.jpg"}
              alt={person.name}
              className="w-28 h-38 rounded-full mt-3 object-cover scale-125 mb-4 border border-gray-300 shadow-sm"
              onError={(e) => { e.target.onerror = null; e.target.src = "/assets/committee/placeholder.jpg"; }}
            />
            <h3 className="text-xl font-semibold !text-blue-800 mb-2">{person.name}</h3>
            <p className="text-gray-700">{person.phone}</p>
          </div>
        ))}
      </div>

      {/* Email & Address */}
      <div className="max-w-3xl mx-auto mt-14 text-center text-gray-700">
        <h3 className="!text-3xl font-semibold mb-3 !text-blue-800">Email & Venue</h3>
        <p className="mb-1 text-xl">
          <strong>Email:</strong> <a href="mailto:icirme@nitjsr.ac.in" className="text-blue-600 underline">icirme@nitjsr.ac.in</a>
        </p>
        <p className='text-xl'>
          <strong>Venue:</strong><br />
          National Institute of Technology Jamshedpur,<br />
          Adityapur - 831014, Jharkhand, India
        </p>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          title="NIT Jamshedpur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.686243876933!2d86.14154107533686!3d22.77702232544686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%20Jamshedpur%20(NIT%20Jamshedpur)!5e0!3m2!1sen!2sin!4v1744148686794!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
