function Education() {
  const educationData = [
    {
      title: "Bachelor in Computer Science",
      school: "Your University Name",
      date: "2023 — Present",
      details: [
        "Relevant courses: Web Development, Data Structures, Databases",
        "Focused on front-end and full-stack projects",
      ],
    },
    {
      title: "Front-End Development Certificate",
      school: "FreeCodeCamp / Udemy (example)",
      date: "2024",
      details: [
        "Built responsive pages using HTML, CSS, JavaScript",
        "React fundamentals + component-based UI",
      ],
    },
    {
      title: "High School Diploma",
      school: "Your School Name",
      date: "2020 — 2023",
      details: ["General education with strong focus on math and science"],
    },
  ];

  return (
    <section id="education" className="w-full px-4 sm:px-6 md:px-0">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">
          Education
        </h2>

        <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-12 sm:w-14 h-[2px] bg-white" />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-5 sm:pl-6">
        <div className="absolute left-[10px] sm:left-[11px] top-0 h-full w-[2px] bg-white/30" />

        <div className="space-y-5 sm:space-y-6">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute left-[2px] sm:left-[3px] top-6 sm:top-7 w-5 h-5 rounded-full border-2 border-white bg-[#2C3E50] group-hover:border-[#00B87B] transition-colors duration-300" />

              {/* Card */}
              <div className="ml-6 bg-[#32495d] rounded-lg p-4 sm:p-6 text-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-lg sm:text-2xl font-bold break-words">
                    {item.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-white/70">
                    {item.date}
                  </span>
                </div>

                <p className="mt-2 text-[#00B87B] font-semibold break-words">
                  {item.school}
                </p>

                <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-white/90 list-disc pl-5">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
