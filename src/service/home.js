import { request } from "@/utils/request.js";

export function getHome() {
  return request({
    url: "/index-infos",
  });
}

