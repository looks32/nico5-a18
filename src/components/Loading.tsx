import React from 'react';
import styled from 'styled-components';

const LoadWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  
  > span {
      width: 48px;
      height: 48px;
      border: 2px solid #fff;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
      &::after,
      &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: #ff3d00;
        width: 6px;
        height: 6px;
        transform: translate(150%, 150%);
        border-radius: 50%;
      }
      &::before {
      left: auto;
      top: auto;
      right: 0;
      bottom: 0;
      transform: translate(-150%, -150%);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`




export default function Loading() {
  return (
	  <LoadWrap>
      <span className="loader"></span>
    </LoadWrap>
  )
}
