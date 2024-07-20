import styled from "styled-components";

// 공통 inner
export const AllWrap = styled.div`
	background-color: #000;
	padding-bottom: 100px;
`

export const CardWrap = styled.div`
	width: 840px;
	margin: 50px auto 0;
	display: flex;
	flex-wrap: wrap;
`

export const ErrorWrap = styled.div`
  padding: 120px 60px;
  color:#fff;
  font-size: 60px;

  a {
    display: block;
    margin-top: 20px;
    font-size: 30px;
    text-decoration: underline;
    &:hover {
      color : red;
    }
  }
`