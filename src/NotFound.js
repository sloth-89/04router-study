import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const NotFound = () => {

    const text1 = {
        color: "red",
    }

    return(
        <div className="App-header">
            <h1 style={text1}>404</h1>
            <p><strong>Page not found :)</strong></p>
            <p>페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.</p>
            <p>
                메인홈페이지는 <Link to="/" style={{textDecoration: "none"}}>Go Home</Link>을 클릭하면 다시 방문 가능합니다.
            </p>
        </div>
    )
}

export default NotFound;