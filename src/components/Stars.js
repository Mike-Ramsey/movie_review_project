import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Stars(props) {

  return (
    <Box sx={{'& > legend': { mt: 2 },}}>
        <h6>{props.user} gave this</h6>
        <Rating name="read-only" value={props.rating} readOnly />
    </Box>
  );
}
