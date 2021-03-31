import axios from 'axios';

export async function getUserId(nickname) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`
        , {headers:{
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTM0MjQ4Mzg3OCIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2MTY3NDM2MDcsImV4cCI6MTYzMjI5NTYwNywiaWF0IjoxNjE2NzQzNjA3fQ.sQrrM4P2bwphpndetNOm3wfQKSGj8HiSt3PEqMTk5Y0"
        }}
    );
    // console.log(response)
    return response.data;
}

export async function getUserInfo(accessid) {
    const response = await axios.get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}`
        , {headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTM0MjQ4Mzg3OCIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2MTY3NDM2MDcsImV4cCI6MTYzMjI5NTYwNywiaWF0IjoxNjE2NzQzNjA3fQ.sQrrM4P2bwphpndetNOm3wfQKSGj8HiSt3PEqMTk5Y0"
        }}
    );
    return response.data;
}

