import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useNavigate } from 'react-router-dom';


const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    background-color: #000;

    h1 {
        color:#fff;
        img {
            width:40px;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        li ~ li {
            margin-left: 20px;
        }
        a {
            position: relative;
            color:#fff;
            transition: 0.3s color;
            &:hover {
                color: red;
            }
        }
    }

    form {
        position: relative;
        input {
        display: inline-block;
        width: 120px;
        padding-right: 25px;
        color:#fff;
        outline:none;
        border:none;
        border-bottom: 1px solid #fff;
        background-color: #000;
        transition: 0.3s border;
            &:focus {
                border-color: red;
            }
        }
            
        button {
            display: inline-block;
            position: absolute;
            right: 2px;
            bottom: 4px;
            width: 15px;
            height: 15px;
            padding:0;
            border: none;
            cursor: pointer;
            background-color: transparent;
            img {
                width : 15px;
            }
        }
    }
`

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;



export default function Header() {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const searchResult = (e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(search.length > 0){
            navigate(`/search/${search}`);
            setSearch('');
        } else {
            alert('Please enter your search term');
        }
    }

    const popularMatch = useMatch('/popular');
    const comingMatch = useMatch('/comingsoon');
    const nowMatch = useMatch('/nowplaying');

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {

        // console.log("Page scroll: ", latest)

        if(latest > 80){
            // console.log('a',scrollY)
        } else {
            // console.log('b',scrollY)
        }
    })
    

  return (
    <HeaderWrap>
        <h1>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/nLogo.png`} alt="" />
            </Link>
        </h1>
        <ul>
            <li>
                <Link to="/popular">
                    Popular {popularMatch != null ? <Circle layoutId="circle"/> : null}
                </Link>
            </li>
            <li>
                <Link to="/comingsoon">
                    comingsoon {comingMatch != null ? <Circle layoutId="circle"/> : null}
                </Link>
            </li>
            <li>
                <Link to="/nowplaying">
                    nowplaying {nowMatch != null ? <Circle layoutId="circle"/> : null}
                </Link>
            </li>
        </ul>
        <form onSubmit={onSubmit} >
            <input type="text" value={search} onChange={searchResult}/>
            <button type="submit">
                <img src={`${process.env.PUBLIC_URL}/icon_search.svg`} alt="검색 아이콘" />
            </button>
        </form>
    </HeaderWrap>
  );
}
