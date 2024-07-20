import React from "react";
import styled from "styled-components";

interface ITit {
    cont: string;
};

const Title = styled.h2`
    padding-top: 40px;
    color:#fff;
    font-size:40px;
    font-weight: 900;
    text-align: center;
`

export default function Tit({cont}:ITit) {
  return <Title>{cont}</Title>;
}
