import { useState } from 'react';
// import { useState, cloneElement } from 'react';
import { useDark } from '../../hooks';
import { mockRowLatter, mockItemLatter } from '../../utils';
import {
  GameHeader,
  Intro,
  Keyboard,
  Modal,
  RowLatters,
  Statistics,
} from '../../components';
import type { LattersType } from "../RowLatters";
import './Game.styles.scss';

const MAIN_CLASS = 'Game';
const DARK_CLASS = 'isDark';

const Game = () => {
  const {isDark, setIsDark } = useDark();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalStatistics, setOpenModalStatistics] = useState<boolean>(true);
  const [arrayOne, setArrayOne] = useState<LattersType[]>(mockRowLatter);

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
  const toggleOpenModalStatistics = () => {
    setOpenModalStatistics(!openModalStatistics);
  }

  const touchKeyboard = (letter: LattersType) => {
    let newArray = [...arrayOne];
    if (letter.value === 'ENTER') {
      console.log('validar');
    } else if (letter.value === 'BORRAR') {
      newArray.shift();
    } else {
      newArray.unshift(letter);
    }
    if (newArray.length < 4 || newArray.length === 4) {
      newArray.unshift(mockItemLatter);
    }
    setArrayOne(newArray);
  }

  return (
    <div className={className}>
      <GameHeader
        onClick={toggleIsDark}
        openModal={toggleOpenModal}
        openModalStatistics={toggleOpenModalStatistics}
      />
      <RowLatters letters={arrayOne} />
      <Keyboard onClickKeyboard={touchKeyboard} />
      <Modal
        children={<Intro onClick={toggleOpenModal}/>}
        handleClose={toggleOpenModal}
        open={openModal}
      />
      <Modal
        children={<Statistics onClick={toggleOpenModalStatistics}/>}
        handleClose={toggleOpenModalStatistics}
        open={openModalStatistics}
      />
    </div>
  );
}

export default Game;
