// html, css, js = 예전 방식
// SPA = 요즘 방식
// Single Page Application = react, vue, angular
// 과거에는 noe-SPA: 서버가 라우팅 담당 (백엔드)
// 최근은 SPA:클라이언트가 라우팅 담당 (프론트엔드)

// CSR = Client-side redering
// SSR = Sever-side rendering

import React from "react";
import About from "./About";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* /을 입력하면 localhost:3000과 같다. */}
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
