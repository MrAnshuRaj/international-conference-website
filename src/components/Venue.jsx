import React from "react";
import nitcampus from "../assets/nitcampus.jpg"
const Venue = () => {
  return (
    <div className="bg-gray-100 py-15 px-6 text-center mt-10">
      {/* Section Title */}
      <h2 className="text-5xl !font-bold !text-blue-900 mb-6 uppercase">Venue</h2>

      {/* Venue Description */}
      <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-10">
      National Institute of Technology Jamshedpur,earlier known as Regional Institute of Technology was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of REC's (Regional Engineering College) in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region. It was among the first eight Regional Engineering Colleges (RECs) established as part of the Second Five-Year Plan (1956 - 1961). This was the only REC in the country which was named as RIT (Regional Institute of Technology). Therefore RIT Jamshedpur was actually the REC of undivided Bihar & Jharkhand. The foundation stone of RIT (REC) Jamshedpur was laid by Dr. Srikrishna Sinha, the then chief minister of Bihar , with the aim of nurturing talent and setting high standards of education and excellence.
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
