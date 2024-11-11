import {IBaseRoute} from "@src/shared/types";
import {HomeChunk} from "@src/pages/public/home";
import {NotFoundChunk} from "@src/pages/not-found";

interface IPaths extends IBaseRoute {
  exact?: boolean
}

export const RoutesLayout: IPaths[] = [
  { path: "/", element: <HomeChunk /> },
  { path: "*", element: <NotFoundChunk /> },
]