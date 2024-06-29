
"use client"
import React from 'react'
import { Typewriter } from "react-simple-typewriter";
export default function ContentHome() {
    const typing = [
        "Jr. Front-End Developer",
        "React.js Developer",
        "Photographer",
      ];
  return (
    <>
         <div className="flex items-center gap-3  ">
                <p className="text-3xl  font-sans  gap-2 text-white ">A</p>
                <div className="text-teal-500 font-mono text-lg -z-1  ">
                  <Typewriter
                    words={typing}
                    loop={100}
                    cursor
                    cursorColor="white"
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    cursorBlinking

                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </div>
              </div>
    </>
  )
}
