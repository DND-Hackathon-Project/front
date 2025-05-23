import Arrow from "@/assets/ArrowLeft.svg?react";
import GoldMedal from "@/assets/GoldMedal.svg?react";
import SliverMedal from "@/assets/SliverMedal.svg?react";
import BronzeMedal from "@/assets/BronzeMedal.svg?react";
import ThumbsUp from "@/assets/ThumbsUp.svg?react";
import FlexBox from "@/components/FlexBox";

const medals = [GoldMedal, SliverMedal, BronzeMedal];

const VoteResult = () => {
  return (
    <div className="relative max-w-md mx-auto h-screen overflow-y-scroll">
      <FlexBox direction="col" className="px-4 py-3 pb-8 gap-4 items-start">
        <Arrow
          className="w-8 h-8 text-black cursor-pointer"
          stroke="black"
          onClick={() => {}}
        />
        <h1 className="text-2xl font-semibold">
          이번 이벤트의 투표 결과를 <br /> 확인해보세요
        </h1>
      </FlexBox>

      {/* 메달 상위 3 */}
      <div className="flex gap-2 px-6 pb-4 w-full justify-between">
        {[0, 1, 2].map((i) => {
          const Medal = medals[i];
          return (
            <div key={i} className="flex flex-col items-center gap-2 w-[106px]">
              <div className="relative w-[106px] h-[140px] bg-gray-200 rounded-md">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <Medal className="w-8 h-8" />
                </div>
                <img
                  src="https://cdn.eachj.co.kr/news/photo/202205/6138_10647_2355.png"
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                <ThumbsUp className="w-4 h-4" />
                31개
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 mx-4" />

      {/* 나머지 리스트 */}
      <div className="grid grid-cols-3 gap-4 p-4 overflow-y-auto">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="w-[106px] h-[140px] bg-gray-200 rounded-md">
              <img
                src="https://cdn.eachj.co.kr/news/photo/202205/6138_10647_2355.png"
                alt="member"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
              <ThumbsUp className="w-4 h-4" />
              31개
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteResult;
