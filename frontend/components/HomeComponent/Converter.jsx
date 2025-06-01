"use client";
import React, { Fragment, useState } from "react";
import ConverterButton from "./ConverterButton";
import { IconBrandGoogleDrive } from "@tabler/icons-react";
import { IconFolderSearch } from '@tabler/icons-react';
import { FaDropbox } from "react-icons/fa6";

export default function Converter() {
  const [uploadingOption, setUploadingOption] = useState(0);
const [uploadingFile,setUploadingFile]= useState(0);

const fileUploaderHandler=()=>{
       const fileInput= document.createElement("input")
}
  let uploadingOptions = [
    {
      icon: IconFolderSearch,
      title: "From Local",
      clickHandler: () => { alert("asdas") },

      styling: ""
    },
    {
      icon: FaDropbox,
      title: " From DropBox",
      clickHandler: () => { alert("das") }
    },
    {
      icon: IconBrandGoogleDrive,
      title: "From Google Drive",
      clickHandler: () => { alert("asdas") }
    },
  ];

  return (
    <Fragment>
      <div className="w-[100vw] h-[500px]  flex flex-col  gap-20  justify-center items-center   ">
        <div className="flex flex-col ">
          <h1 className="px-8 text-theme  text-2xl">File Converter</h1>
          <h4>Convert your files to any format</h4>
        </div>
        <div className="Converter relative z-1 w-[80vw] h-[200px] max-w-[1000px]  aspect-[4/1] border flex justify-center items-center bg-[#3C3C3C] overflow-hidden">
          {/* BG Pattren */}
          {/* <div className="w-full h-full absolute top-0 left-0 grid grid-cols-81 grid-rows-23 gap-0 -z-10 bg-[#3C3C3C] ">
            {Array.from({ length: 1863 }).map((_, i) => (
              <div
                key={i}
                className={`w-full aspect-square bg-checker-pattern ${(i % 2 == 0) ? "bg-[#3C3C3C]" : "bg-[#383838]"}`}
              />
            ))}
          </div> */}

          {/* BG Pattrens */}
        <div className="h-full w-full  absolute -z-10 top-0 left-0 gap-0 grid grid-rows-23 grid-cols-81     ">
            {
             Array.from({length:1863}).map((_,i)=>(
               
              <div key={i}
              className={`w-[10] aspect-1/1 ${(i%2==0) ? "bg-[#3C3C3C]" : "bg-[#383838]"} ` }
              >
              
              </div>

             ))}      
          </div>

          <div onClick={uploadingOptions[uploadingOption].clickHandler} className="w-[300px] h-fill bg-red-500 text-white flex justify-between p-4 rounded-[7px]">
            <p className="DropDown">{uploadingOptions[uploadingOption].title}</p>
            <div className="flex items-center justify-center gap-5">
              {
                uploadingOptions.map(({ icon: Icon, ...option }, idx) => (
                  <Icon
                    key={idx}
                    onMouseOver={() => setUploadingOption(idx)}
                    onMouseLeave={() => setUploadingOption(0)}

                  />
                ))
              }
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <div className="ADD-SECTION-2   h-[23%] w-[100%]  bg-amber-800"></div> */}
      </div>
    </Fragment>
  );
}
