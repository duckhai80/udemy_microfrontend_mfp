import { mount } from "marketing/MarketingIndex";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
