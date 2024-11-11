import { useEffect, useState } from "react";
import {
    SCREEN_420, SCREEN_540, SCREEN_720, SCREEN_960, SCREEN_1440, SCREEN_1920
} from "@src/shared/hooks/use-resize/constants/constants";

export const useResize = () => {
    const [pathWidth, setPathWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handlerResize = (event: Event) =>{
            setPathWidth((event.target as Window).innerWidth)
        }

        window.addEventListener('resize', handlerResize)

        return () => {
            window.removeEventListener("resize", handlerResize)
        }
    }, []);

    return{
        pathWidth,
        isScreen420: pathWidth > SCREEN_420,
        isScreen540: pathWidth > SCREEN_540,
        isScreen720: pathWidth > SCREEN_720,
        isScreen960: pathWidth > SCREEN_960,
        isScreen1440: pathWidth > SCREEN_1440,
        isScreen1920: pathWidth > SCREEN_1920
    }
}