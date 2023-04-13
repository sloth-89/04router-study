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
                <li>
                    <Link to="/boards" style={{textDecoration: "none"}}>게시글 목록</Link>
                </li>
            </ul>

        </div>
    );
}

export default Home;