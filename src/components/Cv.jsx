import MyImage from "../assets/profilepic.jpeg";
import cv from "../assets/cv.pdf";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

function Cv() {
  const words = ["Full Stack Developer", "React Developer", "App Developer"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = 90;
    const deletingSpeed = 50;
    const pauseAfterTyping = 1000;

    let timeoutId;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else {
      timeoutId = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );

        if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Ibrahim_Zeidan_CV.pdf";
    link.click();
  };

    return (
    <div className="w-full md:w-70 md:">
      <div className="bg-[#2C3E50] md:sticky md:top-6 md:h-[calc(100vh-3rem)] shadow-2xl rounded-xl">
        <div className="text-center px-4 h-full flex flex-col py-6">

          <div>
            <div className="mb-4 w-full h-48 sm:h-56 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={MyImage}
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl sm:text-2xl text-[#00B87B] font-bold mb-2">
              Ibrahim Zeidan
            </p>

            <p className="font-bold text-lg sm:text-2xl text-white mb-6 min-h-[56px]">
              {text}
              <span className="text-[#00B87B] animate-pulse">|</span>
            </p>
          </div>

          <div className="mt-auto pb-4">
            <div className="flex justify-center gap-3 text-2xl sm:text-3xl cursor-pointer">
              <a
                href="https://github.com/Ibrahimzeidan"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/ibrahim.zaidan.946"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/in/ibrahim-zeidan-09532835b/"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/ibrahim_ziadan/"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#00B87B] transition text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            <hr className="border-white/20 mt-4 mb-3" />

            <button
              onClick={handleDownload}
              className="w-full py-3 text-white border border-white rounded-lg cursor-pointer transition hover:bg-[#00B87B]"
            >
              Download CV
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Cv;