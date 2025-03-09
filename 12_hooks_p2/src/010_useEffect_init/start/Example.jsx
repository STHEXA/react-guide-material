import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h3>
        <span>{time}</span>
        秒経過
      </h3>
    </>
  );
};

export default Example;
