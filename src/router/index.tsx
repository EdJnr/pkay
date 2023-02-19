import { ReactNode, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "./pages";

const MyRoutes = () => {
  return (
    <BrowserRouter>
        {/* NAVBAR */}
            <Routes>
              {pages.map(({component,path,exact}) => {
                const Component = component;
                return(
                  <>
                    <Route key={path} element={<Component/>} path={path}/>
                  </>
                )
              })}
            </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
