import React, { Fragment } from "react";
import ConverterButton from "./ConverterButton";
export default function Converter() {
  let TextChanger = [
    {
      tittle: " From DropBox",
    },
    {
      tittle: "From Google Drive",
    },
  ];
  return (
    <Fragment>
      <div className="w-[100vw] h-[70vh]  flex flex-col gap-2  justify-end  bg-amber-400">
        <div className="h-[23%] w-[100%] bg-amber-800"></div>

        <div className="Converter h-[23%] w-[100%] justify-center bg-amber-800">
          <div className="h-20 w-96 flex  flex-row  "  >
          <div className="">
            <ConverterButton />
          </div>
          <div>
            <div>
              <div className="DropDown">{TextChanger[0].tittle}</div>
              <div className="GoogleDrive"> {TextChanger[1].tittle}</div>
            </div>
            <div></div>
          </div>
          </div>
        </div>
        <div className="ADD-SECTION-2   h-[23%] w-[100%]  bg-amber-800"></div>
      </div>
    </Fragment>
  );
}
