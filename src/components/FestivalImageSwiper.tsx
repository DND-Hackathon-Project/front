import type { Poster, PosterDetail } from "@/pages/VoteAndJoin";
import FlexBox from "./FlexBox";

type FestivalImageSwiperProps = {
  thumbnails: Poster[];
  mainImage: Poster | null;
  setMainImage: (img: Poster) => void;
  fetchData: (festivalId: number) => Promise<any>;
  setDetailData: (data: PosterDetail) => void;
};

export default function FestivalImageSwiper({
  thumbnails,
  mainImage,
  setMainImage,
  fetchData,
  setDetailData,
}: FestivalImageSwiperProps) {
  const onThumbnailClick = async (src: Poster) => {
    if (!document.startViewTransition) {
      const data = await fetchData(src.festivalId);
      setDetailData(data);
      setMainImage(src);
      return;
    }

    document.startViewTransition(async () => {
      const data = await fetchData(src.festivalId);
      setDetailData(data);
      setMainImage(src);
    });
  };

  return (
    <FlexBox
      direction="col"
      className="w-full justify-center mx-auto p-5 overflow-x-scroll"
    >
      {/* 썸네일 리스트 */}
      <div className="flex gap-3 justify-start overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-gray-300 pl-72">
        {thumbnails.map((poster) => (
          <img
            key={poster.posterId}
            src={`https://fb2f-1-215-227-114.ngrok-free.app/images/${poster.imageUrl}`}
            alt="썸네일 이미지"
            onClick={() => onThumbnailClick(poster)}
            className={`flex-none w-[270px] h-[360px] rounded cursor-pointer transition-opacity duration-300 border-2 box-border ${
              poster === mainImage
                ? "opacity-100 border-white"
                : "opacity-60 border-transparent"
            }`}
          />
        ))}
      </div>
    </FlexBox>
  );
}
