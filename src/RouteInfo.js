import React from "react";
import { useSearchParams } from "react-router-dom";

const RouteInfo = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) +1;
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