import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "@src/shared/components/header";
import {Footer} from "@src/shared/components/footer";
import {ContainerModule} from "@src/shared/scss";
import cls from "@src/features/layout/Layout.module.scss"
import {combineClass} from "@src/shared/lib";

export const Layout = () => {
  return (
    <div>
      <Header/>

      <main className={combineClass([ContainerModule.container, cls.page])}>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
};