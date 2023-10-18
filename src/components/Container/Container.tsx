import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useDark } from '../../hooks';
import type { ContainerProps } from './Container.props';
import './Container.styles.scss';

const MAIN_CLASS = 'ContainerDD3';
const DARK_CLASS = 'isDark';

const Container = ({
  children,
  title,
  textButton,
  onClick,
  isDisabled = false,
}: ContainerProps) => {
  const { isDark } = useDark();
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <h1 className='Container__title'>{title}</h1>
      <div className='Container__children'> {children}</div>
      {textButton && 
        <button className='Container__button' disabled={isDisabled} onClick={onClick}>{textButton}</button>
      }
    </div>
  );
}

export default Container;
