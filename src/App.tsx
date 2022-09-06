import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles/Container.styled";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/Global";

const theme = {
  colors: {
    primary: "#191970",
    secondary: "#5D3FD3",
    teritary: "	#5f8dc9",
    quaternary: "	#a3a3db",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container></Container>
      </ThemeProvider>
    </>
  );
}

export default App;
