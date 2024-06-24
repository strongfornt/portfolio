import ContentHome from "@/components/Home/ContentHome";
import Image from "next/image";


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
          className=" min-h-screen object-cover opacity-70 -z-10 "
        >
          <source src="/motoion.MP4" type="video/mp4" />
        </video>
       
      </div>
      <div className="absolute bg-black/80 z-10 min-h-screen w-full  " >
     
        </div>
      {/* others components start from here================================== */}
      <section className="z-10 flex flex-col justify-center items-center min-h-screen  ">
     <div className="z-20 " >
     <h5 className=" text-sm font-thin  text-white">
          Hey! There,
        </h5>

        <h1 className=" font-serif text-white  text-2xl font-semibold justify-center  md:justify-start">
          I&apos;m <span className="font-mono">Ahsan Ullah___</span>
        </h1>
       <ContentHome/>


       <div className=" mt-4 flex justify-center z-20">
              <a href="mailto:ahsanullah.mail2@gmail.com">
                <button className="border font-semibold font-mono border-[#ffb400] w-32 p-2 rounded-full text-[#ffb400] hover:text-white/80 hover:bg-[#ffb400]  uppercase text-lg   duration-300">
                  Hire Me
                </button>
              </a>
            </div>

     </div>
    
      </section>
    </section>
  );
}
