import { useState } from "react";
import DonutScreen from "./screens/DonutScreen";

function App() {
  const [screen, setScreen] = useState<number>(1);

  const handleScreen = (screenNumber: number) => {
    setScreen(screenNumber);
  };

  return (
    <>
      {screen === 1 && <DonutScreen screen={screen} onScreenChange={handleScreen} />}
      {screen === 2 && <DonutScreen screen={screen} onScreenChange={handleScreen} />}
      {screen === 3 && <DonutScreen screen={screen} onScreenChange={handleScreen} />}
    </>
  );
}

export default App;