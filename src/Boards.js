import React from "react";
import { Link, Outlet } from "react-router-dom";

const Boards = () => {
    return(
        <div>
            <ul style={{listStyle: "none", paddingLeft: "5px"}}>
                <li>
                    <Link to="/boards/1" style={{textDecoration: "none"}}>게시글 제목 1</Link>
                </li>
                <li>
                    <Link to="/boards/2" style={{textDecoration: "none"}}>게시글 제목 2</Link>
                </li>
                <li>
                    <Link to="/boards/3" style={{textDecoration: "none"}}>게시글 제목 3</Link>
                </li>
            </ul>
            
            <Outlet/> {/* Board의 내용이 들어온다. */}
        </div>
    )
}

export default Boards;