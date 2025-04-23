import React from 'react';

const committeeData = [
  { role: "Chief Patron", name: "Director, Prof. (Dr.) Goutam Sutradhar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME131/profile/director.jpg" },
  { role: "Patron", name: "Deputy Director, NIT Jamshedpur", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME115/profile/df8ad1f5-754c-448c-8ad4-9dc3299677f1.jpg" },
  { role: "General Chair", name: "Head, Dept. of Mechanical Engineering", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME116/profile/18659bf6-b700-4c63-aa2c-9c83fa8c43ff.jpg" },
  { role: "Organizing Chairman", name: "Dr. Pranab Kumar Kundu", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME132/profile/029a5ca6-46ba-43e9-ac33-98d8a40f8603.png" },
  { role: "Organizing Secretary", name: "Dr. Saikat Ranjan Maity", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME140/profile/7a07882f-0dad-41ff-bdcf-ecfa3c34c3ea.jpg" },
  { role: "Organizing Secretary", name: "Dr. Abhijit Dey", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME145/profile/f5c7cae1-bc61-4057-b82b-dd6b471fbf8b.jpg" },
  { role: "Organizing Secretary", name: "Dr. Vishesh Ranjan Kar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME122/profile/99ac05f2-1a3b-42f8-95ee-9ae7028f255c.jpg" },
  { role: "Sponsorship Chair", name: "Prof. Mrityunjay Kumar Sinha", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME108/profile/19cbb633-ebd5-4fc9-ad52-688350940df1.jpg" },
  { role: "Sponsorship Co-Chair", name: "Dr. Deepak Kumar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME104/profile/ef69b163-1090-4829-a84b-191a0e5342aa.jpg" },
  { role: "Public Relations Chair", name: "Dr. Naresh Prasad", imageUrl: "https://nitjsr.ac.in/static/media/default.b9a3f227121ac1039c8e.jpg" },
  { role: "Public Relations Co-Chair", name: "Dr. Alok Kumar Ray", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME144/profile/87934a02-00a2-4df8-ae04-865e7154905c.jpg" },
  { role: "Finance Chair", name: "Dr. Ashok Kumar Mandal", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME102/profile/33c2a468-9aed-418b-8a06-ba1d322b6780.jpeg" },
  { role: "Keynote Chair", name: "Dr. Satish Kumar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME117/profile/b0460576-cd83-4725-96f4-6aa9c744f509.png" },
  { role: "Keynote Co-Chair", name: "Dr. Bipin Kumar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME103/profile/d072d90c-4e06-4887-9de6-5ec63f6a6c75.jpg" },
  { role: "Event Management Chair", name: "Dr. Paramanand Kumar", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME113/profile/9301684c-4a28-44fd-a6fd-478a0b2ef2eb.jpg" },
  { role: "Event Management Co-Chair", name: "Dr. Sailesh Kumar Jha", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME123/profile/1d627575-3b9d-4dab-8f8b-69859ff01ad8.jpg" },
  { role: "Technical Program Chair", name: "Dr. Shasank Pandey", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME119/profile/a1450d9e-58b7-490a-9eff-54a6d10aa4e5.jpeg" },
  { role: "Technical Program Co-Chair", name: "Dr. Sri Krishna Sudhamsu", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME129/profile/c25dca9a-ed3c-44a9-a4e5-454cf9b3219e.jfif" },
  { role: "Registration Chair", name: "Prof. Prabha Chand", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME114/profile/8d5b50a4-d81e-42df-b321-63d37c6f4145.png" },
  { role: "Registration Co-Chair", name: "Dr. Abhishek Sharma", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME142/profile/2f957c30-c8b5-4564-9c2e-59e17f759ba8.jpg" },
  { role: "Industrial Chair", name: "Dr. M A Hassan", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME124/profile/4526ab65-2a68-4d71-bee3-7efd171cfaad.JPG" },
  { role: "Industrial Co-Chair", name: "Dr. Vineet Sahoo", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME121/profile/7c768890-533e-4c39-8cbb-4b185c6ab77e.jpg" },
  { role: "Publicity Chair", name: "Dr. K D P Singh", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME106/profile/62214655-64b4-4517-ba7d-b5a7264fdee1.jpg" },
  { role: "Publicity Co-Chair", name: "Dr. Dulari Hansdah", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME105/profile/2ec24b1d-51d1-4dde-aa4e-f45e1098937d.jpg" },
  { role: "Hospitality Chair", name: "Dr. Anil Prasad", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME101/profile/234bafa7-b3dc-408f-ab63-801ad6ce7ce8.jpg" },
  { role: "Hospitality Co-Chair", name: "Dr. Vijay Kumar Dalla", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME120/profile/4a001c7f-dc26-41e0-9c36-07b88bff3dbd.jpg" },
  { role: "Website Chair", name: "Dr. Malay Niraj", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME109/profile/dd0e9770-fbb0-4d11-ae4a-d833320f2f6a.jpg" },
  { role: "Publication Chair", name: "Dr. Ashok Kumar Barik", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME130/profile/c1e52d43-d053-4394-bd89-2fe9da10e17c.jpg" },
  { role: "Publication Co-Chair", name: "Dr. Shankar Kumar Roy", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME128/profile/0d407571-7698-4e8d-9382-63bde413adc3.png" },
  { role: "Printing & Publication Chair", name: "Dr. Rinku Kumar Gouda", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME126/profile/a93aa519-074d-4c8e-b729-7bd039260349.jpg" },
  { role: "Printing & Publication Co-Chair", name: "Dr. Arvind Kumar Patel", imageUrl: "https://nitjsr.ac.in/backend/uploads/Faculty/ME125/profile/84f4e65a-3ce8-48a4-87d0-a595130aef88.png" }
];

const Committee = () => {
  return (
    <div className="py-16 px-6 mt-10 bg-gray-50">
      <h2 className="!text-4xl font-bold text-center !text-blue-900 mb-10 uppercase">Organizing Committee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {committeeData.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src={member.imageUrl ? member.imageUrl : "/assets/committee/placeholder.jpg"}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-300 shadow-sm"
              onError={(e) => { e.target.onerror = null; e.target.src = "/assets/committee/placeholder.jpg"; }}
            />
            <h3 className="text-lg font-semibold !text-blue-800">{member.role}</h3>
            <p className="text-gray-800">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
