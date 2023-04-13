
// 테스트 url주소 : http://localhost:3000/info?detail=true&mode=1

import React from "react";
import { useSearchParams } from "react-router-dom";

const RouteInfo = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
        console.log(detail);
    const mode = searchParams.get('mode');
        console.log(mode);

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }

    const onIncreaseMode = () => {
        // 타입 테스트!! - 방법 : mode +1의 버튼 클릭 시 함수코드가 시작
        console.log(typeof(1)) // number
        console.log(typeof("1")) // string
        console.log(typeof(1+"1"))  // string 
        console.log(1+"1") // 11
        console.log(1+1)
        console.log(mode) // mode의 값
        console.log(typeof(mode)) // string

        const nextMode = mode === null ? 1 : parseInt(mode) +1;
        // parseInt는 문자타입을 숫자타입으로 인식하게 하여 처리.
        setSearchParams({mode: nextMode, detail});
    }

    return(
        <div>
            <h1>Info</h1>
            <p>리액트 라우터의 </p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode +1</button>
        </div>
    )
}

export default RouteInfo;