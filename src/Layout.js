import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    };

    const goBack = () => {
        navigate(-1) // 이전 페이지 1번 뒤로가기(숫자가 늘어날수록 한번에 여러번)
    };

    const goBoards = () => {
        // 테스트방법:
        // 순서1 http://localhost:3000/about
        // 순서2 게시글 목록 버튼 클릭 후 뒤로가기 하면 about이 나옴
        // 방법1 - about으로 뒤로가기 됨
        // navigate('/boards')

        // 방법2 - home 화면으로 뒤로가기 됨
        navigate('/boards', {replace: true})
    };

    return(
        <div>
            <header style={{background: "lightgray", padding: 16, fontSize: 24}}>
                <h2>Header</h2>
                <button onClick={goHome}>홈으로</button>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goBoards}>게시글 목록</button>
            </header>
            
            <main>
                <Outlet/>
            </main>
            
        </div>
    )
}

export default Layout;