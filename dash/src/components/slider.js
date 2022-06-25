import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};


export default function CustomizedSlider({name}) {
  return (
    <Box sx={{ width: 200 }}>
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>{name}</Typography>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={20}
      />
    </Box>
  );
}
