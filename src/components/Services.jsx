import { FaCode, FaAndroid } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="w-full px-4 sm:px-6 md:px-0">
      <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">Services</h2>

      <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4 mb-6">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-12 h-[2px] bg-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-8 sm:mt-10">
        {/* Card 1 */}
        <div className="group bg-[#32495d] p-6 sm:p-8 lg:p-10 text-center text-white rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer rounded">
            <FaCode className="text-[#00B87B] text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Web Design
          </h3>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            I design modern, responsive websites with clean layouts and strong
            focus on usability and performance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-[#32495d] p-6 sm:p-8 lg:p-10 text-center text-white rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300 group-hover:bg-[#00B87B] cursor-pointer rounded">
            <FaAndroid className="text-[#00B87B] text-2xl sm:text-3xl transition-colors duration-300 group-hover:text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Apps Development
          </h3>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            I build mobile applications with smooth performance, intuitive
            interfaces, and scalable architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
