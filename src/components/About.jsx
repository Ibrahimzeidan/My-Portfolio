function About(){
return (
   <div className=" mt-20 mr-4">

        <h2 className="text-white font-bold text-4xl">About ME</h2>


        <div className="mt-5 flex items-center gap-4">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-24 h-[2px] bg-white" />
        </div>

        <p className="mt-10 text-xl leading-relaxed text-white/90 max-w-6xl">
          I am a passionate Full Stack Developer with a strong interest in building
          modern, user-friendly web applications. I enjoy turning ideas into
          functional, responsive, and visually appealing products using current
          technologies. I am always eager to learn new tools, improve my skills, and
          take on challenges that help me grow both professionally and personally.
          My goal is to create solutions that provide real value and a great user
          experience.
        </p>


        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-24 max-w-6xl">
          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Name:</span>Ibrahim Zeidan
          </p>
          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Birthday:</span>21 September 2004
          </p>

          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Degree:</span>Bachelor in Computer Science
          </p>
          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Experience:</span>1 year
          </p>

          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Phone:</span>+961 71 326 652
          </p>
          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Email:</span>ibrahimzeidan09@gmail.com
          </p>

          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Address:</span>Saray Street, Saida, Lebanon
          </p>
          <p className="text-white">
            <span className="text-[#00B87B] mr-2">Freelance:</span>Available
          </p>
        </div>


        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          <div className="flex items-center bg-white/5 shadow-xl p-6">
            <p className="text-[#00B87B] font-bold text-5xl mr-4">1</p>
            <p className="text-white leading-tight">
              Year of <br />
              <span className="font-bold">Experience</span>
            </p>
          </div>

          <div className="flex items-center bg-white/5 shadow-xl p-6">
            <p className="text-[#00B87B] font-bold text-5xl mr-4">2</p>
            <p className="text-white leading-tight">
              Happy <br />
              <span className="font-bold">Clients</span>
            </p>
          </div>

          <div className="flex items-center bg-white/5 shadow-xl p-6">
            <p className="text-[#00B87B] font-bold text-5xl mr-4">4</p>
            <p className="text-white leading-tight">
              Complete <br />
              <span className="font-bold">Projects</span>
            </p>
          </div>
        </div>
        <div className="mt-12 text-white mb-12"><hr></hr></div>

        
        </div>
)
}
export default About