// useLoctaion에 대하여
// hash : 주소의 # 문자열 뒤의 값
// key : location 객체의 고유 값
// pathname : 현재 주소의 경로
// search : 맨 앞에 ? 문자를 포함한 쿼리스트링 값
// state : 페이지로 이동할 때 임의로 넣을 수 있는 값

import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {

    const location = useLocation();

    return(
        <div>
            <h1>About</h1>
            <p>이 사이트는 리액트 라우터를 실습해 보는 예제 프로젝트 입니다.</p>
            <p>쿼리스트링 search : {location.search}</p>
            <p>쿼리스트링 hash : {location.hash}</p>
            <p>쿼리스트링 key : {location.key}</p>
            <p>쿼리스트링 pathname : {location.pathname}</p>
            <p>쿼리스트링 state : {location.state}</p>
        </div>
    );
}

export default About;