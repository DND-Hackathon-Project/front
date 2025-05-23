import MainPageCarousel from "@/components/mainPageCarousel";
import { useState } from "react";
import Crown from "@/assets/Crown.svg?react";
import CaretDown from "@/assets/CaretDown.svg?react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer";

const posterArr1 = Array(6).fill(1);

const regions = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
];

export default function MainPage() {
  const [filterCity, setFilterCity] = useState<null | string>(null);
  return (
    <Drawer>
      <div className="flex flex-col gap-4 max-w-md pt-12 overflow-visible">
        <div className="pl-3">
          <div className="w-full">
            <DrawerTrigger>
              <div className="flex items-center w-fit gap-2 px-3 py-1 border-[1px] border-black rounded-[20px]">
                {filterCity ?? "전국"} <CaretDown />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col items-center mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-[20px]">
                    축제 지역 선택
                  </DrawerTitle>
                </DrawerHeader>
                <ul className="flex flex-col gap-1 pl-[34px] w-[100px] h-[320px] overflow-y-scroll">
                  {regions.map((cityName) => {
                    return (
                      <DrawerClose>
                        <li
                          key={cityName}
                          onClick={() => setFilterCity(cityName)}
                          className="text-[16px]"
                        >
                          {cityName}
                        </li>
                      </DrawerClose>
                    );
                  })}
                </ul>
              </div>
            </DrawerContent>
          </div>
        </div>
        <div className="flex flex-col pl-3 gap-8">
          <div className="flex items-center pr-3">
            <div
              className="relative w-full h-full rounded-[20px] overflow-hidden
          "
            >
              <div className="absolute w-full p-4">
                <div className="flex gap-2 items-center px-4 py-2 rounded-[20px] text-white bg-gray-800/40">
                  <Crown />
                  가장 많은 관심을 받은 축제예요!
                </div>
              </div>
              <img
                className="w-full h-full object-contain"
                src="https://picsum.photos/200/200"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-xl font-bold">
                이번에 선정된 축제 포스터에요
              </div>
            </div>
            <MainPageCarousel
              opts={{
                slidesToScroll: "auto",
                dragFree: true,
              }}
            >
              {posterArr1.map((_, index) => (
                <MainPageCarousel.Item key={index}>
                  <MainPageCarousel.ItemCover src="https://picsum.photos/120/140" />
                  <MainPageCarousel.Title className="font-semibold">
                    임시 제목
                  </MainPageCarousel.Title>
                </MainPageCarousel.Item>
              ))}
            </MainPageCarousel>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
