import { Service } from "@/constants/data";
import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export default function page() {
  return (
    <>
      <div className="">
        <header className="  hidden md:flex mt-6 lg:mt-12    items-center justify-center ">
          <h3 className=" md:text-white/10 text-8xl font-bold  tracking-[15px]   ">
            KNOW
          </h3>
          <div className="flex  min-w-fit items-center justify-center flex-col absolute">
            <h3 className="text-white/90 text-5xl   font-bold font-sans mt-3 mb-3  ">
              ABOUT <span className="text-[#ffb400]">ME</span>
            </h3>
            <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
          </div>
        </header>

        {/* main work =====================================*/}
        <main className="lg:max-w-4xl px-2 md:px-7  xl:max-w-6xl mx-auto ">
          {/* <div className="w-full h-20 relative flex items-center"></div> */}

          <div className=" flex-col flex md:flex-row mt-12 md:mt-14 gap-6 lg:gap-10   ">
            <div className=" flex items-center md:items-start justify-center md:justify-start ">
              <Image
                priority
                width={1000}
                height={1000}
                src="https://i.postimg.cc/SRpgkrgX/ahsan.jpg"
                alt="the person"
                className=" h-36 w-36 md:h-96  md:w-[30rem] object-cover rounded-full md:rounded-sm "
              />
            </div>
            <div className="text-white mt-5 w-full ">
              <p className="text-[#ffb400] text-xl font-serif">
                Who am i <span className=" text-3xl">?</span>
              </p>
              <p className="text-xl md:text-3xl mt-3 font-sans font-semibold">
                I&apos;m Ahsan Ullah, a front-end developer.
              </p>
              <p className="mt-6 font-sans text-sm md:text-base text-gray-300">
                I&apos;m passionate about creating user-friendly web
                applications. When I&apos;m not coding, I enjoy playing video
                games, which enhance my creativity and problem-solving skills.
                My passion for gaming and technology inspires me to blend fun
                with functionality in my projects, making coding both enjoyable
                and rewarding.
              </p>
              <span className="h-[1px] w-full bg-slate-600 inline-flex" />
              <div className=" grid md:grid-cols-2  gap-1   mt-4">
                <div>
                  <p className="text-sm md:text-base">
                    Name :{" "}
                    <span className=" text-white/80">Ahsanullah Mubin</span>
                  </p>
                </div>
                <div>
                  <p className=" text-sm md:text-base ">
                    From :{" "}
                    <span className="text-sm text-gray-300">
                      Barishal,Bangladesh
                    </span>
                  </p>
                </div>
                <div className=" text-sm md:text-base ">
                  <p className="">
                    Age : <span className=" text-gray-300">20</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base">
                    Email :{" "}
                    <span className="text-gray-300">
                      ahsanullah.mail2@gmail
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-5 mb-5 flex items-center justify-start flex-col md:flex-row  space-y-5 space-x-5">
                {" "}
                <button
                  className="border ms-6 md:ms-0 text-[#ffb400] hover:text-white border-[#ffb400] hover:bg-[#ffb400] w-32 p-2 flex items-center justify-center rounded-full font-mono  duration-300
      
       cursor-pointer mt-4
      "
                >
                  Follow
                </button>
                <span className="h-[2px] w-14 bg-white inline-flex" />
                <ul className="  flex  gap-4 ">
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
              </div>
            </div>
          </div>
         
         
        </main>
      </div>
    </>
  );
}
