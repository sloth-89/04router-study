// html, css, js = 예전 방식
// SPA = 요즘 방식
// Single Page Application = react, vue, angular
// 과거에는 noe-SPA: 서버가 라우팅 담당 (백엔드)
// 최근은 SPA:클라이언트가 라우팅 담당 (프론트엔드)

// CSR = Client-side redering
// SSR = Sever-side rendering

// BrowserRouter : 주소만 변경하고, 페이지는 다시 불어오지 않는 방식!
//                                (= 변경되는 컴포넌트 화면만 렌더링됨)
//                <route path="/경로" element={<컴포넌트/>}/>

// HashRouter : 옛날 방식, #을 사용함
//              구버전 브라우저에서 <BrowserRouter>가 적용이 안될 경우 사용.
//              abc.com/#/path/to/route

// MemoryRouter : 브라우저 주소랑 상관없이 작동.
//                테스트 환경에서 사용하기 좋음
//                임베디드웹앱, React native에서도 사용하기 좋음

// Link : a태그처럼 경로 이동 시 사용하지만 (주소변경) 페이지가 새로고침되지는 않음.

// url 파라미터는 ID, 이름, 특정 데이터를 조회 할 떄 사용
// : /profiles/:username
// username은 다르게 적어도 괜찮지만 path(App.js)와 params(Home.js)를 일치 시켜줘야한다. 그 후 정의된 이름을 입력 ex. messi, gaga

// 쿼리스트링은 키워드 검색, 페이지네이션, 정렬방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용
// : /about?details=true
// 사용하는 이유. 처리해야할 내용이 많을 때 조건을 걸어 처리할 수 있게 한다.



import React from "react";
import About from "./About";
import Home from "./Home";
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import RouteInfo from "./RouteInfo";
import Boards from "./Boards";
import Board from "./Board";
import Layout from "./Layout";
import NotFound from "./NotFound";

const App = () => {
  return (

    // react-router-dom 5버전
    // <div>
    //   <Route path="/" Component={Home}/>
    //   <Route path="/about" Component={About}/>
    // </div>

    // react-router-dom 6버전
    <div>
        {/* 1. <Routes>를 활용하여 url 경로와 렌더링 해줄 컴포넌트를 연결. */}
      <Routes>
        <Route element={<Layout/>}>
            {/* <Route path="/" element={<Home/>}/> */}
            {/* "/"을 입력하면 localhost:3000과 같다. */}
          <Route index element={<Home/>}/>
            {/* index = 웹페이지의 메인, 맨 처음 경로를 뜻한다. */}

          <Route path="/about" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile/>}/>
          <Route path="/info" element={<RouteInfo/>}/>
         

            {/* 게시글 방법 1 - 게시글 목록(Boards)과 게시글 상세내용(Board) 분리 */}
            {/* <Route path="/boards" element={<Boards/>}/>
            <Route path="/boards/:id" element={<Board/>}/> */}

            {/* 게시글 방법 2 - 게시글 상세내용이라는 하위 컴포넌트 진입 시, 게시글목록 상위 컴포넌트가 보여지게 함 */}
          <Route path="/boards" element={<Boards/>}>
            <Route path=":id" element={<Board/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        {/* * = 모든 값, 즉 / 다음 뭘 입력해도 모두 받는다. */}
      </Routes>
    
    <hr/> {/* 선 */}

        {/* 2. a태그와 Link 비교: 새로고침 유무 */}
      <a href="/about" style={{textDecoration: "none", paddingLeft: "5px"}}>이동(페이지 자체가 새로고침 된다.)</a>
      
    <hr/>
      <ul style={{listStyle: "none", paddingLeft: "5px", display: "flex"}}>
        <li><Link to="/" style={{textDecoration: "none", marginRight: "5px"}}>메인홈</Link></li>
        <li><Link to="/about" style={{textDecoration: "none", marginRight: "5px"}}>사이트소개</Link></li>
        <li><Link to="/info" style={{textDecoration: "none", marginRight: "5px"}}>라우트정보</Link></li>
      </ul>
    <hr/>

    </div>
  );
}

export default App;
