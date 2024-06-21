import ContactForm from "@/components/ContactForm/ContactForm";
import Container from "@/components/Container/Container";
import { Contact } from "@/constants/data";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

export default function ContactPage() {
  // console.log(Contact);
  return (
    <>
      <div>
        <Container className=" place-items-start md:place-items-center relative">
          <header className="md:hidden flex items-center justify-between text-white bg-[#343a40;] h-16 fixed w-full px-7 md:px-o  ">
            <h3 className="text-white/90 text-3xl  font-bold font-sans   flex gap-2">
              GET IN <p className="text-[#ffb400]">TOUCH</p>
            </h3>
            <p>
              <RiMenu3Fill />
            </p>
          </header>
          <div className="w-full md:h-20 relative flex items-center"></div>
          <div className=" hidden md:flex items-center justify-center  ">
            <h3 className=" md:text-white/10 text-8xl font-bold  tracking-[15px]  translate-x-[25%] ">
              CONTACT
            </h3>
            <div className="flex items-center justify-center flex-col -translate-x-[95%]">
              <h3 className="text-white/90 text-5xl  font-bold font-sans mt-3 mb-3 flex gap-2">
                GET IN <p className="text-[#ffb400]">TOUCH</p>
              </h3>
              <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
            </div>
          </div>
          <div className="flex-row md:flex gap-16 px-7 md:px-0 mt-20 md:mt-16 ">
            <div className="text-white/80  ">
              <div className="text-white w-72 ">
                <h3 className="text-2xl font-semibold font-sans mb-3">
                  DON&apos;T BE SHY!
                </h3>
                <p className="text-sm font-sans text-white/80 mb-5">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <span className="h-[2px] w-full inline-flex bg-[#ffb400] mb-8" />
              </div>
              <div className="">
                {Contact.map((item) => (
                  <a
                    href={item?.path}
                    key={item.title}
                    target="_blank"
                    className="flex items-center gap-6 p-3 mb-4  w-72 rounded-md text-sm bg-gray-500/10"
                  >
                    <span className="text-[#ffb400] text-lg">
                      {<item.icon />}
                    </span>
                    <span className="font-sans">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className=" mt-12  ">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
