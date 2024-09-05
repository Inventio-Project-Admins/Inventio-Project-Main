import { Button, Heading, Img, Text } from "./..";
import React from "react";
import { SubMenu, MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="292px !important"
      className={`${props.className} flex flex-col h-screen mt-[-114px] ml-[184px] pt-[22px] top-0 md:ml-0 sm:pt-4 !sticky !border-black-900 !border-[0.25px] !border-solid bg-white-a700_01 overflow-auto rounded-[12px] md:hidden`}
    >
      <div className="mx-7 flex flex-col items-center gap-4 self-stretch">
        <Img src="images/img_sidebar_logo.png" alt="Sidebarlogo" className="h-[76px] w-[114px] object-contain" />
        <Img src="images/img_separator.png" alt="Separator" className="h-px w-full object-cover" />
      </div>
      <div className="mx-2 mt-4 flex self-stretch px-6 sm:px-5">
        <Heading size="headingxs" as="p" className="!font-roboto !text-blue_gray-400">
          SECTIONS
        </Heading>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "18px",
            color: "#172b4d",
            fontWeight: 400,
            fontSize: "14px",
          },
        }}
        className="mt-2 w-full self-stretch"
      >
        <SubMenu
          icon={<Img src="images/img_icons_line.svg" alt="Iconsline" className="h-[16px] w-[16px]" />}
          label="Section 1"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_line_light_blue_400.svg" alt="Iconsline" className="h-[16px] w-[16px]" />}
          label="Section 2"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_solid.svg" alt="Iconssolid" className="h-[16px] w-[16px]" />}
          label="Section 3"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_solid_light_blue_a700.svg" alt="Iconssolid" className="h-[16px] w-[16px]" />}
          label="Section 4"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_line.svg" alt="Iconsline" className="h-[16px] w-[16px]" />}
          label="Section 1"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_line_light_blue_400.svg" alt="Iconsline" className="h-[16px] w-[16px]" />}
          label="Section 2"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
        <SubMenu
          icon={<Img src="images/img_icons_solid.svg" alt="Iconssolid" className="h-[16px] w-[16px]" />}
          label="Section 3"
        >
          <MenuItem>Submenu Item</MenuItem>
        </SubMenu>
      </Menu>
      <div className="mt-[72px] flex flex-col gap-4 self-stretch">
        <Img src="images/img_separator.png" alt="Separator" className="mx-7 h-px object-cover" />
        <div className="px-2">
          <div className="mb-9 flex flex-col items-center gap-2 px-14 md:px-5">
            <Img src="images/img_image_3.png" alt="Imagethree" className="h-[88px] w-[84%] object-contain" />
            <Heading as="p" className="!font-bold !text-gray-800">
              Need help?
            </Heading>
            <Button className="flex h-[30px] min-w-[122px] flex-row items-center justify-center rounded-lg bg-light_blue-a700 px-4 text-center text-[12px] font-bold tracking-[-0.40px] text-white-a700_01 shadow-xs">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
