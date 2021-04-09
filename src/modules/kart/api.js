import axios from 'axios';

const API_KEY = process.env.REACT_APP_KART_API_KEY

export async function getUserId(usrName){

    const res = await axios.get(`https://api.nexon.co.kr/kart/v1.0/users/nickname/${usrName}`
    ,{headers: {
        'Authorization': API_KEY
    }})
    
    return res.data
};

export async function getMatch(usrId){

    const res = await axios.get(`https://api.nexon.co.kr/kart/v1.0/users/${usrId}/matches?start_date=&end_date= &offset=0&limit=100&match_types=`
    ,{headers: {
        'Authorization': API_KEY
    }})
    
    return res.data
    
};

export async function getMatchInfo(matchId){

    const res = await axios.get(`https://api.nexon.co.kr/kart/v1.0/matches/${matchId}`
    ,{headers: {
        'Authorization': API_KEY
    }})
    
    return res.data
};
