import React, {useState } from "react";
import Head from "next/head";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "../styles/globals";

// this was here

export default function App({ Component, pageProps }) {

  const [theme, setTheme ] = useState("light");
  const isDarkTheme = theme === "dark";
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const Mode = (props) => (
    <button onClick={() => themeToggler()}>{isDarkTheme ?
            <span aria-label="Light mode" role="img">Light 🌞</span> :
            <span aria-label="Dark mode" role="img">Dark 🌜</span>}</button>
  );


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <>
    
      <Head>
        <title>Ronald Chittinappilly</title>
      </Head>
      
      <GlobalStyles />
      <Mode />
        <Component {...pageProps} />
    </>
    </ThemeProvider>
  );
}
