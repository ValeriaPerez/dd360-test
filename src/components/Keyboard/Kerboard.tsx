import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';

import { useDark } from '../../hooks';
import { mockKeyboard } from '../../utils';
import { ItemLetter, LetterStatusType } from '../../components';

import type { KerboardProps } from './Kerboard.props';
import './Keyboard.styles.scss';

const MAIN_CLASS = 'Keyboard';
const DARK_CLASS = 'isDark';

function Kerboard({
  onClickKeyboard,
}: KerboardProps) {
  const { isDark } = useDark();
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      {mockKeyboard.map((letter, index) => {
        return (
          <ItemLetter
            key={index}
            status={letter.letter === 'ENTER' || letter.letter === 'BORRAR' ? 'fail' : '' as LetterStatusType}
            letter={
              letter.letter === 'ENTER' ? <KeyboardReturnIcon/> :
              letter.letter === 'BORRAR' ? <BackspaceIcon/> : letter.letter
            }
            onClick={() => onClickKeyboard(letter)}
            small />
        );
      })}
    </div>
  );
}

export default Kerboard;
