import { customFetch } from "@/utils/customFetch";

export const fetchHotPoster = async (festivalId: number) => {
  const res = await customFetch(`/posters/hot?=${festivalId}`);
  return res;
};
