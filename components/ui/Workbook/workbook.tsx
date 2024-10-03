import React from "react";
import { DownloadIcon, EditIcon } from "../Icons";
import { WorkbookProps } from "./types";

const Workbook = ({ data, onDownload, onEdit }: WorkbookProps) => {
  return (
    <div className="flex flex-col items-center justify-between border border-gray_02 w-[220px] h-[270px] py-[24px]">
      <div className="flex flex-col gap-[12px]">
        <div className="heading2 flex justify-center">{data.title}</div>
        <div className="flex flex-col">
          <div className="body2 text-gray_05 m-auto">{data.questionCount}문항</div>
        </div>
      </div>
      <div className="caption text-gray_05 m-auto">{data.createdAt}</div>
      <div className="flex gap-[8px]">
        <button
          className="w-[50px] h-[50px] rounded-full bg-white drop-shadow-md flex items-center justify-center"
          onClick={onDownload}
        >
          <DownloadIcon color="navy" />
        </button>
        <button
          className="w-[50px] h-[50px] rounded-full bg-white drop-shadow-md flex items-center justify-center"
          onClick={onEdit}
        >
          <EditIcon color="navy" />
        </button>
      </div>
    </div>
  );
};

Workbook.displayName = "Workbook";

export { Workbook };
