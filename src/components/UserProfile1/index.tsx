import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userHandle?: React.ReactNode;
  followText?: React.ReactNode;
}

export default function UserProfile1({
  userName = "Name lastname",
  userHandle = "@studentuser_1",
  followText = "follow",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center flex-1`}>
      <div className="flex flex-1 items-center justify-center gap-4">
        <Img src="images/img_group_6.png" alt="Name Lastname" className="h-[50px] w-[50px] object-cover" />
        <div className="flex flex-1 flex-col items-start gap-1">
          <Text size="textmd" as="p">
            {userName}
          </Text>
          <Text as="p">{userHandle}</Text>
        </div>
      </div>
      <div className="flex w-[26%] justify-center rounded-[12px] bg-blue-200">
        <Text as="p">{followText}</Text>
      </div>
    </div>
  );
}
