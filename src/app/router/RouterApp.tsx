import {RoutesLayout} from "@src/app/router/paths";
import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import {Layout} from "@src/features/layout";

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        {RoutesLayout.map((el) =>
          <Route path={el.path} element={el.element} key={el.path}/>
        )}
      </Route>
    </Routes>
  );
};