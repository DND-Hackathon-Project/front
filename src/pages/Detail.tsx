import { useState } from "react";
import FlexBox from "@/components/FlexBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import FestivalImageSwiper from "@/components/FestivalImageSwiper";
import Arrow from "@/assets/ArrowLeft.svg?react";
import Confetti from "@/assets/Confetti.svg?react";
import WarningCircle from "@/assets/WarningCircle.svg?react";
import ThumbsUp from "@/assets/ThumbsUp.svg?react";
import ExpandableText from "@/components/ExpandableText";

const thumbnails = [
  "https://cdn.eachj.co.kr/news/photo/202205/6138_10647_2355.png",
  "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/e5bb25a8-034d-4bf3-bf87-e9973ee57940_3.jpg",
  "https://www.visitbusan.net/upload_data/board_data/BBS_0000009/168713836274136.png",
  "https://cdn.safetimes.co.kr/news/photo/202006/82465_59958_2426.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42DZZIEbNypohvywxqrZ4gdO85qMnto2Wpg&s",
];

const Detail = () => {
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  return (
    <div className="relative max-w-md mx-auto border border-1 h-screen overflow-hidden">
      {/* 배경 이미지 레이어 */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm saturate-50 brightness-75"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* 내용 레이어 */}
      <div className="relative z-10 text-white h-full flex flex-col">
        <div className="px-6 pt-4">
          <Arrow className="w-8 h-8" />
        </div>
        <FlexBox className="w-full justify-between py-4 px-6 font-semibold text-lg">
          <FlexBox className="gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>올린 사람 (닉네임)</p>
          </FlexBox>
          <FlexBox className="gap-2">
            <ThumbsUp onClick={() => {}} /> 31개
          </FlexBox>
        </FlexBox>

        <main className="flex-1 overflow-y-auto flex flex-col justify-between">
          <FlexBox className="w-[90%] mx-auto px-4 py-2 text-center rounded-xl bg-gray-900/30 text-white gap-4">
            <Confetti />
            <span>내가 투표한 작품이 선정되면 포인트를 드려요!</span>
          </FlexBox>

          <FlexBox direction="col" className="pb-12 px-4 items-start">
            <FestivalImageSwiper
              thumbnails={thumbnails}
              mainImage={mainImage}
              setMainImage={setMainImage}
            />

            <FlexBox className="w-1/2 px-4 py-2 rounded-xl bg-red-500/50 text-white gap-4 text-base mb-4">
              <WarningCircle />
              <span>5월 28일에 마감해요!</span>
            </FlexBox>
            <FlexBox direction="col" className="text-white gap-4 items-start">
              <ExpandableText
                text={
                  "지역 축제에 대한 설명 부분입니다. (어떠한 축제이고, 포스터 제작기준은 어떻게 되는지 자세하게 쓰여 있습니다. 예를 들어 포스터는 A3 사이즈 이상, 해상도는 300dpi 이상이어야 하고, 사용된 폰트는 저작권에 문제가 없어야 합니다. 또한 축제의 대표 콘텐츠와 장소, 일정을 반드시 포함해야 합니다."
                }
              />
            </FlexBox>
            <FlexBox className="w-full justify-around mt-8 gap-4">
              <button className="flex-1 bg-white border border-2 border-blue-500 px-5 py-3 text-blue-500 rounded-lg cursor-pointer">
                나도 참가할래요
              </button>
              <button className="flex-1 bg-blue-500 px-5 py-3 rounded-lg cursor-pointer">
                이 작품에 투표할래요
              </button>
            </FlexBox>
          </FlexBox>
        </main>
      </div>
    </div>
  );
};

export default Detail;
