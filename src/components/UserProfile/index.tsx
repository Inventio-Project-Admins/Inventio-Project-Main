import { Text, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  userName?: React.ReactNode;
  userHandle?: React.ReactNode;
  userJoinDate?: React.ReactNode;
  userDescription?: React.ReactNode;
  favoriteCount?: React.ReactNode;
  likeCount?: React.ReactNode;
  popularText?: React.ReactNode;
  userCount?: React.ReactNode;
  groupUserName?: React.ReactNode;
  groupUserHandle?: React.ReactNode;
  groupUserJoinDate?: React.ReactNode;
  groupUserDescription?: React.ReactNode;
  groupFavoriteCount?: React.ReactNode;
  groupLikeCount?: React.ReactNode;
  groupPopularText?: React.ReactNode;
  groupUserCount?: React.ReactNode;
  addPostText?: React.ReactNode;
  postText?: React.ReactNode;
}

export default function UserProfile({
  userName = "Name lastname",
  userHandle = "@studentuser_1",
  userJoinDate = "Agust 6 - 2024",
  userDescription = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  favoriteCount = "10k",
  likeCount = "10k",
  popularText = "Popular",
  userCount = "10k",
  groupUserName = "Name lastname",
  groupUserHandle = "@studentuser_1",
  groupUserJoinDate = "Agust 6 - 2024",
  groupUserDescription = "Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ",
  groupFavoriteCount = "10k",
  groupLikeCount = "10k",
  groupPopularText = "Popular",
  groupUserCount = "10k",
  addPostText = "Add post",
  postText = "Post",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center flex-1`}>
      <div className="flex flex-col gap-3.5 self-stretch rounded-[14px] border border-solid border-gray-200 p-3.5 sm:gap-3.5">
        <div className="relative h-[496px]">
          <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 items-start">
            <Img
              src="images/img_group_6.png"
              alt="Name Lastname"
              className="h-[50px] w-[50px] self-center object-cover"
            />
            <div className="flex flex-1 flex-wrap px-4">
              <Text as="p">{userName}</Text>
              <Heading as="p" className="ml-2.5">
                {userHandle}
              </Heading>
              <Text as="p" className="ml-1.5 !text-blue_gray-400_02">
                {userJoinDate}
              </Text>
            </div>
          </div>
          <Text as="p" className="absolute right-0 top-[6%] m-auto w-[90%] leading-[140%] sm:w-[90%]">
            {userDescription}
          </Text>
          <Img
            src="images/img_image_4.png"
            alt="Image"
            className="absolute bottom-[-1px] right-[3px] m-auto h-[346px] w-[90%] rounded-[14px] object-contain"
          />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-1 justify-center gap-1 px-14 md:px-5">
            <div className="flex items-center gap-1">
              <Img src="images/img_favorite.svg" alt="10k" className="h-[24px] w-[24px]" />
              <Text as="p" className="!text-blue_gray-400_02">
                {favoriteCount}
              </Text>
            </div>
            <div className="flex items-center gap-1">
              <Img src="images/img_like.svg" alt="10k" className="h-[24px] w-[24px]" />
              <Text as="p" className="!text-blue_gray-400_02">
                {likeCount}
              </Text>
            </div>
            <div className="flex items-center">
              <Img src="images/img_chart_up_1.svg" alt="Popular" className="h-[24px] w-[24px]" />
              <Text as="p" className="ml-1 !text-blue_gray-400_02">
                {popularText}
              </Text>
            </div>
            <div className="flex flex-1 items-center px-1">
              <Img src="images/img_user.svg" alt="10k" className="h-[24px] w-[24px]" />
              <Text as="p" className="ml-1 !text-blue_gray-400_02">
                {userCount}
              </Text>
            </div>
          </div>
          <div className="flex gap-4 self-end">
            <Img src="images/img_send.svg" alt="10k Ten" className="h-[24px] w-[24px]" />
            <Img src="images/img_bookmark.svg" alt="10k Twelve" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="h-[282px] w-px bg-gray-300" />
            <div className="flex w-[92%] flex-col gap-[26px] self-end sm:gap-[26px]">
              <div className="ml-[22px] sm:ml-0">
                <div className="flex items-start gap-3.5">
                  <Img src="images/img_group_6.png" alt="10kteen" className="h-[52px] w-[52px] object-cover" />
                  <div className="flex flex-1 flex-col gap-1.5 self-center sm:gap-1.5">
                    <div className="flex flex-wrap">
                      <Text as="p">{groupUserName}</Text>
                      <Heading as="p" className="ml-2.5">
                        {groupUserHandle}
                      </Heading>
                      <Text as="p" className="ml-1.5 !text-blue_gray-400_02">
                        {groupUserJoinDate}
                      </Text>
                    </div>
                    <Text as="p" className="leading-[140%]">
                      {groupUserDescription}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <div className="flex flex-1 gap-1">
                    <div className="flex w-full justify-center gap-4">
                      <div className="flex items-center gap-1">
                        <Img src="images/img_favorite.svg" alt="10kteen" className="h-[24px] w-[24px]" />
                        <Text as="p" className="!text-blue_gray-400_02">
                          {groupFavoriteCount}
                        </Text>
                      </div>
                      <div className="flex items-center gap-1">
                        <Img src="images/img_like.svg" alt="10kteen" className="h-[24px] w-[24px]" />
                        <Text as="p" className="!text-blue_gray-400_02">
                          {groupLikeCount}
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center justify-center gap-1">
                        <Img src="images/img_chart_up_1.svg" alt="Popular" className="h-[24px] w-[24px]" />
                        <Text as="p" className="!text-blue_gray-400_02">
                          {groupPopularText}
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-full items-center px-1">
                      <Img src="images/img_user.svg" alt="10k Twentytwo" className="h-[24px] w-[24px]" />
                      <Text as="p" className="ml-1 !text-blue_gray-400_02">
                        {groupUserCount}
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Img src="images/img_send.svg" alt="Image" className="h-[24px] w-[24px]" />
                    <Img src="images/img_bookmark.svg" alt="Image" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
              <div className="ml-4 flex flex-col gap-1.5 rounded-[14px] border border-solid border-gray-200 py-3.5 sm:ml-0 sm:gap-1.5">
                <div className="mx-3.5 flex items-center gap-6 sm:mx-0">
                  <Img src="images/img_group_6.png" alt="Add Post" className="h-[50px] w-[50px] object-cover" />
                  <Text size="texts" as="p" className="!text-blue_gray-400_02">
                    {addPostText}
                  </Text>
                </div>
                <div className="ml-3.5 h-[5px] bg-gray-300 sm:ml-0" />
                <div className="mx-3.5 mb-2.5 flex justify-center sm:mx-0">
                  <div className="flex flex-1 gap-[15px]">
                    <Img src="images/img_checkmark.svg" alt="Post" className="h-[24px] w-[24px]" />
                    <Img src="images/img_settings.svg" alt="Add Post" className="h-[24px] w-[24px]" />
                    <Img src="images/img_camera.svg" alt="Add Post" className="h-[24px] w-[24px]" />
                    <Img src="images/img_voice.svg" alt="Add Post" className="h-[24px] w-[24px]" />
                  </div>
                  <Text
                    as="p"
                    className="flex items-center justify-center rounded-[12px] bg-gray-300_01 px-[18px] py-0.5"
                  >
                    {postText}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
