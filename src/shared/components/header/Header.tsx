import cls from "@src/shared/components/header/Header.module.scss"
import {ContainerModule, TextModule} from "@src/shared/scss";

import {combineClass} from "@src/shared/lib";


export const Header = () => {
  return (
    <header className={combineClass([ContainerModule.container, cls.header, TextModule.span])}>
      Header
    </header>
  );
};