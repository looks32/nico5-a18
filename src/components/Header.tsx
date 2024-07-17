import React, { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 10px 20px;

    background-color: #000;

    h1 {
        color:#fff;
    }

    ul {
        display: flex;
        justify-content: space-between;
        li ~ li {
            margin-left: 10px;
        }
        a {
            position: relative;
            color:#fff;
        }
    }
`

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  /* background-color: ${(props) => props.theme.red}; */
  background-color: red;
`;



export default function Header() {

    const homeMatch = useMatch('/');
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
            logo
            </Link>
        </h1>
        <ul>
            <li>
                <Link to="/">
                    Home {homeMatch != null ? <Circle layoutId="circle"/> : null}
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
    </HeaderWrap>
  );
}
