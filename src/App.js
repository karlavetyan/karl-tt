import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { PRIMARY_SLIDER_DATA } from "constants/sliders";
import Header from "sections/header";
import Slider from "components/slider";

import { Root } from "styles/App.styled";
import { dark, light } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") || false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", !isDark);
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Root>
        <GlobalStyles />
        <Header isDark={isDark} switchTheme={handleThemeChange} />
        <main>
          <Slider data={PRIMARY_SLIDER_DATA} />
        </main>
      </Root>
    </ThemeProvider>
  );
}

export default App;
