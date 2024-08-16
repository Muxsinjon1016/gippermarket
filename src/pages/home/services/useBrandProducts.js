import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useBrandProducts = () => {
  return useQuery({
    queryKey: ["getBrandProduct"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};

export default useBrandProducts;
