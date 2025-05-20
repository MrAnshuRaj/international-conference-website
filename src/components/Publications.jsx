import React from 'react';

const Publications = () => {
  return (
    <div className="bg-slate-50 py-15 px-6">
      <h2 className="text-4xl !font-bold text-center !text-blue-900 uppercase mb-5">
        Publications
      </h2>
      
   <div className="text-center mt-6 text-lg">
  <p className="font-normal">
    The presented and selected papers will be published in the following journals:
  </p>

  <ul className="list-disc list-inside mt-4 space-y-2 text-left inline-block">
    <li className="font-semibold text-blue-800">Scopus-indexed proceedings/book series</li>
    <li className="font-semibold text-blue-800">SCI/SCIE/ESCI-indexed journals</li>
    <li className="font-semibold text-blue-800">Coming soon!</li>
  </ul>
</div>


     
    </div>
  );
};

export default Publications;
