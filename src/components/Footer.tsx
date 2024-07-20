import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
	padding: 40px;
	color:#fff;
	text-align: right;
	border-top: 1px solid #fff;
`

export default function Footer() {
  return (
	<FooterWrap>&copy;copyright 2024 NOMFLEX</FooterWrap>
  )
}
