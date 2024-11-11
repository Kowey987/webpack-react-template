import cls from "@src/shared/components/footer/Footer.module.scss"
import {combineClass} from "@src/shared/lib";
import {ContainerModule, TextModule} from "@src/shared/scss";

export const Footer = () => {
  return (
    <div className={combineClass([cls.footerContainer, ContainerModule.container, TextModule.span])}>
      Footer
    </div>
  );
};