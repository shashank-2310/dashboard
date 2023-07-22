import PropTypes from "prop-types";
import * as React from "react";
import Slider from "@mui/material/Slider";
import { Input } from "@mui/material";

export default function InputSlider({ child }) {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <p className="font-semibold text-xs mt-4">{child}</p>
      <div className="flex flex-row justify-between items-center mx-auto w-full">
        <Slider
          className="mt-1"
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          size="small"
        />
        <Input
          className="pl-10"
          value={child == "retirement age" ? `${value}` : `${value}%`}
          aria-disabled
          disableUnderline
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "string",
            "aria-labelledby": "input-slider",
          }}
        />
      </div>
    </div>
  );
}

InputSlider.propTypes = {
  child: PropTypes.any,
};
