import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {getMatchInfo} from '../../modules/kart/api'

const Display = styled.div`
  position: absolute;
  color: #000;
  background-color: #fff;
  z-index:1;
  right: 0;
  overflow: hidden
`

const Btn = styled.div`
  position: relative;
  right:0px;
  height: ${props => props.height};
  width:${props => props.width};
`

const Toggle = styled.button`
  position: absolute;
  background-color: #5383E8;
  border: none;
  height:100%;
  width:20px;
  right:0;
  cursor: pointer;
  padding: 0px 1px 1px 0px;
  
`

const Table = styled.div`

  width:100%;
    th, td{
    padding: 5px;
    width:120px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  tr {
    display: block;
    text-align: center;
    padding: 2px;
    font-size: 14px;
  }
`

const CharacterImg = styled.img`
width:40px;
height: 40px;
`

export default function MatchTableRow({mId}) {
  const [match, setMatch] = useState(false);
  const [open, setOpen] = useState(false);
  const btnClick = e =>{
    setOpen(!open);
  }
  
useEffect(async () => {
  getMatchInfo(mId).then((res) => setMatch(res));
},[]);

console.log(match)

let playerArr =[];

if(typeof match !== false) {
  for (let i in match.players){
    playerArr.push(match.players[i])
  }
}

playerArr.sort((a,b) => {
  if (!b.matchRank) return -1
  if (!a.matchRank) return 1
  if (a.matchRank > b.matchRank) return 1
  if (a.matchRank <= b.matchRank) return -1
});

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
  return (
    <>
    {match &&
      <Display>
        <Btn width = {open? '100%' : '20px'} height = {open? '100%':'20px'}>
          <Toggle onClick={btnClick}>👈</Toggle>
        <Table>
          <thead>
            {playerArr.map(rank => (
              <th key={rank.matchRank}>
                <>{rank.matchRank == 99 || rank.matchRank == ""
                ? <p style={{fontSize:"12px", color:"red", margin: "0"}}>Retired</p>
                : rank.matchRank
                }</>
              </th>
            ))}
          </thead>
          <tbody>
            {playerArr.map(rank => (
              <td key={ rank.kart + rank.characterName + rank.matchTime}>
                <tr><CharacterImg onError={(e) => { e.target.src = "/kart/empty_kart.png" }} src={'/kart/kart/' + rank.kart + '.png'}></CharacterImg></tr>
                <tr>{rank.characterName}</tr>
                <tr>{makeElapsedMin(rank.matchTime)}'{makeTimeSec(rank.matchTime, makeElapsedMin(rank.matchTime))}"{makeTimeMSec(rank.matchTime, makeElapsedMin(rank.matchTime))}</tr>
              </td>
            ))}
          </tbody>
        </Table>
        </Btn>
      </Display>
      }
    </>
  )
}