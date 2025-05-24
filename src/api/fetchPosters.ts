import { customFetch } from "@/utils/customFetch";

export const fetchPosters = async (festivalId: number) => {
  const res = await customFetch(`/festivals/${festivalId}/posters`);
  return res;
};
