import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "01. home",
        "02. projects",
        "03. skills and experiences",
        "04. contact",
      ].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
