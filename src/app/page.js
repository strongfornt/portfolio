import ContentHome from "@/components/Home/ContentHome";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export default function Home() {
  return (
    <section className="relative ">
      {/* <h1>This is my home</h1> */}
      <div className="absolute -z-10   min-h-screen  ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className=" min-h-screen object-cover opacity-70 -z-20 "
        >
          <source src="/motoion.MP4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bg-black/80 -z-10  min-h-screen w-full  "></div>

      {/* others components start from here================================== */}
      <section className="z-10 flex flex-col justify-center items-center min-h-screen px-2 md:px-0  ">
        <div class="w-full max-w-md px-5 py-4 mt-16  rounded-lg shadow-lg border border-[#343a40]  ">
          <div class="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              class="object-cover w-28 h-28 border-2  rounded-full "
              alt="Testimonial avatar"
              src="https://i.postimg.cc/SRpgkrgX/ahsan.jpg"
            />
          </div>

          <div className="z-20 ">
            <h5 className=" text-sm font-thin  text-white">Hey! There,</h5>

            <h1 className=" font-serif text-white  text-2xl font-semibold justify-center  md:justify-start">
              I&apos;m <span className="font-mono">Ahsan Ullah_</span>
            </h1>
            <ContentHome />
          </div>

          <div class="flex justify-between items-center mt-4">
          <ul className="  flex   gap-4 ">
                  <a
                    href=" https://www.facebook.com/profile.php?id=100049665156482&mibextid=JRoKGi"
                    target="_blank"
                  >
                    <li className=" text-md flex items-center justify-center bg-white text-[#3B5998] hover:text-white hover:bg-[#3B5998] duration-300 rounded-full h-6 w-6 cursor-pointer relative overflow-hidden hover:overflow-visible  hover:transition-all  ">
                      <FaFacebookF />
                      <span className="-translate-y-[100%] inline-flex absolute -top-3 bg-[#3B5998] text-white py-1 px-2 text-sm font-serif  rounded">
                        <span className="h-[10px] w-[10px] inline-flex bg-[#3B5998]   absolute top-[23px] left-[44%] rotate-45" />
                        Facebook
                      </span>
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahsan-ullahh/"
                    target="_blank"
                  >
                    <li className="  text-md flex items-center justify-center duration-300  text-[#46C1F6] hover:text-white hover:bg-[#46C1F6] bg-white rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible">
                      <RiLinkedinFill />
                      <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#46C1F6]   text-white py-1 px-2 text-sm font-serif rounded">
                        <span className="h-[10px] w-[10px] inline-flex bg-[#46C1F6] absolute top-[23px] left-[44%] rotate-45" />
                        Linkedin
                      </span>
                    </li>
                  </a>

                  <a
                    href="https://www.instagram.com/ahsanullah_mubin/"
                    target="_blank"
                  >
                    <li className="  text-md flex items-center justify-center duration-300 hover:text-white  text-[#e1306c] bg-white hover:bg-[#e1306c] rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible ">
                      <AiFillInstagram />
                      <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#e1306c] text-white py-1 px-2 text-sm font-serif rounded">
                        <span className="h-[10px] w-[10px] inline-flex bg-[#e1306c] absolute top-[23px] left-[44%] rotate-45" />
                        Instagram
                      </span>
                    </li>
                  </a>

                  <a href="https://github.com/strongfornt" target="_blank">
                    <li className="  text-md flex items-center justify-center duration-300 hover:text-white hover:bg-[#333] text-[#333] bg-white rounded-full h-6 w-6  relative cursor-pointer overflow-hidden hover:overflow-visible">
                      <AiFillGithub />
                      <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#333]  text-white py-1 px-2 text-sm font-serif rounded">
                        <span className="h-[10px] w-[10px] inline-flex bg-[#333] absolute top-[23px] left-[44%] rotate-45" />
                        Github
                      </span>
                    </li>
                  </a>
                </ul>
            <a href="mailto:ahsanullah.mail2@gmail.com">
              <button className="border font-semibold font-mono border-[#ffb400] px-6 py-2 rounded-lg text-[#ffb400] hover:text-white/80 hover:bg-[#ffb400]  uppercase text-lg   duration-300">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
