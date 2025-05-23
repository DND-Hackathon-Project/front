import MainPageCarousel from "@/components/mainPageCarousel";
import { useEffect, useState } from "react";
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
import { customFetch } from "@/utils/customFetch";

const IMG_PREFIX = "https://fb2f-1-215-227-114.ngrok-free.app/images";

const regions = [
  ["서울", "서울특별시"],
  // ["부산", "부산"],
  // ["대구", "대구"],
  ["인천", "인천광역시"],
  // ["광주", "광주"],
  // ["대전", "대전"],
  // ["울산", "울산"],
  // ["세종", "세종"],
  // ["경기", "경기"],
  ["강원", "강원특별자치도"],
  // ["충북", "충북"],
  ["충남", "충청남도"],
  // ["전북", "전북"],
  // ["전남", "전남"],
  // ["경북", "경북"],
  ["경남", "경상남도"],
  // ["제주", "제주"],
];

interface festivalInfo {
  festivalId: number;
  festivalName: string;
  imageUrl: string;
  memberId: number;
  memberNickname: string;
  posterId: number;
  voteCount: number;
}

interface popularPosterInfo {
  festivalId: number;
  posterImageUrl: string;
}

export default function MainPage() {
  const [filterCity, setFilterCity] = useState<null | string>(null);
  const [festivalList, setFestivalList] = useState<festivalInfo[] | null>(null);
  const [popularPoster, setPopularPoster] = useState<popularPosterInfo | null>(
    null
  );
  const filterSelected = filterCity !== null;
  useEffect(() => {
    async function getFestList() {
      const data = await customFetch("/posters");
      setFestivalList(data);
    }
    getFestList();
  }, []);
  useEffect(() => {
    async function getPopular() {
      const data = await customFetch("/posters/hot");
      setPopularPoster(data);
    }
    getPopular();
  }, []);

  function changeFilter(index: number) {
    setFilterCity(regions[index][0]);
    async function getFilteredFestList() {
      const data = await customFetch(
        `/posters?region=${regions[index][1]}&isSelected=true`
      );
      setFestivalList(data);
    }
    getFilteredFestList();
  }

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
                <DrawerClose>
                  <ul className="flex flex-col gap-1 pl-[34px] w-[100px] h-[320px] overflow-y-scroll">
                    {regions.map(([cityName, key], index) => {
                      return (
                        <li
                          key={key}
                          onClick={() => changeFilter(index)}
                          className="text-[16px]"
                        >
                          {cityName}
                        </li>
                      );
                    })}
                  </ul>
                </DrawerClose>
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
              {popularPoster ? (
                <img
                  className="w-full h-full object-contain"
                  src={`${IMG_PREFIX}/${popularPoster.posterImageUrl}`}
                />
              ) : (
                <div className="w-full h-full object-contain" />
              )}
            </div>
          </div>
          {filterSelected ? (
            <div className="flex">
              <MainPageCarousel
                opts={{
                  slidesToScroll: "auto",
                  dragFree: true,
                }}
              >
                {festivalList &&
                  festivalList.slice(0, 6).map((info) => (
                    <MainPageCarousel.Item key={info.festivalId}>
                      <MainPageCarousel.ItemCover
                        src={`${IMG_PREFIX}/${info.imageUrl}`}
                      />
                      <MainPageCarousel.Title className="w-30 truncate font-semibold">
                        {info.festivalName}
                      </MainPageCarousel.Title>
                    </MainPageCarousel.Item>
                  ))}
              </MainPageCarousel>
            </div>
          ) : (
            <>
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
                  {festivalList &&
                    festivalList.slice(0, 6).map((info) => (
                      <MainPageCarousel.Item key={info.festivalId}>
                        <MainPageCarousel.ItemCover
                          src={`${IMG_PREFIX}/${info.imageUrl}`}
                        />
                        <MainPageCarousel.Title className="w-30  font-semibold truncate">
                          {info.festivalName}
                        </MainPageCarousel.Title>
                      </MainPageCarousel.Item>
                    ))}
                </MainPageCarousel>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="text-xl font-bold">
                    요즘 인기있는 축제들이에요!
                  </div>
                </div>
                <MainPageCarousel
                  opts={{
                    slidesToScroll: "auto",
                    dragFree: true,
                  }}
                >
                  {festivalList &&
                    festivalList.slice(6).map((info) => (
                      <MainPageCarousel.Item key={info.festivalId}>
                        <MainPageCarousel.ItemCover
                          src={`${IMG_PREFIX}/${info.imageUrl}`}
                        />
                        <MainPageCarousel.Title className="w-30 truncate">
                          {info.festivalName}
                        </MainPageCarousel.Title>
                      </MainPageCarousel.Item>
                    ))}
                </MainPageCarousel>
              </div>
            </>
          )}
        </div>
      </div>
    </Drawer>
  );
}
