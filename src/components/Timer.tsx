import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("10");
  const [isActive, setIsActive] = useState("false");

  let intervalRef = useRef();
  return (
    <div className="text-sm font-open-sans font-bold text-gray-600">
      <span>{minute}</span>
      <span>:</span>
      <span>{second}</span>
    </div>
  );
};

export default Timer;
