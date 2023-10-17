import { Stack, Typography } from '@mui/material';
import { useDark } from '../../hooks';
import { Container } from '../../components';
import type { StatisticsProps } from './Statistics.props';

import './Statistics.styles.scss';

const MAIN_CLASS = 'Statistics';
const DARK_CLASS = 'isDark';

function Statistics({
  onClick,
  word = 'PERRO',
}: StatisticsProps) {
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
          alignItems="space-between"
          direction="column"
          justifyContent="center"
          spacing={10}
          mb={10}
        >
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 800 }} component='p' color='text.secondary'>
                8
              </Typography>
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 300 }} component='p' color='text.secondary'>
                Jugadas
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 800 }} component='p' color='text.secondary'>
                2
              </Typography>
              <Typography gutterBottom sx={{ fontSize: 32, fontWeight: 100 }} component='p' color='text.secondary'>
                Victorias
              </Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom sx={{ fontSize: 19, fontWeight: 400 }} component='p' color='text.secondary'>
            La palabra era <strong>{word}</strong>
          </Typography>
          <Typography sx={{ fontSize: 19, fontWeight: 100 }} component='p' color='text.secondary'>
            SIGUIENTE PALABRA
            <Typography gutterBottom sx={{ fontSize: 24, fontWeight: 800 }} component='p' color='text.secondary'>
              <strong>04:10</strong>
            </Typography>
          </Typography>
        </Stack>
      </div>
    </Container>
  );
}

export default Statistics;
