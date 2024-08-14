import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useCategories = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};

export default useCategories;
