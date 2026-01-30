import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub,  } from "react-icons/fa";
function Footer(){
  return(
<div>
  <div><h2 className="text-white font-bold text-4xl mt-2 ">Contact ME</h2></div>
   <div className="mt-5 flex items-center gap-4 mb-4">
          <span className="w-3 h-3 border-2 border-white rounded-full" />
          <span className="w-12 h-[2px] bg-white" />
        </div>
        <div className="">
          <input type="text " placeholder="Your Name" className="font-bold text-white border-2 hover:border-[#00B87B] cursor-pointer p-2 border-[#314355] shadow-2xl pr-80 mr-4"></input>
          <input type="text " placeholder="Your Email" className=" font-bold text-white border-2 hover:border-[#00B87B] cursor-pointer p-2 border-[#314355] shadow-2xl pr-75"></input>
        </div>
<div>  <input type="text " placeholder="Subject" className="mt-4 text-white font-bold ext-white border-2 hover:border-[#00B87B] cursor-pointer p-2 border-[#314355] shadow-2xl pr-215"></input></div>
<div>  <input type="text " placeholder="Message" className="mt-4 pb-40 text-white font-bold ext-white border-2 hover:border-[#00B87B] cursor-pointer p-2 border-[#314355] shadow-2xl pr-215"></input></div>
      <div className="mt-4 justify-center items-center flex cursor-pointer bg-[#00B87B]"><button className="mt-4 items-center flex pb-4">send Message </button></div>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 ">

        
        <div className="flex gap-4 mt-8 shadow-2xl ">
          <a href="https://github.com/Ibrahimzeidan" className=" text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer">
            <FaGithub />
          </a>
          <a href= "https://www.facebook.com/ibrahim.zaidan.946" className=" text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-zeidan-09532835b/" className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/ibrahim_ziadan/" className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition cursor-pointer">
            <FaInstagram />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="" className="hover:text-[#00B87B] transition cursor-pointer">Privacy</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] transition cursor-pointer">Terms</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] transition cursor-pointer">FAQs</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] transition cursor-pointer">Help</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/80 text-center mb-4">
          © All Rights Reserved. Designed by{" "}
          <span className="text-[#00B87B] font-semibold">HTML Codex</span>
        </p>

      </div>
</div>
  );
}
export default Footer