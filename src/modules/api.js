import axios from 'axios';


const API_KEY = process.env.REACT_APP_FIFA_API_KEY;

// 닉네임으로 id 가져오기
export async function getUserId(nickname) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`
        , {headers:{
            "Authorization": API_KEY
        }}
    );
    // console.log(response)
    return response.data;
}

// id로 유저 정보 가져오기
export async function getUserInfo(accessid) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}`
        , {headers:{
            "Authorization": API_KEY
        }}
    );
    // console.log('me')
    return response.data;
}

// id로 역대 최고등급 가져오기
export async function getUserTopLevel(accessid) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}/maxdivision`
        , {headers:{
            "Authorization": API_KEY
        }}
    );
    return response.data;
}

// id로 최근 매치기록 조회
export async function getRecentMatch(accessid, matchtype, offset) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}/matches?matchtype=${matchtype}&offset=${offset}&limit=10`
        , {headers:{
            "Authorization": API_KEY
        }}
    );

    // if (response.data.length !== 0) {
    //     console.log(1)
    //     return response.data.map(async (matchid) => {
    //         const res = await axios.get(
    //             `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchid}`
    //             , {headers:{
    //                 "Authorization": API_KEY
    //             }}).data
    //         return res
    //     })
    // }
    // console.log(response)
    return response.data;
}

// matchid로 매치 상세 기록 조회
export async function getMatchDetail(matchid) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchid}`
        , {headers:{
            "Authorization": API_KEY
        }}
    );
    // console.log(response.data)
    return response.data;
}
