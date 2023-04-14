import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <p>홈 메인 페이지! 가장 먼저 보여지는 페이지</p>

            <hr/>

            <ul style={{listStyle: "none", paddingLeft: "5px"}}>
                <li>
                    <Link to="/about" style={{textDecoration: "none"}}>about the website</Link>
                </li>
                <li>
                    <Link to="/profiles/messi" style={{textDecoration: "none"}}>Messi의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gaga" style={{textDecoration: "none"}}>Lady Gaga의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void" style={{textDecoration: "none"}}>존재하지 않는 프로필</Link>
                </li>
                    {/* 꼭 void가 아니어도 된다. 빈 프로필이라는 의미로 void로 입력.
                    여기서는 messi나 gaga만 아니면 뭐든 상관없다. */}
                <li>
                    <Link to="/boards" style={{textDecoration: "none"}}>게시글 목록</Link>
                </li>
            </ul>

        </div>
    );
}

export default Home;