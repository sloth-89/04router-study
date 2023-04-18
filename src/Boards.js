// 새 페이지로 이동하는 방법 1 : <Link to="">
// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Boards = () => {
//     return(
//         <div>
//             <ul style={{listStyle: "none", paddingLeft: "5px"}}>
//                 <li>
//                     <Link to="/boards/1" style={{textDecoration: "none"}}>게시글 제목 1</Link>
//                 </li>
//                 <li>
//                     <Link to="/boards/2" style={{textDecoration: "none"}}>게시글 제목 2</Link>
//                 </li>
//                 <li>
//                     <Link to="/boards/3" style={{textDecoration: "none"}}>게시글 제목 3</Link>
//                 </li>
//             </ul>
            
//             <Outlet/> {/* Board의 내용이 들어온다. */}
//         </div>
//     )
// }

// export default Boards;

// 새 페이지로 이동하는 방법 2 : NavLink
import { NavLink, Outlet } from "react-router-dom";

const Boards = () => {

    const activeStyle = {
        color: "pink",
        fontSize: 20
    }

    return(
        <div>
            <ul style={{listStyle: "none", paddingLeft: "5px"}}>
                <li>
                    <NavLink to="/boards/1" style={({isActive}) => (isActive? activeStyle : undefined)}>게시글 제목 1</NavLink>
                </li>
                <li>
                    <NavLink to="/boards/2" style={({isActive}) => (isActive? activeStyle : undefined)}>게시글 제목 2</NavLink>
                </li>
                <li>
                    <NavLink to="/boards/3" style={({isActive}) => (isActive? activeStyle : undefined)}>게시글 제목 3</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Boards;

// isActive란 acvtive하는 때를 의미