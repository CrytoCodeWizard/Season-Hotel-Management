import React from "react";
import { useState } from "react";

const AdultCount = (addCount, subCount) => {
  const [count, setCount] = useState(0);
  setCount(addCount)
  return <div>{count}</div>;
};

export default AdultCount;
