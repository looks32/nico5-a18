import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { useRecoilValue } from 'recoil';
import { screenMode } from './atoms';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import { darkTheme, lightTheme } from './style/theme';

function Root() {
  const mode = useRecoilValue(screenMode);
  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header/>
        <Outlet/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default Root;
