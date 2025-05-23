import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type mainPageCarouselProps = React.ComponentProps<typeof Carousel>;
type itemProps = React.ComponentProps<typeof CarouselItem>;

export default function MainPageCarousel({
  children,
  ...props
}: mainPageCarouselProps) {
  return (
    <Carousel {...props}>
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
}

MainPageCarousel.Item = (props: itemProps) => {
  return <CarouselItem className="flex flex-col basis-auto" {...props} />;
};

MainPageCarousel.ItemCover = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return <img className="w-[120px] h-[140px] rounded-[16px]" {...props} />;
};

MainPageCarousel.Title = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} />;
};
