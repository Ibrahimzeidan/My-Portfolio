function About() {
  return (
    <div className="mt-10 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0 mr-0 lg:mr-4">
      <h2 className="text-white font-bold text-3xl sm:text-4xl">About ME</h2>

      <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-16 sm:w-24 h-[2px] bg-white" />
      </div>

      <p className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 max-w-6xl">
        I am a passionate Full Stack Developer with a strong interest in building
        modern, user-friendly web applications. I enjoy turning ideas into
        functional, responsive, and visually appealing products using current
        technologies. I am always eager to learn new tools, improve my skills, and
        take on challenges that help me grow both professionally and personally.
        My goal is to create solutions that provide real value and a great user
        experience.
      </p>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 md:gap-x-16 lg:gap-x-24 max-w-6xl">
        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Name:</span>Ibrahim Zeidan
        </p>
        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Birthday:</span>21 September 2004
        </p>

        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Degree:</span>Bachelor in Computer Science
        </p>
        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Experience:</span>1 year
        </p>

        <p className="text-white text-sm sm:text-base break-words">
          <span className="text-[#00B87B] mr-2">Phone:</span>+961 71 326 652
        </p>
        <p className="text-white text-sm sm:text-base break-words">
          <span className="text-[#00B87B] mr-2">Email:</span>ibrahimzeidan09@gmail.com
        </p>

        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Address:</span>Saray Street, Saida, Lebanon
        </p>
        <p className="text-white text-sm sm:text-base">
          <span className="text-[#00B87B] mr-2">Freelance:</span>Available
        </p>
      </div>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 max-w-6xl">
        <div className="flex items-center bg-white/5 shadow-xl p-5 sm:p-6 rounded-lg">
          <p className="text-[#00B87B] font-bold text-4xl sm:text-5xl mr-4">1</p>
          <p className="text-white leading-tight text-sm sm:text-base">
            Year of <br />
            <span className="font-bold">Experience</span>
          </p>
        </div>

        <div className="flex items-center bg-white/5 shadow-xl p-5 sm:p-6 rounded-lg">
          <p className="text-[#00B87B] font-bold text-4xl sm:text-5xl mr-4">2</p>
          <p className="text-white leading-tight text-sm sm:text-base">
            Happy <br />
            <span className="font-bold">Clients</span>
          </p>
        </div>

        <div className="flex items-center bg-white/5 shadow-xl p-5 sm:p-6 rounded-lg">
          <p className="text-[#00B87B] font-bold text-4xl sm:text-5xl mr-4">4</p>
          <p className="text-white leading-tight text-sm sm:text-base">
            Complete <br />
            <span className="font-bold">Projects</span>
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 text-white pb-10">
        <hr className="border-white/20" />
      </div>
    </div>
  );
}

export default About;
