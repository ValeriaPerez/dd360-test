import { useState, useEffect } from 'react';
import { useDark } from '../../hooks';
import { useGetWords } from '../../api/words';
import { mockRowLatter, mockItemLatter, getWordRandom, getWordArray, validatedWord } from '../../utils';
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
  let isIntro = localStorage.getItem('isInit');
  const {isDark, setIsDark } = useDark();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalStatistics, setOpenModalStatistics] = useState<boolean>(false);
  const [wordSelect, setWordSelect] = useState<string>('');
  const [wordArray, setWordArray] = useState<string[]>([]);
  const [arrayRowLetters, setArrayRowLetters] = useState<LattersType[]>([]);
  const [arrayInput, setArrayInput] = useState<LattersType[]>(mockRowLatter);
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`].filter(Boolean).join(' ');
  const {words} = useGetWords();

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }
  const toggleOpenModal = () => {
    localStorage.setItem('isInit', '1');
    setOpenModal(!openModal);
  }
  const toggleOpenModalStatistics = () => {
    setOpenModalStatistics(!openModalStatistics);
  }

  const touchKeyboard = (letter: LattersType) => {
    let newArray = [...arrayInput];

    if (letter.value === 'BORRAR') {
      newArray.shift();
      newArray.push(mockItemLatter);
      setArrayInput(newArray);
    }

    if (letter.value !== 'BORRAR' && letter.value !== 'ENTER') {
      newArray.unshift(letter);
      newArray.pop();
      setArrayInput(newArray);
    }

    if (letter.value === 'ENTER') {
      const valitateArray = validatedWord(wordArray, arrayInput);
      setArrayInput(mockRowLatter);
      setArrayRowLetters(valitateArray);
    }

    if (newArray.length < 4 || newArray.length === 4) {
      newArray.unshift(mockItemLatter);
      setArrayInput(newArray);
    }
  }

  useEffect(() => {
    if (!isIntro) setOpenModal(true);
    else setOpenModal(false);
  }, [isIntro]);

  useEffect(() => {
    if (words) {
      setWordSelect(getWordRandom(words));
    }
  }, [words]);

  useEffect(() => {
    if (wordSelect) {
      setWordArray(getWordArray(wordSelect));
    }
  }, [wordSelect]);

  return (
    <div className={className}>
      <GameHeader
        onClick={toggleIsDark}
        openModal={toggleOpenModal}
        openModalStatistics={toggleOpenModalStatistics}
      />
      {/* {arrayRowLetters.map((row, index) => {
        console.log(row)
        return <RowLatters key={index} letters={arrayRowLetters} />
      })} */}
      <RowLatters letters={arrayRowLetters} />
      <RowLatters letters={arrayInput} />
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
