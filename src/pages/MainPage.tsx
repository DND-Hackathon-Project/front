import MainPageCarousel from "@/components/mainPageCarousel";

const posterArr1 = Array(6).fill(1);

export default function MainPage() {
  return (
    <div className="flex flex-col max-w-md pt-12 overflow-visible">
      <div>버튼 자리지롱</div>
      <div className="flex flex-col pl-3 gap-8">
        <div className="flex items-center pr-3">
          <img
            className="w-full h-full rounded-[20px] object-contain"
            src="https://picsum.photos/200/200"
          />
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
