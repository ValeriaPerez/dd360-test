import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import './Skeleton.styles.scss';

function SkeletonMock() {
  const mockData = [1,2,3,4,5];
  return (
    <>
      <Grid className='Skeleton' container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, mb: 3 }}>
            <Skeleton variant="rectangular" width={110} height={118} />
          </Box>
        ))}
      </Grid>
      <Grid className='Skeleton' container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={110} height={118} />
          </Box>
        ))}
      </Grid>
      <Grid className='Skeleton' container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={110} height={118} />
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default SkeletonMock;
