import {combineClass} from "@src/shared/lib";
import {TextModule} from "@src/shared/scss";
import cls from "@src/pages/not-found/styles/NotFound.module.scss"
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={combineClass([TextModule.h2, cls.notFoundContainer])}>
      This page does not exist
      <br/>
      <br/>
      <div>
        <span>Please go to the </span><Link className={combineClass([TextModule.h2, cls.link])} to={"/"}>main!</Link>
      </div>
    </div>
  );
};