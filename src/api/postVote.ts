import { customFetch } from "@/utils/customFetch";

export const postVote = async (posterId: number, memberId: number) => {
  const res = await customFetch(
    `/posters/${posterId}/votes?memberId=${memberId}`,
    { method: "POST" }
  );
  return res;
};
