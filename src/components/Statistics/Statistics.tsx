// import { useEffect, useState , useMemo} from 'react';
// import moment  from 'moment';
import { Stack, Typography } from '@mui/material';
import { useDark } from '../../hooks';
import { Container } from '../../components';
import type { StatisticsProps } from './Statistics.props';

import './Statistics.styles.scss';

const MAIN_CLASS = 'Statistics';
const DARK_CLASS = 'isDark';

function Statistics({
  onClick,
  isDisabled,
}: StatisticsProps) {
  const statistics = JSON.parse(localStorage.getItem('statistics') as any);
  const { isDark } = useDark();
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Container
      title='Estadísticas'
      textButton='Aceptar'
      onClick={onClick}
      isDisabled={isDisabled}>
      <div className={className}>
        <Stack
          alignItems='space-between'
          direction='column'
          justifyContent='center'
          spacing={10}
          mb={10}
        >
          <Stack direction='row' justifyContent='space-around' alignItems='center'>
            <Stack
              alignItems='center'
              direction='column'
              justifyContent='center'
            >
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 800 }}>
                {statistics.play}
              </Typography>
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 300 }}>
                Jugadas
              </Typography>
            </Stack>
            <Stack
              alignItems='center'
              direction='column'
              justifyContent='center'
            >
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 800 }}>
                {statistics.win}
              </Typography>
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 100 }}>
                Victorias
              </Typography>
            </Stack>
          </Stack>
          {statistics.showWord &&
            <Typography gutterBottom sx={{ fontSize: 19, fontWeight: 400 }}>
              La palabra era <strong>{statistics.word}</strong>
            </Typography>
          }
          <Typography sx={{ fontSize: 19, fontWeight: 100 }}>
            SIGUIENTE PALABRA <br />
            <strong style={{ fontSize: 24, margin: '10px' }}>
              04:10
            </strong>
          </Typography>
        </Stack>
      </div>
    </Container>
  );
}

export default Statistics;
