import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useBanners = () => {
  return useQuery({
    queryKey: ["getBanners"],
    queryFn: () => request.get("/banners").then((res) => res.data),
  });
};

export default useBanners;
