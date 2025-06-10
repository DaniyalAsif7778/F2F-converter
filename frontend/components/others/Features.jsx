import React from "react";
import { SiConvertio } from "react-icons/si";
import { IconCloudUpload } from "@tabler/icons-react";
import { IconRefresh } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconShieldHalfFilled } from "@tabler/icons-react";
import { IconDevices } from "@tabler/icons-react";
function Features() {
  return (
    <div className="w-full h-max grid grid-cols-1 grid-rows-6  place-content-center place-items-center gap-20 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg-grid-rows-2 xl:grid-cols-3 xg-grid-rows-2">


      <div className=" w-[521px] sm:w-[240px] flex flex-col  gap-3  justify-top items-center">
        <IconRefresh
          stroke={1.25}
          className="text-theme h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
          300+ formats supported
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal text-[14px]]">
          We support more than 25600 different conversions between more than
          300 different file formats. More than any other converter.
        </p>
      </div>
      <div className=" w-[521px] sm:w-[240px]  flex flex-col  gap-3   justify-top justify-center items-center">
        <IconStar
          stroke={1.25}
          className="text-red-500 h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
          Fast and easy
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal text-[14px]]">
          Just drop your files on the page, choose an output format and
          click "Convert" button. Wait a little for the process to complete.
          We aim to do all our conversions in under 1-2 minutes.
        </p>
      </div>
      <div className=" w-[521px] sm:w-[240px]  flex flex-col  justify-top  gap-3 justify-center items-center">
        <IconCloudUpload
          stroke={1.25}
          className="text-red-600 h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
          In the cloud
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal text-[14px]]">
          All conversions take place in the cloud and will not consume any
          capacity from your computer.
        </p>
      </div>



      <div className=" w-[521px]  sm:w-[240px]  flex flex-col  justify-top  gap-3  justify-center items-center">
        <IconSettings
          stroke={1.25}
          className="text-red-500 h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
          Custom settings
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal text-[14px]]">
          Most conversion types support advanced options. For example with a
          video converter you can choose quality, aspect ratio, codec and
          other settings, rotate and flip.
        </p>
      </div>
      <div className=" w-[521px]  sm:w-[240px]  flex flex-col  justify-top  gap-3  justify-center items-center">
        <IconShieldHalfFilled
          stroke={1.25}
          className="text-red-500 h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
          Security guaranteed
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal text-[14px]]">
          We delete uploaded files instantly and converted ones after 24
          hours. No one has access to your files and privacy is 100%
          guaranteed. Read more about security.
        </p>
      </div>
      <div className=" w-[521px] sm:w-[440px]  flex flex-col   justify-top justify-center  gap-3  items-center">
        <IconDevices
          stroke={1.25}
          className="text-red-500 h-[40px] w-[40px]"
        />
        <h1 className="text-[#000] text-[16px] tracking-normal leading-[22.4px]">
           All devices supported
        </h1>
        <p className="w-[400px] text-center text-[#494949] leading-[22.4px] tracking-normal sm:text-[14px]">
          Convertio is browser-based and works for all platforms. There is
          no need to download and install any software.
        </p>
      </div>


    </div>
  );
}

export default Features;
