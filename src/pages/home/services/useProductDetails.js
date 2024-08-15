import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["ProductDetails", id],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data),
  });
};

export default useProductDetails;
