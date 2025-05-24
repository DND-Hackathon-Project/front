import { customFetch } from "@/utils/customFetch";

export const postNewPoster = async (
  festivalId: number,
  memberId: number,
  file: File
) => {
  const res = await customFetch(
    `/festivals/${festivalId}/posts?memberId=${memberId}`,
    {
      body: file,
    }
  );
  return res;
};
