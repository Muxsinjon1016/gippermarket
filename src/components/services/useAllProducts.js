import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["getAll"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};

export default useAllProducts;
