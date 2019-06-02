import React, { useState } from "react";

export const Context = React.createContext(null);

export default function State({ children }) {
  const [batteryCount, setBatteryCount] = useState(1);
  const [serialNumber, setSerialNumber] = useState('abcd123');
  const [indicators, setIndicators] = useState(["car", "", ""]);
  const [ports, setPorts] = useState(["Parallel"]);

  const handleBatteryCountChange = count => {
    setBatteryCount(count);
  };

  const handleSerialNumberChange = value => {
    setSerialNumber(value);
  };

  const handleIndicatorsChange = (i, value) => {
    const _indicators = [...indicators];
    _indicators[i] = value;
    setIndicators(_indicators);
  };

  const handlePortChange = port => {
    if (ports.includes(port)) {
      setPorts(ports.filter(p => p !== port));
    } else {
      setPorts([...ports, port]);
    }
  };
  return (
    <Context.Provider
      value={{
        batteryCount,
        serialNumber,
        ports,
        indicators,
        onBatteryCountChange: handleBatteryCountChange,
        onSerialNumberChange: handleSerialNumberChange,
        onIndicatorsChange: handleIndicatorsChange,
        onPortChange: handlePortChange
      }}
    >
      {children}
    </Context.Provider>
  );
}
