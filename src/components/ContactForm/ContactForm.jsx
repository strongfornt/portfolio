"use client";

import React from "react";

export default function ContactForm() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="">
        <div className="grid  lg:grid-cols-2 gap-5">
          <div  >
            <input
              type="text"
              placeholder="Your name"
              className="w-full  rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full  rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400]"
            />
          </div>

          <div className=" lg:col-span-2">
            <textarea
              rows={6}
              cols={9}
              placeholder="Message"
              className=" rounded-md ring-1 ring-gray-200/40 px-4 py-2 outline-none bg-gray-500/10 focus:right-2 focus:ring-[#ffb400] w-full"
            />
            <button
              type="submit"
              className="inline-block self-end text-[#ffb400] text-lg font-semibold rounded-lg px-6 py-2 uppercase hover:bg-[#ffb400] hover:text-white border border-[#ffb400]
             duration-300 mt-5 mb-5
            "
            >
              send message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
