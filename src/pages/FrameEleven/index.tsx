import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfile2 from "../../components/UserProfile2";
import FrameelevenColumnseparator from "./FrameelevenColumnseparator";
import React, { Suspense } from "react";

const data = [
  { userName: "Name lastname", userHandle: "@studentuser_1", followText: "follow" },
  { userName: "Name lastname", userHandle: "@studentuser_1", followText: "follow" },
  { userName: "Name lastname", userHandle: "@studentuser_1", followText: "follow" },
  { userName: "Name lastname", userHandle: "@studentuser_1", followText: "follow" },
];
const data1 = [
  { userName: "Name lastname", userHandle: "@studentuser_1", rejectButton: "Reject", acceptButton: "Accept" },
  { userName: "Name lastname", userHandle: "@studentuser_1", rejectButton: "Reject", acceptButton: "Accept" },
  { userName: "Name lastname", userHandle: "@studentuser_1", rejectButton: "Reject", acceptButton: "Accept" },
  { userName: "Name lastname", userHandle: "@studentuser_1", rejectButton: "Reject", acceptButton: "Accept" },
];

export default function FrameElevenPage() {
  return (
    <>
      <Helmet>
        <title>Frame 11 2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[2100px] w-full content-center bg-white-a700_01 lg:h-auto md:h-auto">
        <div className="mx-auto flex flex-1 flex-col items-center">
          <div className="flex flex-col items-start self-stretch">
            <div className="flex h-[136px] items-start justify-center self-stretch bg-[url(/public/images/img_group_1.png)] bg-cover bg-no-repeat p-[22px] lg:h-auto md:h-auto sm:p-4">
              <Header />
            </div>
            <Sidebar1 />
          </div>
          <div className="relative mt-[-778px] flex w-[48%] flex-col items-start gap-2.5 lg:w-full lg:px-5 md:w-full md:px-5">
            <div className="flex w-[82%] flex-col gap-1.5 rounded-[14px] border border-solid border-gray-200 bg-white-a700_01 py-3.5 lg:w-full md:w-full">
              <div className="mx-3.5 flex items-center gap-6 md:mx-0">
                <Img src="images/img_group_6.png" alt="Image" className="h-[50px] w-[50px] object-cover" />
                <Text size="textlg" as="p" className="!text-blue_gray-400_02">
                  What is happening?
                </Text>
              </div>
              <FrameelevenColumnseparator />
            </div>
            <div className="mr-[158px] flex flex-col gap-7 self-stretch md:mr-0">
              <UserProfile />
              <UserProfile
                userName="Name lastname"
                userHandle="@studentuser_1"
                userJoinDate="Agust 6 - 2024"
                userDescription="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                favoriteCount="10k"
                likeCount="10k"
                popularText="Popular"
                userCount="10k"
                groupUserName="Name lastname"
                groupUserHandle="@studentuser_1"
                groupUserJoinDate="Agust 6 - 2024"
                groupUserDescription="Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem "
                groupFavoriteCount="10k"
                groupLikeCount="10k"
                groupPopularText="Popular"
                groupUserCount="10k"
                addPostText="Add post"
                postText="Post"
              />
            </div>
          </div>
        </div>
        <div className="absolute right-[10%] top-[5%] m-auto flex w-[26%] flex-col items-center gap-3.5 rounded-[12px] border-[0.25px] border-solid border-black-900_7a bg-white-a700 px-[34px] sm:px-4">
          <Img src="images/img_separator.png" alt="Separator" className="mx-[72px] h-px w-full object-cover md:mx-0" />
          <Heading size="headingmd" as="h1" className="self-start !text-gray-900">
            Social
          </Heading>
          <div className="mb-9 flex flex-col gap-4 self-stretch">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1 {...d} key={"listfollow" + index} />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="absolute right-[10%] top-[22%] m-auto flex w-[26%] flex-col items-center gap-3.5 rounded-[12px] border-[0.25px] border-solid border-black-900_7a bg-white-a700 px-[34px] sm:px-4">
          <Img src="images/img_separator.png" alt="Separator" className="mx-[72px] h-px w-full object-cover md:mx-0" />
          <Heading size="headingmd" as="h2" className="self-start !text-gray-900">
            Request
          </Heading>
          <div className="mb-9 flex flex-col gap-4 self-stretch">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data1.map((d, index) => (
                <UserProfile2 {...d} key={"listreject" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
