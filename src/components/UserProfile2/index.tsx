import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userHandle?: React.ReactNode;
  rejectButton?: React.ReactNode;
  acceptButton?: React.ReactNode;
}

export default function UserProfile2({
  userName = "Name lastname",
  userHandle = "@studentuser_1",
  rejectButton = "Reject",
  acceptButton = "Accept",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 flex-1`}>
      <div className="flex flex-1 items-center justify-center gap-4">
        <Img src="images/img_group_6.png" alt="Name Lastname" className="h-[50px] w-[50px] object-cover" />
        <div className="flex flex-1 flex-col items-start gap-1">
          <Text size="textmd" as="p">
            {userName}
          </Text>
          <Text as="p">{userHandle}</Text>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <Text as="p" className="flex items-center justify-center rounded-[12px] bg-red-a100 px-3 py-0.5">
          {rejectButton}
        </Text>
        <Text as="p" className="flex items-center justify-center rounded-[12px] bg-blue-200 px-2.5 py-0.5">
          {acceptButton}
        </Text>
      </div>
    </div>
  );
}
