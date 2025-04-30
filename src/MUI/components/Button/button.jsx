import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Маленькая</Button>
        <Button size="medium">Средняя</Button>
        <Button size="large">Большая</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Маленькая
        </Button>
        <Button variant="outlined" size="medium">
          Средняя
        </Button>
        <Button variant="outlined" size="large">
          Большая
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Маленькая
        </Button>
        <Button variant="contained" size="medium">
          Средняя
        </Button>
        <Button variant="contained" size="large">
          Большая
        </Button>
      </div>
    </Box>
  );
}
