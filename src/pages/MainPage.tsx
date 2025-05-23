import MainPageCarousel from "@/components/mainPageCarousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const posterArr1 = Array(6).fill(1);

export default function MainPage() {
  return (
    <div className="flex flex-col gap-4 max-w-md pt-12 overflow-visible">
      <div className="pl-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="w-20 h-8 border-2 border-black rounded-[16px]">
              전국
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>서울</DropdownMenuItem>
            <DropdownMenuItem>경기</DropdownMenuItem>
            <DropdownMenuItem>인천</DropdownMenuItem>
            <DropdownMenuItem>충남</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col pl-3 gap-8">
        <div className="flex items-center pr-3">
          <div
            className="relative w-full h-full rounded-[20px] overflow-hidden
          "
          >
            <div className="absolute w-full p-4">
              <div className="px-4 py-2 rounded-[20px] text-white bg-gray-800/40">
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
            <h2>이번에 선정된 축제 포스터에요</h2>
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
                <MainPageCarousel.Title>임시 제목</MainPageCarousel.Title>
              </MainPageCarousel.Item>
            ))}
          </MainPageCarousel>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2>이번에 선정된 축제 포스터에요</h2>
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
                <MainPageCarousel.Title>임시 제목</MainPageCarousel.Title>
              </MainPageCarousel.Item>
            ))}
          </MainPageCarousel>
        </div>
      </div>
    </div>
  );
}
