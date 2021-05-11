import React, { useCallback, useState } from "react";
import PortfolioDevice from "../src/components/Device/PortfolioDevice";
import PowerScreen from "../src/components/Screen/PowerScreen/PowerScreen";
import CodeTypingScreen from "../src/components/Screen/CodeTypingScreen/CodeTypingScreen";
import PortfolioContent from "../src/components/Contents/PortfolioContent";
import { IPowerMode } from "../src/models/model";

const App: React.FC = () => {
  const [mode, setMode] = useState<IPowerMode>(IPowerMode.OFF);

  const handleClick = useCallback(() => {
    setMode(IPowerMode.ON);
  }, []);

  return (
    <PortfolioDevice
      screenContent={
        <>
          <CodeTypingScreen />
          <PowerScreen mode={mode} handleClick={handleClick} />
          <PortfolioContent mode={mode} />
        </>
      }
    />
  );
};

export default App;
