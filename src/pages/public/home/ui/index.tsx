import React from 'react';
import cls from "@src/pages/public/home/styles/Home.module.scss"
import {TextModule} from "@src/shared/scss";
import {combineClass} from "@src/shared/lib";

export const Home = () => {
  return (
    <div className={combineClass([cls.homeContainer, TextModule.span])}>
      Main page
    </div>
  );
};