import {lazy} from "react";

export const NotFoundChunk = lazy(
  () => import("@src/pages/not-found/ui/NotFoundPage").then(
    module => ({default: module.NotFoundPage})
  )
)