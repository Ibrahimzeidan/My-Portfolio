function Experience() {
  const items = [
    {
      title: "Web Designer",
      place: "Digital Hub InternShips |  Present",
      desc: `I design modern and responsive websites with a strong focus on user
      experience. My work includes creating clean layouts, improving usability,
      and ensuring compatibility across different devices and browsers.`,
    },
    {
      title: "Frontend Developer",
      place: "Digital Hub InternShips |  Present",
      desc: `I develop interactive user interfaces using React, JavaScript, and
      Tailwind CSS. I focus on performance, accessibility, and writing clean,
      reusable code for scalable applications.`,
    },
    {
      title: "Junior Full Stack Developer",
      place: "Digital Hub InternShips | present",
      desc: `I worked on full stack projects that include frontend development,
      backend logic, and database integration. These projects helped me build a
      solid foundation in problem-solving and real-world application development.`,
    },
  ];

  return (
    <section id="experience" className="w-full px-4 sm:px-6 md:px-0">
      <div className="mb-6">
        <h2 className="text-white font-bold text-3xl sm:text-4xl">Experience</h2>

        <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-14 sm:w-20 h-[2px] bg-white" />
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 rounded-lg p-4 sm:p-6 shadow-md"
          >
            {/* Arrow: inside on mobile, outside on md+ */}
            <span className="absolute left-4 top-5 text-xl text-white md:-left-10 md:top-6 md:text-2xl">
              ➜
            </span>

            <h3 className="text-lg sm:text-2xl font-bold text-white pl-8 md:pl-0">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 mb-3 pl-8 md:pl-0">
              {item.place}
            </p>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed pl-8 md:pl-0">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
