import React from 'react';

const Publications = () => {
  return (
    <div className="bg-slate-50 py-16 px-6">
      <h2 className="text-3xl !font-bold text-center !text-blue-900 uppercase mb-10">
        Publications
      </h2>
      
       <ul className="list-disc list-inside text-center mt-6 text-lg space-y-3">
  <li>
    All accepted, presented and registered papers will be published in
    <span className="font-semibold text-blue-800"> Scopus-indexed proceedings/book series</span>.
  </li>
  <li>
    Selected submissions will be considered for publication in special/regular issues of
    <span className="font-semibold text-blue-800"> SCI/SCIE/ESCI-indexed journals</span>.
  </li>
  <li>
    Best Paper Awards and Best Poster Awards will also be presented in each stream.
  </li>
</ul>

     
    </div>
  );
};

export default Publications;
