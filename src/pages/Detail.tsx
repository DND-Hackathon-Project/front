import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FlexBox from "@/components/FlexBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import Arrow from "@/assets/ArrowLeft.svg?react";
import Confetti from "@/assets/Confetti.svg?react";
import ThumbsUp from "@/assets/ThumbsUp.svg?react";
import ExpandableText from "@/components/ExpandableText";
import { fetchDetail } from "@/api/fetchDetail";
import type { PosterDetail } from "./VoteAndJoin";

const Detail = () => {
  const location = useLocation();
  const state = location.state as {
    festivalId: number;
    imageUrl: string;
    voteCount: number;
    memberId: number;
    memberNickname: string;
  };
  const [detailedData, setDetailedData] = useState<PosterDetail | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetchDetail(state.festivalId);
      setDetailedData(res);
    };
    fetcher();
  }, []);

  return (
    <div className="relative max-w-md mx-auto border border-1 h-screen overflow-hidden">
      {/* 배경 이미지 레이어 */}
      {state.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center saturate-50 brightness-75"
          style={{
            backgroundImage: `url(https://fb2f-1-215-227-114.ngrok-free.app/images/${state.imageUrl}})`,
            backgroundSize: "cover",
            zIndex: 0,
          }}
        />
      )}

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
            <p> (닉네임)</p>
          </FlexBox>
          <FlexBox className="gap-2">
            <ThumbsUp onClick={() => {}} /> {state.voteCount}
          </FlexBox>
        </FlexBox>

        <main className="flex-1 overflow-y-auto flex flex-col justify-between">
          <FlexBox className="w-[90%] mx-auto px-4 py-2 text-center rounded-xl bg-gray-900/30 text-white gap-4">
            <Confetti />
            <span>내가 투표한 작품이 선정되면 포인트를 드려요!</span>
          </FlexBox>

          <FlexBox direction="col" className="pb-12 px-4 items-start">
            <FlexBox direction="col" className="text-white gap-4 items-start">
              <h2 className="font-semibold text-xl">{detailedData?.name}</h2>
              <ExpandableText text={detailedData?.description} />
            </FlexBox>
            <FlexBox className="w-full justify-around mt-8 gap-4">
              <button className="flex-1 bg-blue-500 px-5 py-3 rounded-lg cursor-pointer">
                투표율 확인하기
              </button>
            </FlexBox>
          </FlexBox>
        </main>
      </div>
    </div>
  );
};

export default Detail;
