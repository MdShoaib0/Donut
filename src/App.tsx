import { useState } from "react";
import BlueBerry from "./screens/BlueBerry";
import Chocolate from "./screens/DarkChocolate";
import Strawberry from "./screens/Strawberry";

function App() {
  const [screen, setScreen] = useState(1);

  const handleScreen = (screenNumber: number) => {
    setScreen(screenNumber);
  };

  return (
    <>
      {screen === 1 && <Strawberry onScreenChange={handleScreen} />}
      {screen === 2 && <BlueBerry onScreenChange={handleScreen} />}
      {screen === 3 && <Chocolate onScreenChange={handleScreen} />}
    </>
  );
}

export default App;