import React from "react";
import styled from "styled-components";
import Match from "./Match";
import { useState, useEffect } from 'react';
import { getMatch } from "../../modules/kart/api"

const Container = styled.div`
  position:relative;
  margin-top:5%;
`;

const PersonInfo = styled.div`
  margin:0 auto;
  background-color:#284C7D;
  width:805px;
  padding:20px;
  height:100%;
  border-radius:10px;
  margin-bottom:50px;
  overflow:auto; 
  border:2px solid #1F3D73;
  box-shadow: 6px 6px #1D284E;
`;

const ImgDiv = styled.div`
  float:left;
  width:30%;
  line-height:100%;
  text-align:center;
  margin-right:35px;
`;

const CharacterImg = styled.img`
  padding:10px;
  position:relative;
  display:block;
  margin-top:8px;
  margin-left:-10px;
  width:100%;
  object-fit:contain;
  z-index:1;
`;

const Nickname = styled.p`
  font-size:23px;
  font-weight:600;
  color:white;
  background-color:#102158;
  border-radius:7px;
  padding:15px;
  margin:4px;
`;

const InfoDiv = styled.div`
  width:64%;
  float:left;
`;

const RankInfo = styled.div`
  display:block;
  margin-bottom:14px;
  padding:15px;
  height:100%;
  border-radius:10px;
  background-color:#1F345C;
  border-radius:10px;
`;

const InfoTitle = styled.span`
  font-size:22px;
  font-weight:500;
`;

const InfoValue = styled.span`
  float:right;
  font-size:22px;
  font-weight:500;
  color:white;
`;

const TypeInfo = styled.div`
  display:block;
  float:left;
  width: 43%;
  padding:15px;
  height:100%;
  border-radius:10px;
  background-color:#1F345C;
  border-radius:10px;
`;

const TypeTitle = styled.span`
  float:left;
  font-size:22px;
  font-weight:500;
`;
const TypeTitleTwo = styled.span`
  float:left;
  font-size:22px;
  font-weight:500;
`;

const TypeValue = styled.span`
  float:right;
  font-size:22px;
  font-weight:500;
  color:white;
`;

const Checkbox = styled.input`
  position: absolute;
  left: 48%
`;

const Changetype = styled.span`
  position: relative;  
  left: 43%;
  top: -20px;
  width:200px;
  height:20px;
`;


export default ({ usrId, nickname }) => {

  
  const [posts, setPosts] = useState([]);
  //console.log(usrId)
  useEffect(async () =>{
    setPosts(await getMatch(usrId))
  },[])

  
  //console.log(posts)
  const name = posts.nickName
  const data = posts
  //console.log(data)
  
  const [loads, setLoads] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [checked, setChecked] = useState(0);
  const handleClick = () => {
    if (checked === 0) {
      setCurrentPage(1);
      setChecked(1);
    }
    else if (checked === 1) {
      setCurrentPage(1);
      setChecked(0);
    }
  }

  useEffect(() => {
    setLoads(true);
    setPosts(data);
    setLoads(false);
  }, [data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  }

  let speed = [];
  let item = [];
  speed.push('7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a');
  speed.push('56c651b08836f7c513545e61837ee1ff917d10a8bdbd95a09e5ee5ca2024f157');
  speed.push('b73122a1e6559949df183992491d440f00272ebecf9c415ceec8197abb936432');
  speed.push('9edf78dd2f844ff6b25e747be9bd29d31b5ad4e06389cfc64b8bc9815bb02610');
  speed.push('b4dfec547dfd89d2b8f33ad833e1d433a8c85a48d3c4c52ae4855a56eb8d7991');
  speed.push('effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e');
  speed.push('8e432e8122a23f4d06a3d43b1cec2fb9d939bb1a5c30b571574ee5f74fda9d66');
  speed.push('221dec22f320badabd66dc43c3b67c1f88f38e90f4ac2906ed86fd605d78d10a');
  speed.push('826ecdb309f3a2b80a790902d1b133499866d6b933c7deb0916979d1232f968c');
  speed.push('e60946660f964b7aadf47691a6c663cc57b2cf8021761c9183aa1fabea1f8537');

  item.push('7ca6fd44026a2c8f5d939b60aa56b4b1714b9cc2355ec5e317154d4cf0675da0');
  item.push('01fd412de5437005a62300b6a135a546053d22ec2b48cd018605338c3f1bffff');
  item.push('ee2426e23fa56f7a695084e1fc07fe6bb03a0b3b0c71c4e1f1b7e7e78e6c6878');
  item.push('6f2d79ba8579760af6239ada4fd09c158430625d537676dd0fe07e9934e1d55b');
  item.push('d1a35bd884308b370085b22809f1cb7fa8ab3373c20aaa12c40a14491e9e4f21');
  item.push('b0da8c192a6e908b871f65527b074a59652e0ad8525936b5cf1755d9d86d50fd');
  item.push('196fbff597e92e7454fc1acd1f36936dd94c97e5a57abf513469526399900e78');
  item.push('e7be8820e2836e5779dfb5339956768c04ea6cc5788babb1e993b764b86ccec8');
  item.push('32f9446c97af9d2d928a16161413b5a500c58304df1bce3ddd94a140335b3348');
  item.push('14e772d195642279cf6c8307125044274db371c1b08fc3dd6553e50d76d2b3aa');

  let speedArr = [];
  let itemArr = [];

  let rank1=0;
  let rank2=0;
  let rank3=0;

  if (typeof data !== 'undefined') {
    for (let l in data.matches) {
      for (let m in data.matches[l].matches) {
        if (data.matches[l].matches[m].player.matchRank === '1') {
          rank1 = rank1 + 1;
        }  
        else if (data.matches[l].matches[m].player.matchRank === '2') {
          rank2 = rank2 + 1;
        } 
        else if (data.matches[l].matches[m].player.matchRank === '3') {
          rank3 = rank3 + 1;
        }    
      }
    }
  }

  if (typeof data !== 'undefined') {
    for (let i in data.matches) {
      for (let j in data.matches[i].matches) {
        for (let prop in speed) {
          if (speed[prop] === data.matches[i].matches[j].matchType) {
            speedArr.push(data.matches[i].matches[j]);
            break;
          }
        }
        for (let prop2 in item) {
          if (item[prop2] === data.matches[i].matches[j].matchType) {
            itemArr.push(data.matches[i].matches[j]);
            break;
          }
        }
      }
    }
  }

  return (
    <>
      <Container>
        { name &&
          <>
            <PersonInfo>
              <ImgDiv>
                <CharacterImg onError={(e) => { e.target.src = "/kart/unknown.png" }} src={'/kart/character/' + data.matches[0].matches[0].character + '.png'}>
                </CharacterImg>
                <Nickname>{nickname}</Nickname>
              </ImgDiv>
              <InfoDiv>
                <RankInfo style={{ border: '1px solid #28A7CF' }}>
                  <InfoTitle style={{ color: '#FFEC00' }}> 1위 달성</InfoTitle>
                  <InfoValue>{rank1}회</InfoValue>
                </RankInfo>
                <RankInfo>
                  <InfoTitle style={{ color: '#53E567' }}> 2위 달성</InfoTitle>
                  <InfoValue>{rank2}회</InfoValue>
                </RankInfo>
                <RankInfo>
                  <InfoTitle style={{ color: '#5FDFF3' }}> 3위 달성</InfoTitle>
                  <InfoValue>{rank3}회</InfoValue>
                </RankInfo>
                <TypeInfo>
                  <TypeTitle style={{ color: '#FA75E6' }}></TypeTitle> <TypeTitleTwo>{'\u00A0'}스피드전 </TypeTitleTwo>
                  <TypeValue><span style={{ color: '#FA75E6' }}>{speedArr.length}</span>회</TypeValue>
                </TypeInfo>
                <TypeInfo style={{float:'right'}}>
                  <TypeTitle style={{ color: '#AA88FF' }}> </TypeTitle> <TypeTitleTwo>{'\u00A0'}아이템전 </TypeTitleTwo>
                  <TypeValue><span style={{ color: '#AA88FF' }}>{itemArr.length}</span>회</TypeValue>
                </TypeInfo>
              </InfoDiv>
            </PersonInfo>

            <div>
              <div position="relative">
                <Checkbox type="checkbox" onChange={handleClick} checked={checked} />
                <Changetype>매치타입 전환</Changetype>
              </div>
            </div>
            {checked === 0 && <>
              <Match key={data.matches[0]?.matches.matchId} posts={currentPosts(speedArr)} loading={loads} />
            </>
            }
            {checked === 1 && <>
              <Match key={data.matches[1]?.matches.matchId} posts={currentPosts(itemArr)} loading={loads} />
            </>
            }
            
          </>
          
        }
      </Container>
    </>
  );
};
