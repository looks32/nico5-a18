import React from 'react';
import { IMoive, makeImagePath } from "../api";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const CardList = styled.div`
	position: relative;
	width: 200px;
	margin-top: 10px;
	margin-left: 10px;
	
	> a {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: rgba(0,0,0,0.5);
		opacity: 0;
		transition: 0.4s opacity;
		&:hover {
			opacity: 1;
		}
	}
	img {width:100%}

	strong {
		display: block;
		position: absolute;
		width: 100%;
		text-align: center;
		color: #fff;
		left: 0;
		top: 50%;
		margin-top: -10px;
	}
`

export default function Card({id, title, poster_path}:IMoive) {
  return (
	<CardList key={id}>
		<Link to={`detail/${id}`}>
			<strong>{title}</strong>
		</Link>
		<img src={makeImagePath(poster_path)} alt={title} />
	</CardList>
  )
}
