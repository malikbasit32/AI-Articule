import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Accent Training",
          "IELTS Sessions",
          "Toefl Sessions",
          "GRE Classes",
          "All with AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:1,
      }}
    />
  );
}

export default Type;
