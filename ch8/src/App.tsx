import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Button from "./component/Button";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Theme Switcher</h1>
        <Button />
      </div>
    </ThemeProvider>
  );
};

export default App;