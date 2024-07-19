import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
	padding: 40px 20px;
	color:#fff;
	border-top: 1px solid #fff;
`

export default function Footer() {
  return (
	<FooterWrap>&copy; 2024 NOMFLEX</FooterWrap>
  )
}
