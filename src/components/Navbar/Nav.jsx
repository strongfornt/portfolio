"use client";
import React, { useState } from "react";
import "./style.css";
import Container from "../Container/Container";
import Image from "next/image";
import Logo from "../../assets/logo/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdNoteAlt } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { navigation, sidebar } from "@/constants/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";
import Headroom from "react-headroom";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  const pathName = usePathname();

  return (
    <>
      <div className=" w-full relative  ">
        <div className=" hidden lg:flex   md:top-40   ">
          <Link href={"/"}>
            <div
              className={`${
                pathName === "/" && "bg-yellow-500"
              } border cursor-pointer top-[27%] group duration-300 w-[40px] h-[40px] right-2 fixed z-30  rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center`}
            >
              <FaHome className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
              <span className="translate-x-14 text-sm">HOME</span>
            </div>
          </Link>
          <Link href={"/aboutme"}>
            <div
              className={`${
                pathName === "/aboutme" && "bg-yellow-500"
              } border cursor-pointer top-[36%]  group duration-300 w-[40px] h-[40px] right-2  fixed z-30 rounded-[100px]  overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center`}
            >
              <FaUser className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
              <span className="translate-x-14 text-sm">ABOUT</span>
            </div>
          </Link>
          <Link href={"/resume"}>
            <div
              className={`${
                pathName === "/resume" && "bg-yellow-500"
              } border cursor-pointer top-[45%]  group duration-300 w-[40px] h-[40px] right-2  fixed z-30 rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center`}
            >
              <MdNoteAlt className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute   " />
              <span className="translate-x-14 text-sm"> RESUME</span>
            </div>
          </Link>
          <Link href={"/portfolio"}>
            <div
              className={`${
                pathName === "/portfolio" && "bg-yellow-500"
              } border cursor-pointer top-[54%]  group duration-300 w-[40px] h-[40px] right-2  fixed z-30  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center`}
            >
              <BiSolidShoppingBagAlt className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
              <span className="translate-x-16 group-hover:translate-x-12 text-sm">
                {" "}
                PORTFOLIO
              </span>
            </div>
          </Link>

          <Link href={"/contact"}>
            <div
              className={`${
                pathName === "/contact" && "bg-yellow-500"
              } border cursor-pointer top-[63%]  group duration-300 w-[40px] h-[40px] right-2  fixed z-30  rounded-[100px] overflow-hidden hover:w-32 hover:justify-between  text-center text-white  text-xl   justify-evenly flex items-center`}
            >
              <FaEnvelope className="group-hover:translate-x-3  rounded-[100px] text-lg   absolute text-white  " />
              <span className="translate-x-14 text-sm"> CONTACT</span>
            </div>
          </Link>
        </div>
        {/* responsive menu from here */}
        <Headroom>
          <div className=" hidden md:flex  justify-end mr-2  mt-2 lg:hidden  ">
            <button
              onClick={onOpen}
              className=" text-white text-2xl rounded-sm shadow-lg bg-[#343a40] p-2 "
            >
              <RiMenu3Fill />
            </button>
          </div>
        </Headroom>
        <Headroom>
          <header className="flex md:hidden bg-[#343a40] h-16 items-center justify-between px-2  ">
            {pathName === "/" && (
              <div>
                <Image src={Logo} alt="logo" className="h-32 w-32 " />
              </div>
            )}
            {pathName === "/resume" && (
              <h3 className="text-white/90 text-3xl  font-bold font-sans flex ">
                RESU<p className="text-[#ffb400]">ME</p>
              </h3>
            )}
            {pathName === "/contact" && (
              <h3 className="text-white/90 text-3xl  font-bold font-sans   flex gap-2">
                GET IN <p className="text-[#ffb400]">TOUCH</p>
              </h3>
            )}

            <button onClick={onOpen} className=" text-white text-2xl ">
              <RiMenu3Fill />
            </button>
          </header>
        </Headroom>
        {/* dropdown manu start here ======================================*/}
        <RadioGroup defaultValue={placement}></RadioGroup>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent className="css-79z5gx  ">
            <DrawerBody>
              <ul className=" flex flex-col px-2 lg:hidden   top-0  items-start bg-[#343a40]  min-w-full font-sans text-lg gap-2 text-md font-semibold uppercase  ">
                <li className="w-full h-16 flex justify-end  ">
                  <button onClick={onClose} className="text-white text-2xl   ">
                    <AiOutlineClose />
                  </button>
                </li>
                {sidebar.map((item) => (
                  <div
                    onClick={onClose}
                    className=" min-w-full"
                    key={item?.title}
                  >
                    <Link href={item?.href}>
                      <div
                        className={`flex items-center gap-3 text-white w-full ${
                          pathName === item.href && "text-yellow-500"
                        }`}
                      >
                        <li className="">{<item.icon />}</li>

                        <li className="hover:text-slate-400 relative group overflow-hidden   ">
                          {item?.title}
                        </li>
                      </div>

                      <span className="h-[2px] w-full inline-flex bg-gray-500/20" />
                    </Link>
                  </div>
                ))}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {/* dropdown manu  ====================================== end */}

        {pathName === "/" && (
          <div className=" hidden relative md:flex">
            <Image src={Logo} alt="logo" className="h-32 w-32 fixed -top-5" />
          </div>
        )}
      </div>
    </>
  );
}
