import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const timeDifferentZone = ["Etc/GMT+12", "Pacific/Midway", "Pacific/Honolulu"];

function ClockComp() {
  const [clockState, setClockState] = useState("0");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleString("en-us", {
          timeZone: timeDifferentZone[clockState],
          timeStyle: "full",
          hourCycle: "h24",
        })
      );
    }, 1000);
  }, []);
  return (
    <Fragment>
      <select
        value={clockState}
        onChange={(e) => setClockState(e.target.value)}
      >
        {Object.entries(timeDifferentZone).map(([name, value]) => (
          <option key={`${name}`} value={value} >
            {clockState}
          </option>
        ))}
      </select>
      <h1> {clockState}</h1>
    </Fragment>
  );
}
export default ClockComp;
