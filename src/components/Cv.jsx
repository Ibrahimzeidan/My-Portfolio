import MyImage from "../assets/heloo.jpg";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub,  } from "react-icons/fa";

function Cv(){
return(

   <div className="flex bg-[#2C3E50]">
      <div className="sticky top-0 h-screen ml-8 shadow-2xl">
        <div className="text-center w-80 px-4">

          <div className="mb-4 ">
            <img
              src={MyImage}
              alt="Portfolio"
              className="w-full rounded-lg"
            />
          </div>

          <p className="text-2xl text-[#00B87B] font-bold mb-2">
            Ibrahim Zeidan
          </p>

          <p className="font-bold text-2xl text-white mb-6">
            Full Stack Developer
          </p>

          <div className="flex justify-center gap-3 text-3xl cursor-pointer mt-70 ">
            <a href="https://github.com/Ibrahimzeidan"className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer text-white">
            <FaGithub />
          </a>
          <a href= "https://www.facebook.com/ibrahim.zaidan.946" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer text-white">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-zeidan-09532835b/" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/ibrahim_ziadan/" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer text-white">
            <FaInstagram />
          </a>
          </div>

          <hr className="text-white  mt-2 mb-2 " />

          <button className="
            w-full
            py-3
            text-white
            border border-white
            rounded-lg
            cursor-pointer
            transition
            hover:bg-[#00B87B] 
          ">
            Download CV
          </button>

        </div>
        </div>
        </div>
        
     
)
}
export default Cv