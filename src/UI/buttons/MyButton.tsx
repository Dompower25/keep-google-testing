import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">push on me</Button>
    </Stack>
  )
}

export default MyButton