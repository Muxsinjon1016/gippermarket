import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const usePhones = () => {
  return useQuery({
    queryKey: ["getPhones"],
    queryFn: () => request.get("/phones").then((res) => res.data),
  });
};

export default usePhones;
