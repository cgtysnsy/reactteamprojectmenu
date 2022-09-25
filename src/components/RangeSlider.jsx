import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        style={{ color: "var(--clr-gold)" }}
        getAriaLabel={() => "Temperature range"}
        value={props.value}
        onChange={(event) => props.handleChangeSlider(event)}
        valueLabelDisplay={"auto"}
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
