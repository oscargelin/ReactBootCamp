import React from "react";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./styles/Container.styled";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/Global";
import { StyledButton } from "./styles/Button.styled";
import Button from "./components/Button";

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
        <Button />
        <StyledButton color="#fff" backgroundColor="green" />
        <StyledContainer></StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
