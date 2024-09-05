import { CloseSVG } from "../Input/close";
import { Img, Text, Input } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-end items-center w-[82%] lg:w-full md:w-full mb-[50px]`}
    >
      <Input
        name="search"
        placeholder={`Type here...`}
        value={searchBarValue}
        onChange={(e) => setSearchBarValue(e.target.value)}
        prefix={
          <div className="flex h-[16px] w-[16px] items-center justify-center">
            <Img src="images/img_search_blue_gray_400_02.svg" alt="Search" className="my-0.5 h-[16px] w-[16px]" />
          </div>
        }
        suffix={
          searchBarValue?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} /> : null
        }
        className="flex h-[42px] w-[36%] items-center justify-center gap-2.5 rounded-lg bg-white-a700_01 px-3 text-[14px] text-blue_gray-400_01 md:w-full"
      />
      <div className="ml-[324px] flex w-[12%] items-center justify-between gap-5 md:ml-0 md:w-full">
        <div className="flex items-center gap-2">
          <a href="#">
            <Img src="images/img_icons_solid_white_a700_01.svg" alt="Iconssolid" className="h-[16px] w-[16px]" />
          </a>
          <Text as="p" className="!text-white-a700_01">
            Sign-in
          </Text>
        </div>
        <a href="#">
          <Img src="images/img_search.svg" alt="Search" className="h-[16px] w-[16px]" />
        </a>
        <a href="#">
          <Img src="images/img_icons_solid_white_a700_01_16x16.svg" alt="Iconssolid" className="h-[16px] w-[16px]" />
        </a>
      </div>
    </header>
  );
}
