import React from 'react';
import bgImg from '../assets/gearbg.jpg'
const organizingCommittee = [
  { role: "Chief Patron, Director NIT Jamshedpur", name: "Prof. (Dr.) Goutam Sutradhar" },
  { role: "Patron, Deputy Director, NIT Jamshedpur", name: "Prof Ram Vinoy Sharma" },
  { role: "General Chair, Head, Dept. of Mechanical Engineering", name: "Prof Sanjay" },
  { role: "Organizing Chairman", name: "Dr. Pranab Kumar Kundu" },
  { role: "Organizing Secretary", name: "Dr. Saikat Ranjan Maity" },
  { role: "Organizing Secretary", name: "Dr. Abhijit Dey" },
  { role: "Organizing Secretary", name: "Dr. Vishesh Ranjan Kar" },
  { role: "Sponsorship Chair", name: "Prof. Mrityunjay Kumar Sinha" },
  { role: "Sponsorship Co-Chair", name: "Dr. Deepak Kumar" },
  { role: "Public Relations Chair", name: "Dr. Naresh Prasad" },
  { role: "Public Relations Co-Chair", name: "Dr. Alok Kumar Ray" },
  { role: "Finance Chair", name: "Dr. Ashok Kumar Mandal" },
  { role: "Keynote Chair", name: "Dr. Satish Kumar" },
  { role: "Keynote Co-Chair", name: "Dr. Bipin Kumar" },
  { role: "Event Management Chair", name: "Dr. Paramanand Kumar" },
  { role: "Event Management Co-Chair", name: "Dr. Sailesh Kumar Jha" },
  { role: "Technical Program Chair", name: "Dr. Shasank Pandey" },
  { role: "Technical Program Co-Chair", name: "Dr. Sri Krishna Sudhamsu" },
  { role: "Registration Chair", name: "Prof. Prabha Chand" },
  { role: "Registration Co-Chair", name: "Dr. Abhishek Sharma" },
  { role: "Industrial Chair", name: "Dr. M A Hassan" },
  { role: "Industrial Co-Chair", name: "Dr. Vineet Sahoo" },
  { role: "Publicity Chair", name: "Dr. K D P Singh" },
  { role: "Publicity Co-Chair", name: "Dr. Dulari Hansdah" },
  { role: "Hospitality Chair", name: "Dr. Anil Prasad" },
  { role: "Hospitality Co-Chair", name: "Dr. Vijay Kumar Dalla" },
  { role: "Website Chair", name: "Dr. Malay Niraj" },
  { role: "Publication Chair", name: "Dr. Ashok Kumar Barik" },
  { role: "Publication Co-Chair", name: "Dr. Shankar Kumar Roy" },
  { role: "Printing & Publication Chair", name: "Dr. Rinku Kumar Gouda" },
  { role: "Printing & Publication Co-Chair", name: "Dr. Arvind Kumar Patel" }
];

const internationalAdvisory = [
  { name: "Prof. J Paul Davim", affiliation: "UAVR, Portugal" },
  { name: "Prof. G L Samuel", affiliation: "IIT Madras" },
  { name: "Prof. Firoz Alam", affiliation: "RMIT, Melbourne" },
  { name: "Prof. M Sundaram", affiliation: "University of Cincinnati, USA" },
  { name: "Prof. Ashutosh Sharma", affiliation: "IIT Kanpur" },
  { name: "Prof. Gautam Biswas", affiliation: "BITS Pilani" },
  { name: "Prof. R Venkata Rao", affiliation: "SVNIT Surat" },
  { name: "Prof. Sushanta Mitra", affiliation: "Waterloo University, Canada" },
  { name: "Prof. S Ghosal", affiliation: "Northwestern University, USA" },
  { name: "Prof. Y Manurung", affiliation: "SMRI, Malaysia" },
  { name: "Dr. Bekir Sami Yilbas", affiliation: "KFUPM, Saudi Arabia" },
  { name: "Prof. Pradip Dutta", affiliation: "IISc Bangalore" },
  { name: "Prof. U S Dixit", affiliation: "IIT Guwahati" },
  { name: "Prof. Suman Chakraborty", affiliation: "IIT Kharagpur" },
  { name: "Prof. Bijan Mondal", affiliation: "IIEST" },
  { name: "Prof. Sudarsan Ghosh", affiliation: "IIT Delhi" },
  { name: "Prof. Amit Agarwal", affiliation: "IIT Bombay" },
  { name: "Prof. Shankar Chakraborty", affiliation: "Jadavpur University" },
  { name: "Prof. Subir Das", affiliation: "IIT BHU" },
  { name: "Prof. M K Tiwari", affiliation: "NITIE Mumbai" },
  { name: "Prof. S Chattopadhyaya", affiliation: "IIT ISM Dhanbad" },
  { name: "Dr. Mark J Jackson", affiliation: "Kansas State University, USA" },
  { name: "Dr. R Sundar", affiliation: "BISS Pvt. Ltd." },
  { name: "Dr. V C Srivastava", affiliation: "NML Jamshedpur" },
  { name: "Dr. V Kumar", affiliation: "ARDB DRDO" },
  { name: "Dr. N C Murmu", affiliation: "CMERI Durgapur" },
  { name: "Dr. C P Paul", affiliation: "RRCAT Indore" },
  { name: "Mr. S Sandhu", affiliation: "Tata Motors, Jamshedpur" },
  { name: "Mr. R K Behra", affiliation: "Chairman, RSB" },
  { name: "Mr. Shivanand Roy", affiliation: "President, IEI" },
  { name: "Mr. Subodh Pandey", affiliation: "VP, Tata Steel" },
  { name: "Mr. Probal Ghosh", affiliation: "VP, Tata Steel" }
];

const instituteAdvisory = [
  { name: "Prof. Satish Kumar", department: "Mechanical Engineering" },
  { name: "Prof. S K Sarangi", department: "Mechanical Engineering" },
  { name: "Prof. Prabha Chand", department: "Mechanical Engineering" },
  { name: "Prof. A K L Srivastava", department: "Civil Engineering" },
  { name: "Prof. Virendra Kumar", department: "Civil Engineering" },
  { name: "Prof. K B Yadav", department: "Electrical Engineering" },
  { name: "Prof. R N Mahanty", department: "Electrical Engineering" },
  { name: "Prof. U K Sinha", department: "Electrical Engineering" },
  { name: "Prof. Ashok Kumar", department: "Metallurgical & Materials Engineering" },
  { name: "Prof. Amresh Kumar", department: "Production & Industrial Engineering" },
  { name: "Prof. Raj Ballav", department: "Production & Industrial Engineering" },
  { name: "Prof. D A Khan", department: "Computer Science & Engineering" },
  { name: "Prof. D K Yadav", department: "Computer Science & Engineering" }
];

const technicalCommittee = [
  { name: "Prof. Soumitra Paul", affiliation: "IIT Kharagpur" },
  { name: "Prof. J Ramkumar", affiliation: "IIT Kanpur" },
  { name: "Prof. Bijan Sarkar", affiliation: "Jadavpur University" },
  { name: "Prof. S S Roy", affiliation: "NIT Durgapur" },
  { name: "Prof. A Dalal", affiliation: "IIT Guwahati" },
  { name: "Prof. Ali Jahan", affiliation: "IAU Iran" },
  { name: "Prof. S Bhaumik", affiliation: "IIEST" },
  { name: "Dr. Temel Varol", affiliation: "KTU, Turkey" },
  { name: "Dr. Jinyang Xu", affiliation: "SJTU, China" },
  { name: "Dr. Nilrudra Mandal", affiliation: "CMERI" },
  { name: "Prof. Santanu Das", affiliation: "KGEC" },
  { name: "Prof. M F Wani", affiliation: "NIT Srinagar" },
  { name: "Dr. Joyjeet Ghose", affiliation: "BIT Mesra" },
  { name: "Prof. S Das", affiliation: "University of Maryland" },
  { name: "Dr. D Dasgupta", affiliation: "IIT Delhi" },
  { name: "Prof. S Bhowmik", affiliation: "NITA" },
  { name: "Prof. A K Kuthe", affiliation: "VNIT" },
  { name: "Prof. Saurav Datta", affiliation: "NIT Rourkela" },
  { name: "Prof. P P Bandyopadhyay", affiliation: "" },
  { name: "Prof. Kaushik Pal", affiliation: "IIT Roorkee" },
  { name: "Prof. Amrit Ambirajan", affiliation: "IISc Bangalore" },
  { name: "Dr. B Kuriachen", affiliation: "NIT Calicut" },
  { name: "Dr. Bidhan Pramanick", affiliation: "IIT Goa" },
  { name: "Prof. K Sabiruddin", affiliation: "IIT Indore" },
  { name: "Dr. A Bhattacharya", affiliation: "IIT Patna" },
  { name: "Prof. Om Prakash", affiliation: "NIT Patna" },
  { name: "Prof. Arnab Sarkar", affiliation: "IIT BHU" },
  { name: "Prof. P K Patowari", affiliation: "NIT Silchar" }
];

const renderCard = (item, field1, field2) => (
  <div
    key={item[field1] + item[field2]}
    className="bg-blue-200/50 backdrop-blur-sm rounded-xl p-5 border-l-4 border-blue-900 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
  >
    <h3 className="text-xl font-semibold !text-blue-800 flex items-center gap-2">
      <svg
        className="w-5 h-5 !text-blue-700"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M13.828 12.172a4 4 0 11-5.656-5.656 4 4 0 015.656 5.656z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.535-10.465a5 5 0 10-7.07 7.07 5 5 0 007.07-7.07z"
          clipRule="evenodd"
        />
      </svg>
      {item[field1]}
    </h3>
    <p className="text-gray-700 mt-1 text-sm">{item[field2]}</p>
  </div>
);

const Section = ({ title, data, field1, field2 }) => (
  <section className=" py-16 px-6">
    <h2 className="text-3xl font-bold text-center !text-blue-900 uppercase tracking-wide border-b-4 border-blue-600 pb-2 mb-10 w-fit mx-auto">
      {title}
    </h2>
    <div className="grid gap-6 max-w-6xl mt-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => renderCard(item, field1, field2))}
    </div>
  </section>
);

const Committee = () => {
  return (
    <div className="bg-no-repeat bg-top bg-fixed bg-cover min-h-screen"
          style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="mt-5 bg-gray-50"></div>
      <Section
        title="Organizing Committee"
        data={organizingCommittee}
        field1="name"
        field2="role"
      />
      <Section
        title="International Advisory Committee"
        data={internationalAdvisory}
        field1="name"
        field2="affiliation"
      />
      <Section
        title="Institute Advisory Committee"
        data={instituteAdvisory}
        field1="name"
        field2="department"
      />
      <Section
        title="Technical Committee"
        data={technicalCommittee}
        field1="name"
        field2="affiliation"
      />
      {/* Attribution */}
  <div className="bottom-2 right-4 text-xs text-gray-600 z-10 bg-white/70 px-2 py-1 rounded">
    Background image by <a href="https://www.freepik.com" className="underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Freepik</a>
  </div>
    </div>
  );
};


export default Committee;
