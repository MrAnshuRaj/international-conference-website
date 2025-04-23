import React from "react";
import nitcampus from "../assets/nitcampus.jpg"
const Venue = () => {
  return (
    <div className="bg-gray-100 py-15 px-6 text-center mt-10">
      {/* Section Title */}
      <h2 className="text-5xl !font-bold !text-blue-900 mb-6 uppercase">Venue</h2>

      {/* Venue Description */}
        <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-10 leading-relaxed">
    The <strong>International Conference on Innovations & Research in Mechanical Engineering (ICIRME 2025)</strong> will be held at the prestigious
    <strong> National Institute of Technology Jamshedpur (NIT Jamshedpur)</strong>, located in the industrial hub of Jamshedpur, Jharkhand. Established in 1960,
    NIT Jamshedpur stands as a beacon of technical excellence, known for its strong academic and research environment. The campus is nestled amidst
    lush greenery and offers a tranquil yet modern setting ideal for meaningful academic interactions and collaborative research.
    <br /><br />

    <strong>Travel to NIT Jamshedpur is convenient via multiple modes.</strong> The city is well connected by rail to major cities like
    Kolkata, Delhi, and Mumbai through the <strong>Tatanagar Junction</strong>, which is just 10 km from the campus. The nearest airport is
    <strong> Birsa Munda Airport</strong> in Ranchi (around 130 km), with regular road and train connectivity to Jamshedpur.
    <br /><br />

    For those visiting in person, <strong>Jamshedpur offers a unique mix of industrial heritage and natural beauty</strong>.
    Popular nearby attractions include the scenic <strong>Jubilee Park</strong>, <strong>Tata Steel Zoological Park</strong>, and <strong>Dimna Lake</strong>,
    perfect for a relaxing break after academic sessions. The city's rich culture and welcoming atmosphere make it a memorable destination for
    delegates from around the globe.
  </p>


      {/* Venue Image */}
      <div className="mb-10 py-5">
        <img
          src={nitcampus}
          alt="IIT Delhi Campus"
          className="w-full max-w-8xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Address */}
      <div className="text-gray-800 mb-10">
        <p className="text-xl font-semibold">National Institute of Technology Jamshepdur</p>
        <p className="text-lg">Adityapur, Jamhsedpur-831014 India</p>
      </div>

      {/* Google Map Embed */}
      <div className="w-full my-8 max-w-7xl mx-auto">
        <iframe
          title="IIT Delhi Location"
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.686243876933!2d86.14154107533686!3d22.77702232544686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%20Jamshedpur%20(NIT%20Jamshedpur)!5e0!3m2!1sen!2sin!4v1744148686794!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;
