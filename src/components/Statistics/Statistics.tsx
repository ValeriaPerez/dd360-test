import { Stack, Typography } from '@mui/material';
import { useDark } from '../../hooks';
import { Container } from '../../components';
import type { StatisticsProps } from './Statistics.props';

import './Statistics.styles.scss';

const MAIN_CLASS = 'Statistics';
const DARK_CLASS = 'isDark';

function Statistics({
  onClick,
  seconds,
  minutes,
}: StatisticsProps) {
  const play = localStorage.getItem('play');
  const win = localStorage.getItem('win');
  const word = localStorage.getItem('word');
  const showWord = localStorage.getItem('showWord');
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
      onClick={onClick}>
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
                {play}
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
                {win}
              </Typography>
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 100 }}>
                Victorias
              </Typography>
            </Stack>
          </Stack>
          {Boolean(showWord === 'true') &&
            <Typography gutterBottom sx={{ fontSize: 19, fontWeight: 400 }}>
              La palabra era <strong>{word}</strong>
            </Typography>
          }
          <Typography sx={{ fontSize: 19, fontWeight: 100 }}>
            SIGUIENTE PALABRA <br />
            <strong style={{ fontSize: 24, margin: '10px' }}>
              0{minutes}:{String(seconds).length === 1 && `0`}{seconds}
            </strong>
          </Typography>
        </Stack>
      </div>
    </Container>
  );
}

export default Statistics;
