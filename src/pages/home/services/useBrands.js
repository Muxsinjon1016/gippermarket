import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useBrands = () => {
  return useQuery({
    queryKey: ["getBrands"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};

export default useBrands;
