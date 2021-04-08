import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {getMatchInfo} from '../../modules/kart/api'


export default function MatchTableRow({mId, accessId}) {
  const [match, setMatch] = useState('');
  const [matchModal, setMatchModal] = useState();

  
useEffect(async () => {
  getMatchInfo(mId).then((res) => setMatch(res));
},[]);


  return (
    <>
    <div>
      {!mId=='' && 
        <div>
          {console.log(match)}모달!
        </div>
        }
    </div>
    </>
  )
}


