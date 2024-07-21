import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { screenMode } from "../atoms";


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
    background-color:${(props) => props.theme.bgColor};
    transition: 0.3s background;

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
            color:${(props) => props.theme.textColor};
            transition: 0.3s color;
            &:hover {
                color: red;
            }
        }
    }

    form {
        position: relative;
        padding-right: 20px;
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
            right: 22px;
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

const DarkMode = styled.div`
  position: absolute;
  top: cale(50% - 15px);
  right: 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.point};
    border: none;
    border-radius: 4px;
    background: none;
    cursor: pointer;
  }
`;


export default function Header() {
    const [mode, setMode] = useRecoilState(screenMode);

    const toggleTheme = (theme: string) => {
        if (theme === "dark") {
            setMode("light");
        } else {
            setMode("dark");
        }
    };

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
        <DarkMode>
            {mode === "light" ? (
            <button onClick={() => toggleTheme("light")} aria-label="light mode">
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z"></path>
                </svg>
            </button>
            ) : (
            <button onClick={() => toggleTheme("dark")} aria-label="dark mode">
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                ></path>
                </svg>
            </button>
            )}
      </DarkMode>
    </HeaderWrap>
  );
}
