import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIFA_API_KEY;

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

export async function getUserInfo(accessid) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}`
        , {headers: {
            "Authorization": API_KEY
        }}
    );
    return response.data;
}

