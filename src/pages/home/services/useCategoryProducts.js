import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";
import { useParams } from "react-router-dom";

export const useCategoryProducts = () => {
  const { name } = useParams();

  return useQuery({
    queryKey: ["getCategoryProduct", name],
    queryFn: () => request.get(`/${name}`).then((res) => res.data),
  });
};

export default useCategoryProducts;
