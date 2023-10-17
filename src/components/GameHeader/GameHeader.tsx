import { useDark } from '../../hooks';
import type { GameHeaderProps } from './GameHeader.props';
import info from '../../assets/info_question.png';
import infoDark from '../../assets/info_question_dark.png';
import switchLight from '../../assets/switch.png';
import switchDark from '../../assets/switch_dark.png';
import chart from '../../assets/chart_duotone_line.png';
import chartDark from '../../assets/chart_duotone_line_dark.png';

import './GameHeader.styles.scss';

const MAIN_CLASS = 'GameHeader';
const DARK_CLASS = 'isDark';

const GameHeader = ({
  onClick,
  openModal,
  openModalStatistics,
}: GameHeaderProps) => {
  const { isDark } = useDark();
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <img src={isDark ? infoDark : info} alt="Introduccion" onClick={openModal}/>
      <h1 className='GameHeader__title'>WORDLE</h1>
      <div>
        <img className='imgStatus' src={isDark ? chartDark : chart} alt="switch" onClick={openModalStatistics}/>
        <img className='imgSwitch' src={isDark ? switchDark : switchLight} alt="switch" onClick={onClick}/>
      </div>
    </div>
  );
}

export default GameHeader;
