import React from "react";
import { useParams } from "react-router-dom";

const data = {
    messi: {
        name: 'Messi',
        description: 'best soccer player, born in Argentina'
    },

    gaga: {
        name: 'Lady Gaga',
        description: 'famouse American singer'
    }
};

const Profile = () => {

    const params = useParams();
        console.log(params); // {username: 'gaga'}
    const profile = data[params.username];
        console.log(profile); // {name: 'Lady Gaga', decription: 'famous american singer'}
        
    // username은 App.js의 path="/profiles/:username"과 일치해야하기 때문에 작성
    // 이 username은 messi, gaga 같은 이름 자체로 내용을 불러온다
    // 그래서 :username 쪽에 각각의 이름을 입력한다.

    return(
        <div>
            <h1>User profile</h1>

                {/* 파라미터(여기서는 웹페이지 이름)를 입력 시 배열을 참조하여 참 거짓을 판단. */}
                {/* 테스트 : http://localhost:3000/profiles/abcd */}
            {profile?(
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;