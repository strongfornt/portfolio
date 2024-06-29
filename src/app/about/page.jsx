import { Service } from "@/constants/data";
import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

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
        <main className="lg:max-w-4xl px-2 md:px-7  xl:max-w-6xl mx-auto " >
          <div className="w-full h-20 relative flex items-center"></div>

          <div className=" flex-col flex md:flex-row mt-6 md:mt-12 gap-6 lg:gap-10   ">
            <div className=" flex items-center md:items-start justify-center md:justify-start ">
              <Image
                priority
                width={1000}
                height={1000}
                src="https://i.postimg.cc/SRpgkrgX/ahsan.jpg"
                alt="the person"
                className=" h-36 w-36 md:h-96  md:w-[30rem] object-cover rounded-full md:rounded-none "
              />
            </div>
            <div className="text-white mt-5 w-full ">
              <p className="text-[#ffb400] text-xl font-serif">
                Who am i <span className=" text-3xl">?</span>
              </p>
              <p className="text-2xl md:text-4xl mt-3 font-sans font-semibold">
                I&apos;m Ahsan Ullah,a video Game lover and react Learner.
              </p>
              <p className="mt-6 font-sans text-md text-white/80">
                Basically i like to play video game in my free time.On the other
                hand i also like to do coding.So i can do it with fun. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Iure, dicta!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, consequuntur. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dicta et quaerat sed repudiandae
                dolore exercitationem dolor illo, dolorem molestiae vel nisi
                doloribus quisquam. Architecto nobis laudantium officiis
                aspernatur, libero excepturi!
              </p>
              <span className="h-[1px] w-full bg-slate-600 inline-flex" />
              <div className=" flex-col md:flex md:flex-row items-center justify-start gap-28 mt-8">
                <div className="space-y-3">
                  <p className="">
                    Name :{" "}
                    <span className="text-sm text-white/80">
                      Ahsanullah Mubin
                    </span>
                  </p>
                  <p className="">
                    Email :{" "}
                    <span className="text-sm text-white/80">
                      aktershoaib574@gmail.com
                    </span>
                  </p>
                </div>
                <div className="space-y-3 mt-3 md:mt-0">
                  <p className="">
                    Age : <span className="text-sm text-white/80">20</span>
                  </p>
                  <p className="">
                    From :{" "}
                    <span className="text-sm text-white/80">
                      Barishal,Bangladesh
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-5 mb-5 flex items-center justify-start flex-col md:flex-row  space-y-5 space-x-5">
                <a href="/resume.pdf">
                  {" "}
                  <button
                    className="border ms-6 md:ms-0 text-[#ffb400] hover:text-white border-[#ffb400] hover:bg-[#ffb400] w-32 p-2 flex items-center justify-center rounded-full font-mono  duration-300
      
       cursor-pointer mt-4
      "
                  >
                    Follow
                  </button>
                </a>
                <span className="h-[2px] w-14 bg-white inline-flex" />
                <ul className="  flex  gap-4 ">
                  <li className=" text-md flex items-center justify-center bg-white text-[#3B5998] hover:text-white hover:bg-[#3B5998] duration-300 rounded-full h-6 w-6 cursor-pointer relative overflow-hidden hover:overflow-visible  hover:transition-all  ">
                    <FaFacebookF />
                    <span className="-translate-y-[100%] inline-flex absolute -top-3 bg-[#3B5998] text-white py-1 px-2 text-sm font-serif  rounded">
                      <span className="h-[10px] w-[10px] inline-flex bg-[#3B5998]   absolute top-[23px] left-[44%] rotate-45" />
                      Facebook
                    </span>
                  </li>

                  <li className="  text-md flex items-center justify-center duration-300  text-[#46C1F6] hover:text-white hover:bg-[#46C1F6] bg-white rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible">
                    <AiOutlineTwitter />
                    <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#46C1F6]  text-white py-1 px-2 text-sm font-serif rounded">
                      <span className="h-[10px] w-[10px] inline-flex bg-[#46C1F6] absolute top-[23px] left-[44%] rotate-45" />
                      Twitter
                    </span>
                  </li>
                  <li className="  text-md flex items-center justify-center duration-300 hover:text-white  text-[#e1306c] bg-white hover:bg-[#e1306c] rounded-full h-6 w-6  cursor-pointer relative overflow-hidden hover:overflow-visible ">
                    <AiFillInstagram />
                    <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#e1306c] text-white py-1 px-2 text-sm font-serif rounded">
                      <span className="h-[10px] w-[10px] inline-flex bg-[#e1306c] absolute top-[23px] left-[44%] rotate-45" />
                      Instagram
                    </span>
                  </li>
                  <li className="  text-md flex items-center justify-center duration-300 hover:text-white hover:bg-[#333] text-[#333] bg-white rounded-full h-6 w-6  relative cursor-pointer overflow-hidden hover:overflow-visible">
                    <AiFillGithub />
                    <span className="-translate-y-[100%] inline-flex absolute  -top-3 bg-[#333]  text-white py-1 px-2 text-sm font-serif rounded">
                      <span className="h-[10px] w-[10px] inline-flex bg-[#333] absolute top-[23px] left-[44%] rotate-45" />
                      Github
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-20 relative flex items-center"></div>
          <div className="flex items-center justify-center flex-col gap-3">
            <p className="text-white/80 text-sm font-thin">
              Services i offer to my clients
            </p>
            <p className="text-white text-4xl font-bold font-sans">
              MY SERVIC<span className="text-[#ffc107;]">ES</span>
            </p>

            <span className="h-[3px] w-16 inline-flex bg-[#ffb400] mt-5" />
          </div>
          <div className="grid md:grid-cols-3 grid-row gap-10 mt-12 p-10 ">
            {Service.map((item) => (
              <div
                key={item?.title}
                className="  bg-[#131313] p-10  rounded-md shadow-md border border-[#131313] border-b-2 hover:border-b-[#ffb400] duration-300
    
    "
              >
                {
                  <span className="text-[#ffb400] text-4xl animate-pulse">
                    {<item.icon />}
                  </span>
                }
                <p className="text-white text-xl font-sans font-semibold mt-5">
                  {item?.title}
                </p>
                <p className="text-sm text-slate-100 font-sans mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
