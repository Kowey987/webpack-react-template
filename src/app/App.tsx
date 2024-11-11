import '@src/app/index.scss'
import {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import {RouterApp} from "@src/app/router";
import {GlobalProvider} from "@src/app/provider";
import {PreLoad} from "@src/widgets/pre-load";

export const App = () => {
  return (
    <Suspense fallback={
      <PreLoad words={["Tokens", "JavaScript", "Styles", "HTML"]}>Downloading</PreLoad>
    }>
      <GlobalProvider>
        <BrowserRouter>
          <RouterApp/>
        </BrowserRouter>
      </GlobalProvider>
    </Suspense>
  );
};