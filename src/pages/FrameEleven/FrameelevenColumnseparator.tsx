import { Text, Img } from "../../components";
import React from "react";

export default function FrameelevenColumnseparator() {
  return (
    <div className="flex flex-col gap-1.5 px-3.5">
      <div className="h-[5px] bg-gray-300" />
      <div className="flex justify-center">
        <div className="flex flex-1 gap-[15px]">
          <Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[24px] w-[24px]" />
          <Img src="images/img_settings.svg" alt="Settings" className="h-[24px] w-[24px]" />
          <Img src="images/img_camera.svg" alt="Camera" className="h-[24px] w-[24px]" />
          <Img src="images/img_voice.svg" alt="Voice" className="h-[24px] w-[24px]" />
        </div>
        <Text as="p" className="flex items-center justify-center rounded-[12px] bg-gray-300_01 px-[18px] py-0.5">
          Post
        </Text>
      </div>
    </div>
  );
}
