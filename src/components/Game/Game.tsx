import { useState, useEffect } from 'react';
import { useDark } from '../../hooks';
import { useGetWords } from '../../api/words';
import { mockRowLatter, mockItemLatter, getWordRandom, getWordArray, validatedWord, validatedWinnerWord } from '../../utils';
import { GameHeader, Intro, Keyboard, Modal, RowLatters, Statistics } from '../../components';
import type { LattersType } from "../RowLatters";
import './Game.styles.scss';

const MAIN_CLASS = 'Game';
const DARK_CLASS = 'isDark';

const Game = () => {
  let isIntro = localStorage.getItem('isInit');
  let statistics = JSON.parse(localStorage.getItem('statistics') as any);
  const {isDark, setIsDark } = useDark();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalStatistics, setOpenModalStatistics] = useState<boolean>(false);
  const [isDisableStatistics, setIsDisableStatistics] = useState<boolean>(false);
  const [wordSelect, setWordSelect] = useState<string>('');
  const [wordArray, setWordArray] = useState<string[]>([]);
  const [validate, setValidate] = useState<LattersType[][]>([]);
  const [arrayInput, setArrayInput] = useState<LattersType[]>(mockRowLatter);
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`].filter(Boolean).join(' ');
  const {words} = useGetWords();

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }
  const gameWinnerReset = () => {
    let setObject = { ...statistics, win: (Number(statistics.win) + 1), showWord: true};
    localStorage.setItem('statistics', JSON.stringify(setObject));
    setOpenModalStatistics(true);
    setIsDisableStatistics(true);
  }
  const setLocalWord = () => {
    let setObject = {...statistics, word: wordSelect, showWord: false};
    localStorage.setItem('statistics', JSON.stringify(setObject));
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
      let newArrayValidate = [...validate];
      const valitateArray = validatedWord(wordArray, arrayInput);
      newArrayValidate.push(valitateArray);
      setArrayInput(mockRowLatter);
      setValidate(newArrayValidate);
      const isWinner = validatedWinnerWord(valitateArray);
      if (isWinner) gameWinnerReset();
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
      setLocalWord();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordSelect]);

  useEffect(() => {
    if (validate.length === 5) {
      setOpenModalStatistics(true);
      setIsDisableStatistics(true);
      localStorage.setItem(
        'statistics',
        JSON.stringify({...statistics, play: (Number(statistics.play) + 1), showWord: false})
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validate]);

  return (
    <div className={className}>
      <GameHeader
        onClick={toggleIsDark}
        openModal={toggleOpenModal}
        openModalStatistics={toggleOpenModalStatistics}
      />
      {validate.map((row, index) => {
        return <RowLatters key={index} letters={row} />
      })}
      <RowLatters letters={arrayInput} />
      <Keyboard onClickKeyboard={touchKeyboard} />
      <Modal
        children={<Intro onClick={toggleOpenModal}/>}
        handleClose={toggleOpenModal}
        open={openModal}
      />
      <Modal
        children={<Statistics isDisabled={isDisableStatistics} onClick={toggleOpenModalStatistics}/>}
        handleClose={!isDisableStatistics ? toggleOpenModalStatistics : () => null}
        open={openModalStatistics}
      />
    </div>
  );
}

export default Game;
