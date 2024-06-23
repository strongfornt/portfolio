import ContactForm from "@/components/ContactForm/ContactForm";
import Container from "@/components/Container/Container";
import { Contact } from "@/constants/data";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

export const metadata = {
    title: "Contacts | Portfolio",
    description: "Contacts page",
  };

export default function ContactPage() {
  // console.log(Contact);
  return (
    <>
      <div className="" >
        <Container className="  relative">
        
          {/* <div className="w-full md:h-16 relative flex items-center"></div> */}
          <div className="  hidden md:flex mt-6 lg:mt-12    items-center justify-center  ">
            <h3 className=" md:text-white/10 text-8xl font-bold  tracking-[15px]  translate-x-[25%] ">
              CONTACT
            </h3>
            <div className="flex  min-w-fit items-center justify-center flex-col -translate-x-[95%]">
              <h3 className="text-white/90 text-5xl   font-bold font-sans mt-3 mb-3 flex gap-2">
                GET IN <p className="text-[#ffb400]">TOUCH</p>
              </h3>
              <span className="h-[3px] w-16 bg-[#ffb400] inline-flex   " />
            </div>
          </div>
          <div className="flex-row lg:flex items-center lg:max-w-4xl  xl:max-w-5xl mx-auto  justify-center  gap-8 lg:gap-16 px-7   md:px-7 lg:px-0 mt-8  md:mt-14 mb-6 ">
            <div className="text-white/80  ">
              <div className="text-white max-w-lg lg:max-w-sm ">
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
            <div className=" mt-12  flex-1  ">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
