"use client";
import { Slider } from "@/components/ui/slider";
import { SliderProps } from "@radix-ui/react-slider";
import { useState } from "react";

export default function StepSlider(props: SliderProps) {
  const [value, setVal] = useState(props.defaultValue);
  return (
    <div className="flex gap-4 items-center">
      <Slider
        {...props}
        onChange={
          // @ts-ignore
          (e) => setVal(e.target.value)
        }
      />
      <div>{value}</div>
    </div>
  );
}
