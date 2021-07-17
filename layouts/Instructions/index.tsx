import { Slider } from "gamification-library";
import React from "react";

export interface InstructionsProps {
  children: React.ReactNode;
}

const Instructions = ({ children }: InstructionsProps) => {
  return (
    <Slider
      slidesPerView={{
        phone: 1,
        tablet: 1,
        laptop: 1,
        desktop: 1,
      }}
    >
      {children}
    </Slider>
  );
};

export default Instructions;
