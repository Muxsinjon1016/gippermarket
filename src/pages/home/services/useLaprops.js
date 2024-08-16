import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useLaprops = () => {
  return useQuery({
    queryKey: ["getLaptops"],
    queryFn: () => request.get("/notebook").then((res) => res.data),
  });
};

export default useLaprops;
