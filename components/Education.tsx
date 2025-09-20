import React from 'react';


const educationData = [
  {
    year: '2021 - 2023',
    degree: 'Diploma of ICT',
    description: 'I successfully pursued a Diploma in ICT from 2021 to 2023, where I built strong skills in information technology, systems, and digital tools that support modern businesses and organizations.'
  },
  {
    year: '2022 - 2025',
    degree: 'Abdalla Golo Secondry school',
    description: 'I am currently completing my secondary education in Form 4, which I began in 2022. This stage has strengthened my academic foundation, discipline, and readiness for higher studies.'
  },
  {
    year: '2024 - 2025',
    degree: 'Diploma of Web development',
    description: 'I am pursuing a Diploma in Web Development from 2024 until now, and I am close to graduation. Through this program, I have gained hands-on experience in building modern, responsive, and user-friendly websites.'
  }
];

// The main App component that contains all the logic and UI for the responsive timeline.
const App = () => {
  return (
    <section id='Eduaction' className="py-12 bg-gray-100 font-sans min-h-screen flex items-center justify-center">
      {/* Container for the entire timeline, centered on larger screens */}
      <div className="container mx-auto px-4">

        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wider">EDUCATION</h2>
        </div>

        {/* Timeline body with the vertical line and events */}
        <div className="relative">
          {/* The central vertical line for the timeline. It moves to the left on small screens. */}
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded-full"></div>

          {/* Iterate over the education data to create each timeline event */}
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-full my-6 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
            >
              {/* This inner div is a flexible container for the content card. 
                  On small screens, it takes full width and positions the card to the right of the line.
                  On larger screens, it takes half the width and aligns left or right. */}
              <div className={`w-full sm:w-1/2 flex relative
                ${index % 2 === 0 ? 'sm:justify-end sm:pr-8' : 'sm:justify-start sm:pl-8'}`}>

                {/* This is the timeline circle marker. It is always positioned relative to the vertical line. */}
                <div className="absolute -left-1 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-zinc-300 shadow-md"></div>

                {/* The card content with year, degree, and description. */}
                <div className="w-full p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
                  <span className="text-sm font-semibold text-gray-500">{item.year}</span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{item.degree}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
