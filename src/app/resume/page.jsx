import React from "react";

import { Service } from "@/constants/data";

import { ReactElement } from "react";
import { backhome } from "@/constants/data";
import Link from "next/link";
import { ImArrowRight } from "react-icons/im";
import { PiDownloadBold, PiHandbagSimpleFill } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaEnvelope, FaHome } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { RxResume } from "react-icons/rx";

import Container from "@/components/Container/Container";

export const metadata = {
  title: "Resume | Portfolio",
  description: "Resume page",
};

export default function page() {
  return (
    <>
      <div className="relative  ">
        <Container className="">
          <header className="  hidden md:flex mt-6 lg:mt-12    items-center justify-center ">
            <h3 className=" md:text-white/10 text-8xl font-bold  tracking-[15px]   ">
              SUMMARY
            </h3>
            <div className="flex  min-w-fit items-center justify-center flex-col absolute">
              <h3 className="text-white/90 text-5xl   font-bold font-sans mt-3 mb-3  ">
                RESU<span className="text-[#ffb400]">ME</span>
              </h3>
              <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
            </div>
          </header>
          <div className="grid px-7 md:px-7 lg:max-w-4xl  xl:max-w-6xl mx-auto grid-rows-1 md:grid-cols-2 gap-8 md:gap-14 mt-8 md:mt-14 mb-10 md:mb-0  ">
            <div className="text-white/90  ">
              <p className="mb-5 font-semibold font-sans text-3xl">
                My Education
              </p>
              <div className="bg-gray-500/10 border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border border-gray-500/10 border-b-gray-500 relative  ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">
                  Computer Science
                </p>
                <p className="text-sm text-teal-500 font-sans">
                  Barisal Polytechnic / 2020-2023
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
              <div className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border  border-gray-500/10 border-b-gray-500 ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">H.S.C</p>
                <p className="text-sm text-teal-500 font-sans">
                  Akota Degree College / 2021-2022{" "}
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
              <div className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border border-gray-500/10  ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">S.S.C</p>
                <p className="text-sm text-teal-500 font-sans">
                  Udoypur Maddhomik School
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
            </div>
            <div className="text-white/90 -z-10  ">
              <p className="mb-5 font-semibold font-sans text-3xl">
                My Exprience
              </p>
              <div className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border border-gray-500/10 border-b-gray-500 ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">
                  Web Developer
                </p>
                <p className="text-sm text-teal-500 font-sans">
                  PepoleNTech / 2022-2023
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
              <div className="bg-gray-500/10 relative border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border border-gray-500/10 border-b-gray-500 ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">Web Designer</p>
                <p className="text-sm text-teal-500 font-sans">
                  PeopleNTech / 2022-2023{" "}
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
              <div className="bg-gray-500/10  relative border-l-[#ffb400] border-l-2 rounded-r-md p-10 xl:p-12 space-y-2 border border-gray-500/10   ">
                <span className="absolute left-0 mt-4 text-[#ffb400] text-2xl">
                  <ImArrowRight />
                </span>
                <p className="font-semibold font-sans text-2xl">
                  Logo Designer
                </p>
                <p className="text-sm text-teal-500 font-sans">
                  Discord / 2020-2021
                </p>
                <p className="text-sm text-white/80 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores neque reprehenderit corrupti!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-8 md:mb-8 md:my-10">
            <Link href="/AhsanResume.pdf" passHref >
            <button
            as="a" download="Ahsan_Resume.pdf"
             target="_blank"
              className=" text-[#ffb400] hover:text-white hover:bg-[#ffb400] duration-300 p-3 rounded-lg  border border-[#ffb400] flex items-center justify-center gap-2
              uppercase text-lg font-semibold
              "
            >
              Download Resume <PiDownloadBold />
            </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
