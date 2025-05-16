import React from 'react';

const AboutSection = () => {
  return (
    <section className="pt-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* About the Institute */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center uppercase">
            About the Institute
          </h2>
          <p className="text-gray-800 text-justify leading-relaxed">
            National Institute of Technology Jamshedpur, earlier known as Regional Institute of Technology,
            was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar
            in the chain of RECs (Regional Engineering Colleges). It aimed to generate technical graduates of the highest
            standards who could provide technological leadership to the region. RIT Jamshedpur was the only REC named
            as RIT, representing undivided Bihar & Jharkhand. Its foundation was laid by Dr. Srikrishna Sinha, the then Chief Minister
            of Bihar. In 2002, it was converted to NIT Jamshedpur with Deemed University status, and in 2007, it was granted
            Institute of National Importance status. The institute has 11 departments and is spread over 341 acres of lush,
            wooded campus on the outskirts of Jamshedpur.
          </p>
          <div className="my-6 border-t border-gray-300" />
        </div>

        {/* About the Conference */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center uppercase">
            About the Conference
          </h2>
          <p className="text-gray-800 text-justify leading-relaxed">
            The International Conference on Innovations and Research in Mechanical Engineering (ICIRME 2025)
            is a global event designed to bring together leading academicians, researchers, industry experts,
            and policymakers to discuss and showcase groundbreaking advancements in mechanical engineering.
            Hosted at NIT Jamshedpur — located in India's first planned industrial city by the TATA Group —
            the conference will focus on emerging areas like Industry 4.0, Artificial Intelligence, and
            sustainability-driven engineering practices. It aims to highlight the pivotal role of mechanical
            engineering in achieving industrial excellence and sustainable development.
          </p>
          <div className="my-6 border-t border-gray-300" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
