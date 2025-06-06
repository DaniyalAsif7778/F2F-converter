import React from "react";
import { SiConvertio } from "react-icons/si";

function Features() {
  return (
    <div className="bg-theme w-full h-[600px]">
      <div className="flex flex-col max-w-[1200px] h-auto bg-amber-400">
        <div className="flex  ">
          <div className=" w-[200px] flex flex-col justify-center items-center">
            <SiConvertio className="text-white text-3xl" />

            <h1>Fast conversion</h1>
            <p className="text-center">
              Convertio is a cloud-based solution which means that conversion is
              done on our side and the tool doesn't slow down your operating
              system.
            </p>
          </div>
        </div>
        <div>
         </div>
      </div>
    </div>
  );
}

export default Features;
