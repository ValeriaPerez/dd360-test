import type { ButtonrProps } from './ButtonProps.props';
import './Button.styles.scss';

function Button({
  status,
  onclick,
  isDark,
  label,
}: ButtonrProps) {
  return (
    <div className={'className'}>
      <div className='ItemLetter__letter'>{label}</div>
    </div>
  );
}

export default Button;
