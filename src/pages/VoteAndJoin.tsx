import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FlexBox from "@/components/FlexBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import FestivalImageSwiper from "@/components/FestivalImageSwiper";
import Arrow from "@/assets/ArrowLeft.svg?react";
import Confetti from "@/assets/Confetti.svg?react";
import WarningCircle from "@/assets/WarningCircle.svg?react";
import ThumbsUp from "@/assets/ThumbsUp.svg?react";
import ExpandableText from "@/components/ExpandableText";
import Modal from "@/components/Modal";
import { fetchPosters } from "@/api/fetchPosters";
import { postVote } from "@/api/postVote";
import { postNewPoster } from "@/api/postNewPoster";
import { fetchDetail } from "@/api/fetchDetail";

// const posters = [
//   "https://cdn.eachj.co.kr/news/photo/202205/6138_10647_2355.png",
//   "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/e5bb25a8-034d-4bf3-bf87-e9973ee57940_3.jpg",
//   "https://www.visitbusan.net/upload_data/board_data/BBS_0000009/168713836274136.png",
//   "https://cdn.safetimes.co.kr/news/photo/202006/82465_59958_2426.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42DZZIEbNypohvywxqrZ4gdO85qMnto2Wpg&s",
// ];

export interface Poster {
  festivalId: number;
  posterId: number;
  imageUrl: string;
  voteCount: number;
  memberId: number;
  memberNickname: string;
}

export interface PosterDetail {
  id: number;
  name: string;
  description: string;
  region: string;
  address: string;
  vote_deadline: string;
}
const VoteAndJoin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const festivalId = parseInt(id || "18", 10);

  const [posters, setPosters] = useState<Poster[]>([]);
  const [mainImage, setMainImage] = useState<Poster | null>(null);
  const [fileData, setFileData] = useState<File | null>(null);
  const [detailedData, setDetailedData] = useState<PosterDetail | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      const data = await fetchPosters(festivalId);
      setPosters(data);
      setMainImage(data[0]);
    };
    fetcher();
  }, []);

  const handleVote = async (posterId: number, memberId: number) => {
    await postVote(posterId, memberId);
  };

  const handleUploadPost = (
    posterId: number,
    memberId: number,
    file: File | null
  ) => {
    if (file) postNewPoster(posterId, memberId, file);
  };

  return (
    <div className="relative max-w-md mx-auto border border-1 h-screen overflow-hidden">
      {/* 배경 이미지 레이어 */}
      {mainImage && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm saturate-50 brightness-75"
          style={{
            backgroundImage: `url(https://fb2f-1-215-227-114.ngrok-free.app/images/${mainImage.imageUrl})`,
            backgroundSize: "cover",
            zIndex: 0,
          }}
        />
      )}

      <div className="relative z-10 text-white h-full flex flex-col">
        <div className="px-6 pt-4">
          <Arrow className="w-8 h-8" onClick={() => navigate(-1)} />
        </div>
        <FlexBox className="w-full justify-between py-4 px-6 font-semibold text-lg">
          <FlexBox className="gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{mainImage?.memberNickname}</p>
          </FlexBox>
          <FlexBox className="gap-2">
            <ThumbsUp onClick={() => {}} /> {mainImage?.voteCount}개
          </FlexBox>
        </FlexBox>

        <main className="flex-1 overflow-y-auto flex flex-col justify-between">
          <FlexBox className="w-[90%] mx-auto px-4 py-2 text-center rounded-xl bg-gray-900/30 text-white gap-4">
            <Confetti />
            <span>내가 투표한 작품이 선정되면 포인트를 드려요!</span>
          </FlexBox>

          <FlexBox direction="col" className="pb-12 px-4 items-start">
            <FestivalImageSwiper
              thumbnails={posters}
              mainImage={mainImage}
              setMainImage={setMainImage}
              setDetailData={setDetailedData}
              fetchData={fetchDetail}
            />

            <FlexBox className="px-5 py-3 rounded-xl bg-red-500/50 text-white gap-4 text-base mb-4">
              <WarningCircle />
              <span>
                {detailedData
                  ? detailedData?.vote_deadline + "에 마감해요"
                  : "YYYY-MM-DD에 마감해요"}
              </span>
            </FlexBox>
            <FlexBox direction="col" className="text-white gap-4 items-start">
              <h2 className="font-semibold text-xl">{detailedData?.name}</h2>
              <ExpandableText text={detailedData?.description} />
            </FlexBox>
            <FlexBox className="w-full justify-around mt-8 gap-4">
              <button
                className="flex-1 bg-white border border-2 border-blue-500 px-5 py-3 text-blue-500 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                나도 참가할래요
              </button>
              <button
                className="flex-1 bg-blue-500 px-5 py-3 rounded-lg cursor-pointer"
                onClick={() =>
                  handleVote(
                    mainImage?.posterId as number,
                    mainImage?.memberId as number
                  )
                }
              >
                이 작품에 투표할래요
              </button>
            </FlexBox>
          </FlexBox>
        </main>
      </div>
      {
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          fileData={fileData}
          setFileData={setFileData}
          onSubmit={() =>
            handleUploadPost(
              mainImage?.posterId as number,
              mainImage?.memberId as number,
              fileData
            )
          }
        />
      }
    </div>
  );
};

export default VoteAndJoin;
