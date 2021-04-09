import React from "react";
import styled from "styled-components";
import gameType from "../../metadata/gameType.json"
import track from "../../metadata/track.json"
import kart from "../../metadata/kart.json"
import character from "../../metadata/character.json"
import moment from 'moment';
import MatchDetail from './MatchDetail'

const Info = styled.div`
  display:flex;
  justify-content: flex-start;
  background-color: #fff;
  color: #3c3c3c;
  margin: 0 auto;
  width: 800px;
  height: 100px;
  border: 3px solid #ccc;
  margin-bottom: 50px;
  border-radius: 2px;
  white-space:nowrap;
`
const Date = styled.div`
  flex-basis: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 14px;
`;

const MatchInfo = styled.div`
  position: relative;
  flex-basis: 150px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  //outline: 1px solid red;
`;

const TypeTitle = styled.div`
  line-height:80px;
  font-size:18px;
  font-weight:700;
`;

const Speed = styled.div`
  position:absolute;
  top: 7px;
  left: 25%;
  border-radius:5px;
  padding:3px;
  font-weight:500;
  margin:5px;
  font-size:12px;
  background-color:#1789D3;
`;

const SubTitle = styled.div`
  position:relative;
  flex-basis: 280px;
  text-align:center;
  line-height:100px;
  font-size:16px;
  font-weight:600;
`;

const Tooltip = styled.img`
  position: absolute;
  left:0;
  transform: translate(54%,5%);
  width: 134px;
  height: 92px;
  opacity: 0.1;
  &:hover{
    opacity: 1;
  }
`

const PInfo = styled.div`
  flex-basis: 90px;
  align-self: center;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  //outline: 1px solid #ccc;
`

const TimeTitle = styled.div`
  flex-basis: 80px;
  text-align: center;
  line-height: 100px;
  font-weight: 700;
  font-size:16px;
  //outline: 1px solid purple;
`;

const Result = styled.div`
  flex-basis: 100px;
  text-align: center;
  //outline: 1px solid red;
`;

const Ranks = styled.div`
  line-height: 100px;
  font-size: 20px;
  font-style: italic;
`;



function findMatchType(matchType) {
  for (let i = 0; i < gameType.length; i++) {
    if (gameType[i].id === matchType) {
      return gameType[i].name;
    }
  }
}

function findTrackName(trackId) {
  for (let i = 0; i < track.length; i++) {
    if (track[i].id === trackId) {
      return track[i].name;
    }
  }
  return "알 수 없는 트랙"
}

function findCharacterName(characterId) {
  for (let i = 0; i < character.length; i++) {
    if (character[i].id === characterId) {
      return character[i].name;
    }
  }
  return "알 수 없는 캐릭터"
}

function findKartName(kartId) {
  for (let i = 0; i < kart.length; i++) {
    if (kart[i].id === kartId) {
      return kart[i].name;
    }
  }
  return "알 수 없는 카트"
}

function makeElapsedMin(time) {
  const elapsedSec = parseInt(time / 1000);
  const elapsedMin = parseInt(elapsedSec / 60);
  const time_Min = elapsedMin;
  return time_Min;
}
function makeTimeSec(time, elapsedMin) {
  const result = parseInt(time / 1000) - (elapsedMin * 60);
  return result;
}
function makeTimeMSec(time, elapsedMin) {
  const result = (time - (elapsedMin * 60 * 1000)) % 100;
  return result;
}

export default ({ posts, loading }) => {
  if (loading) {
    return (
        <p>로딩 중...</p>
    );
  }
  return (
    <>
      {posts.length === 0 &&
        <div style={{textAlign:'center'}}>
          </div>
      }
      {posts.map(post => (
        <Info key={post.matchId}>
          <Date>{moment(post.startTime).format('YY.MM.DD')}</Date>
          <MatchInfo>
            {(post.channelName === "speedIndiFast" || post.channelName === "speedTeamFast") &&
              <Speed>빠름</Speed>
            }
            {(post.channelName === "speedIndiFastest" || post.channelName === "speedTeamFastest") &&
              <Speed style={{ backgroundColor: '#E15F93' }}>매우 빠름</Speed>
            }
            {(post.channelName === "speedTeamInfinit" || post.channelName === "speedIndiInfinit") &&
              <Speed style={{ backgroundColor: '#9644C6' }}>무한</Speed>
            }
            {(post.channelName === "itemNewItemTeamFastest2Enchant" || post.channelName === "itemNewItemIndiFastest2Enchant") &&
              <Speed style={{ backgroundColor: '#C83158' }}>가장 빠름</Speed>
            }
            {(post.channelName === "itemNewItemTeamFast2Enchant" || post.channelName === "itemNewItemIndiFast2Enchant") &&
              <Speed style={{ backgroundColor: '#3EB5E8' }}>빠름</Speed>
            }
            <TypeTitle>{findMatchType(post.matchType)}</TypeTitle>
          </MatchInfo>
          <SubTitle>
            <span style={{color: '#ccc', fontWeight: '300'}}>| </span> {findTrackName(post.trackId)} <span style={{color: '#ccc', fontWeight: '300'}}> |</span>
            <Tooltip onError={(e) => { e.target.src = "/kart/unknown.png" }} src={'/kart/track/' + post.trackId + '.png'}></Tooltip>
            </SubTitle>
          <PInfo>
            <div style={{marginBottom: '10px'}}>{findKartName(post.player.kart)}</div>
            <div>{findCharacterName(post.player.character)}</div>
          </PInfo>
          <TimeTitle>
            {makeElapsedMin(post.player.matchTime)}'{makeTimeSec(post.player.matchTime, makeElapsedMin(post.player.matchTime))}"{makeTimeMSec(post.player.matchTime, makeElapsedMin(post.player.matchTime))}
          </TimeTitle>
          <Result>
          {(post.player.matchRank === '1') &&
              <Ranks><span style={{ fontSize: '35px', fontWeight: '700', color: '#FFE73C' }}>{post.player.matchRank}</span>/
          <span style={{ fontSize: '20px' }}>{post.playerCount}</span>
              </Ranks>}
            {(post.player.matchRank !== '99' && post.player.matchRank !== '' && post.player.matchRank !== '1') &&
              <Ranks><span style={{ fontSize: '35px', fontWeight: '700', color: '#999' }}>{post.player.matchRank}</span>/
          <span style={{ fontSize: '20px' }}>{post.playerCount}</span>
              </Ranks>}
            {(post.player.matchRank === '99' || post.player.matchRank === '') &&
              <Ranks ><span style={{fontWeight:600 ,color: 'red'}}>리타이어</span>
              </Ranks>
            }
        </Result>
            <MatchDetail mId={post.matchId}></MatchDetail>
        </Info>
      ))}
    </>
  );
};



