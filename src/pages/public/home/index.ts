import {lazy} from "react";

export const HomeChunk = lazy(
  () => import("@src/pages/public/home/ui/index").then(
    module => ({default: module.Home})
  )
)