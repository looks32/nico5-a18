import React from 'react';
import { IMoive, makeImagePath } from "../api";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";


const CardList = styled(motion.div)`
	position: relative;
	width: 200px;
	margin-top: 100px;
	margin-left: 10px;
	border-radius: 20px;

	> a {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: rgba(0,0,0,0.5);
		opacity: 0;
		border-radius: 20px;
		transition: 0.4s opacity;
		&:hover {
			opacity: 1;
		}
	}
	img {
		width:100%;
		border-radius: 20px;
	}

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

export default function Card({id, title, poster_path, layout}:IMoive) {
  return (
	<CardList key={id} layoutId={`${id}${layout}`} initial={{marginTop:"100px"}} animate={{marginTop: "10px"}}>
		<Link to={`detail/${id}?type=${layout}`}>
			<strong>{title}</strong>
		</Link>
		<img src={makeImagePath(poster_path)} alt={title} />
	</CardList>
  )
}
