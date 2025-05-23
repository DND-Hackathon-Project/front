import FlexBox from "./FlexBox";

type FestivalImageSwiperProps = {
  thumbnails: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
};

export default function FestivalImageSwiper({
  thumbnails,
  mainImage,
  setMainImage,
}: FestivalImageSwiperProps) {
  const onThumbnailClick = (src: string) => {
    if (!document.startViewTransition) {
      setMainImage(src);
      return;
    }

    document.startViewTransition(() => {
      setMainImage(src);
    });
  };

  return (
    <FlexBox
      direction="col"
      className="w-full justify-center mx-auto p-5 overflow-x-scroll pl-32"
    >
      {/* 썸네일 리스트 */}
      <div className="flex gap-3 justify-start overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-gray-300 pl-72">
        {thumbnails.map((src) => (
          <img
            key={src}
            src={src}
            alt="썸네일 이미지"
            onClick={() => onThumbnailClick(src)}
            className={`flex-none w-[270px] h-[360px] rounded cursor-pointer transition-opacity duration-300 border-2 box-border ${
              src === mainImage
                ? "opacity-100 border-white"
                : "opacity-60 border-transparent"
            }`}
          />
        ))}
      </div>
    </FlexBox>
  );
}
