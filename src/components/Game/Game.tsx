import { useState, useEffect } from 'react';
import { useDark } from '../../hooks';
import { useGetWords } from '../../api/words';
import { mockRowLatter, mockItemLatter, getWordRandom, getWordArray, validatedWord, validatedWinnerWord } from '../../utils';
import { GameHeader, Intro, Keyboard, Modal, RowLatters, Statistics, SkeletonMock } from '../../components';
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
  const {words, wordsLoading} = useGetWords();

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }
  const reset = () => {
    setOpenModalStatistics(true);
    setIsDisableStatistics(false);
    setValidate([]);
    setArrayInput(mockRowLatter);
    setWord();
  }
  const gameWinner = () => {
    reset();
    localStorage.setItem(
      'statistics',
      JSON.stringify({...statistics, play: (Number(statistics.play) + 1), win: (Number(statistics.win) + 1), showWord: false})
    );
  }
  const setWordRandomArray = () => {
    const arrayContructor = getWordArray(wordSelect);
    if (arrayContructor) setWordArray(arrayContructor);
  }
  const setWord = () => {
    const wordRandom = getWordRandom(words);
    console.log('wordRandom', wordRandom);
    if (wordRandom) setWordSelect(wordRandom);
    setWordRandomArray();
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
      if (isWinner) gameWinner();
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
      setWord();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  useEffect(() => {
    if (validate.length === 5) {
      reset();
      localStorage.setItem(
        'statistics',
        JSON.stringify({...statistics, play: (Number(statistics.play) + 1), showWord: true})
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
      {wordsLoading && <SkeletonMock/>}
      {!wordsLoading &&
        <>
          {validate.map((row, index) => {
            return <RowLatters key={index} letters={row} />
          })}
          <RowLatters letters={arrayInput} />
          <Keyboard onClickKeyboard={touchKeyboard} />
        </>
      }
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
