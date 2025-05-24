import { useEffect, useRef, useState } from "react";
import ImageSquare from "@/assets/ImageSquare.svg?react";
import FlexBox from "./FlexBox";
import LoadingSpinner from "@/assets/LoadingSpinner.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileData: File | null;
  setFileData: (value: File | null) => void;
  onSubmit: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  fileData,
  setFileData,
  onSubmit,
}: ModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // 숨겨진 input 클릭
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setFileData(file);
      } catch (error) {
        console.error(error);
        setFileData(null);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <div
      className="max-w-md mx-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-4/5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <FlexBox direction="col" className="items-start gap-2">
          <ImageSquare />
          <div className="pb-8">
            <h2 className="font-semibold">
              이벤트에 참가할 포스터를 업로드해 주세요
            </h2>
            <p className="font-base text-gray-700">
              {isUploading
                ? "이미지를 업로드 중입니다..."
                : fileData
                ? `업로드된 파일: ${fileData.name}`
                : "이미지가 업로드 되지 않았어요!"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </FlexBox>
        {fileData ? (
          <FlexBox direction="col" className="gap-2">
            <button
              className="w-full flex justify-center bg-white border border-2 border-blue-500 text-blue-500 px-5 py-3 rounded-lg cursor-pointer"
              onClick={handleButtonClick}
            >
              {isUploading ? <LoadingSpinner /> : "이미지 다시 선택하기"}
            </button>
            <button
              className="w-full flex justify-center text-white bg-blue-500 px-5 py-3 rounded-lg cursor-pointer"
              onClick={handleSubmit}
            >
              이미지 업로드하기
            </button>
          </FlexBox>
        ) : (
          <button
            className="w-full flex justify-center bg-white border border-2 border-blue-500 text-blue-500 px-5 py-3 rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isUploading ? <LoadingSpinner /> : "이미지 올리기"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
