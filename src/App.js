import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { PRIMARY_SLIDER_DATA } from "constants/sliders";
import Header from "sections/header";
import Footer from "sections/footer";
import Slider from "components/slider";
import Banner from "components/banner";
import Products from "components/products";
import Categories from "components/categories";

import { Root } from "styles/App.styled";
import { dark, light } from "styles/Theme";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  const handleThemeChange = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", !isDark);
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Root>
        <Header isDark={isDark} switchTheme={handleThemeChange} />
        <main>
          <Slider data={PRIMARY_SLIDER_DATA} />
          <Categories />
          <Banner />
          <Products />
        </main>
        <Footer />
      </Root>
    </ThemeProvider>
  );
}

export default App;
