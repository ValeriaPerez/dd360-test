import { useState } from 'react';
import { useDark } from '../../hooks';
import { ItemLetter, GameHeader, Modal, Intro } from '../../components';
import './Game.styles.scss';

const MAIN_CLASS = 'Game';
const DARK_CLASS = 'isDark';

const Game = () => {
  const {isDark, setIsDark } = useDark();
  const [openModal, setOpenModal] = useState<boolean>(true);
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className={className}>
      <GameHeader openModal={toggleOpenModal} onClick={toggleIsDark} />
      <div className='grid'>
        <ItemLetter isDark={isDark} status='success' letter='g' />
        <ItemLetter isDark={isDark} status='warning' letter='a' />
        <ItemLetter isDark={isDark} status='fail' letter='t' />
        <ItemLetter isDark={isDark} letter='o' />
        <ItemLetter isDark={isDark} letter='s' />
      </div>
      <div className='grid'>
        <ItemLetter isDark={isDark} status='success' letter='g' />
        <ItemLetter isDark={isDark} letter='a' />
        <ItemLetter isDark={isDark} letter='t' />
        <ItemLetter isDark={isDark} letter='o' />
        <ItemLetter isDark={isDark} letter='s' />
      </div>
      <div className='grid'>
        <ItemLetter isDark={isDark} status='success' letter='g' />
        <ItemLetter isDark={isDark} letter='a' />
        <ItemLetter isDark={isDark} letter='t' />
        <ItemLetter isDark={isDark} letter='o' />
        <ItemLetter isDark={isDark} letter='s' />
      </div>
      <Modal
        children={<Intro isDark={true} onClick={toggleOpenModal}/>}
        handleClose={toggleOpenModal}
        open={openModal}
      />
    </div>
  );
}

export default Game;
