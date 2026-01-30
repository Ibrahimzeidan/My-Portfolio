
function Experience(){
  return(
<div>
  <div><h2 className="text-white font-bold text-4xl">Experience</h2></div>
   <div className="mt-5 flex items-center gap-4 mb-2">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-20 h-[2px] bg-white" />

        </div>
        <div className="relative">
          <span className="absolute -left-10 top-1 text-2xl text-white">➜</span>
          <h3 className="text-2xl font-bold text-white">Web Designer</h3>
          <p className="text-sm text-white/70 mb-3">
            Soft Company | 2022 – Present
          </p>
          <p className="text-white/90 leading-relaxed">
            I design modern and responsive websites with a strong focus on user
            experience. My work includes creating clean layouts, improving
            usability, and ensuring compatibility across different devices and
            browsers.
          </p>
        </div>


        <div className="relative">
          <span className="absolute -left-10 top-1 text-2xl text-white">➜</span>
          <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
          <p className="text-sm text-white/70 mb-3">
            Freelance | 2023 – Present
          </p>
          <p className="text-white/90 leading-relaxed">
            I develop interactive user interfaces using React, JavaScript, and
            Tailwind CSS. I focus on performance, accessibility, and writing
            clean, reusable code for scalable applications.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-10 top-1 text-2xl text-white">➜</span>
          <h3 className="text-2xl font-bold text-white">Junior Full Stack Developer</h3>
          <p className="text-sm text-white/70 mb-3">
            Personal & University Projects | 2021 – 2023
          </p>
          <p className="text-white/90 leading-relaxed">
            I worked on full stack projects that include frontend development,
            backend logic, and database integration. These projects helped me
            build a solid foundation in problem-solving and real-world
            application development.
          </p>
        </div>
       
       
</div>
  )
}
export default Experience