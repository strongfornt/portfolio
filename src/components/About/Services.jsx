import React from 'react'

export default function Services() {
  return (
    <>
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
    </>
  )
}
