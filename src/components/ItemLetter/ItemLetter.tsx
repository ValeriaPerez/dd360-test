import type { ItemLetterProps } from './ItemLetter.props';
import './ItemLetter.styles.scss';

const MAIN_CLASS = 'ItemLetter';
const DARK_CLASS = 'isDark';

function ItemLetter({ status, letter, isDark }: ItemLetterProps) {
  
  const className: string = [
    MAIN_CLASS,
    isDark &&
    status &&
      `ItemLetter--${status}-${DARK_CLASS}`,
    isDark &&
    !status &&
        `ItemLetter--${DARK_CLASS}`,
    !isDark && status && `ItemLetter--${status}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <div className='ItemLetter__letter'>{letter}</div>
    </div>
  );
}

export default ItemLetter;
