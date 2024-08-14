import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useDiscount = () => {
  return useQuery({
    queryKey: ["getDiscount"],
    queryFn: () => request.get("/ads").then((res) => res.data),
  });
};

export default useDiscount;
