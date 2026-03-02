import React, {useContext} from "react";
import "./App.scss";
import Main from "./containers/Main";
import Squares from "./components/squares/Squares";
import StyleContext from "./contexts/StyleContext";

function App() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <div>
      {isDark && (
        <Squares 
          speed={0.5}
          size={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverColor="#222222"
        />
      )}
      <Main />
    </div>
  );
}

export default App;
