import { useDark } from '../../hooks';
import type { ItemLetterProps } from './ItemLetter.props';
import './ItemLetter.styles.scss';

const MAIN_CLASS = 'ItemLetter';
const DARK_CLASS = 'isDark';

function ItemLetter({ status, letter, onClick, small }: ItemLetterProps) {
  const { isDark } = useDark();
  const className: string = [
    MAIN_CLASS,
    !letter && !isDark && `ItemLetter--init`,
    !letter && isDark && `ItemLetter--init-${DARK_CLASS}`,
    isDark && status && `ItemLetter--${status}-${DARK_CLASS}`,
    isDark && !status && `ItemLetter--${DARK_CLASS}`,
    !isDark && status && `ItemLetter--${status}`,
    small && `ItemLetter--small`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className} onClick={onClick}>
      {letter}
    </div>
  );
}

export default ItemLetter;
