import { customFetch } from "@/utils/customFetch";

export const fetchDetail = async (festivalId: number) => {
  const res = await customFetch(`/festivals/${festivalId}`);
  return res;
};
