import React from "react";
import image from "../assets/speaker.png"
const speakers = [
  {
    name: "Prof. Albano Cavaleiro",
    image: image,
  },
  {
    name: "Prof. Dae-Eun Kim",
    image: image,
  },
  {
    name: "Prof. Henara Costa",
    image: image,
  },
  {
    name: "Prof. Ille C. Gebeshuber",
    image: image,
  },
  {
    name: "Dr. Anna Igual Munoz",
    image: image,
  },
  {
    name: "Prof. Margaret Stack",
    image: image,
  },
];

const Speakers = () => {
    return (
      <div className="py-16 mt-10 px-6 bg-white text-center">
        <h2 className="text-5xl !font-bold !text-blue-900 uppercase mb-10">Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 place-items-center">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-60">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-gray-200 shadow-lg"
              />
              <p className="mt-6 text-xl font-semibold text-slate-800">{speaker.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Speakers;
