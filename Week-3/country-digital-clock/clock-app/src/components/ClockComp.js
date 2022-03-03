import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const colors = {
  Sea: "#a2ccb6",
  Sand: "#fceeb5",
  Peach: "#ee786e",
};

const timeTreeDifferentZone={
  "Etc/GMT+12": "International Date Line West",
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
}

function ClockComp() {
  const [clockState, setClockState] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <Fragment>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {Object.entries(colors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            ({name})----
          </option>
        ))}
      </select>
      <h1> {clockState}</h1>
    </Fragment>
  );
}

export default ClockComp;
