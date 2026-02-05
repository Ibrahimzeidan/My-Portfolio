import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 pb-10">
      {/* Title */}
      <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2">
        Contact ME
      </h2>

      <div className="mt-4 flex items-center gap-3 mb-6">
        <span className="w-3 h-3 border-2 border-white rounded-full" />
        <span className="w-12 h-[2px] bg-white" />
      </div>

      {/* Form */}
      <form className="max-w-6xl space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent text-white font-bold border-2 border-[#314355] p-3 rounded-md shadow-xl focus:border-[#00B87B] outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent text-white font-bold border-2 border-[#314355] p-3 rounded-md shadow-xl focus:border-[#00B87B] outline-none"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent text-white font-bold border-2 border-[#314355] p-3 rounded-md shadow-xl focus:border-[#00B87B] outline-none"
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full bg-transparent text-white font-bold border-2 border-[#314355] p-3 rounded-md shadow-xl focus:border-[#00B87B] outline-none resize-none"
        />

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-[#00B87B] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 mt-12">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Ibrahimzeidan"
            className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/ibrahim.zaidan.946"
            className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-zeidan-09532835b/"
            className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/ibrahim_ziadan/"
            className="text-white w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
          <a className="hover:text-[#00B87B] cursor-pointer">Privacy</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] cursor-pointer">Terms</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] cursor-pointer">FAQs</a>
          <span className="opacity-40">|</span>
          <a className="hover:text-[#00B87B] cursor-pointer">Help</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/70 text-center">
          © All Rights Reserved. Designed by{" "}
          <span className="text-[#00B87B] font-semibold">HTML Codex</span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
