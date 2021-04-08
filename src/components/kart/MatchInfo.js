import React from 'react'
import { useEffect, useState } from "react"
import styled from 'styled-components'


export default function MatchInfo({ visible, onClose, match}) {
  
  return (
    <div>
      <h3>매치 상세정보</h3>
      <button onClick={onClose}>X</button>
      <p>매치 정보: </p>
      <table>
        <tr>
          <th>#</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
        <tr>
          <th>카트</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
        <tr>
          <th>유저</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
        <tr>
          <th>기록</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
      </table>
    </div>
  )
}
