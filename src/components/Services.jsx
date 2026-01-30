import { FaCode, FaAndroid } from "react-icons/fa";
function Services() {
  return (
    <div>
      <div> <h2 className="text-white font-bold text-4xl mt-2 ">Services</h2> </div>
      <div className="mt-5 flex items-center gap-4 mb-4">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-12 h-[2px] bg-white" />
      </div>
      {/* SERVICES CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        <div className="group bg-[#32495d] p-10 text-center text-white rounded-md
      transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

          <div className="bg-white w-16 h-16 mx-auto flex items-center justify-center mb-6
        transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer">
            <FaCode className="text-[#00B87B] text-3xl
          transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4">Web Design</h3>

          <p className="text-white/80 leading-relaxed">
            I design modern, responsive websites with clean layouts and strong focus on
            usability and performance.
          </p>
        </div>

        <div className="group bg-[#32495d] p-10 text-center text-white rounded-md
      transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

          <div className="bg-white w-16 h-16 mx-auto flex items-center justify-center mb-6
        transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer">
            <FaAndroid className="text-[#00B87B] text-3xl
          transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4">Apps Development</h3>

          <p className="text-white/80 leading-relaxed">
            I build mobile applications with smooth performance, intuitive
            interfaces, and scalable architecture.
          </p>
        </div>

      </div>

    </div>
  )
}
export default Services