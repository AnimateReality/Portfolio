import React, {useState } from "react";
import Head from "next/head";
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "../styles/globals";

export default function App({ Component, pageProps }) {

  const [theme, setTheme ] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const Mode = (props) => (
    <button onClick={() => themeToggler()}>Dark Mode</button>
  );

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Mode />
      {children}
    </ThemeProvider>
  );
  
  return (
    <>
      <Head>
        <title>Ronald Chittinappilly</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
