import { useState, useEffect } from 'react';
import { useDark } from '../../hooks';
import { useGetWords } from '../../api/words';
import {
  mockRowLatter,
  mockItemLatter,
  getWordRandom,
  getWordArray,
  validatedWord,
  validatedWinnerWord,
  setStorageWin,
  setStoragePlay,
  setStorageWord,
  setStorageShowWord,
} from '../../utils';
import {
  GameHeader,
  Intro,
  Keyboard,
  Modal,
  RowLatters,
  Statistics,
  SkeletonMock,
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
  const [, setWordSelect] = useState<string>('');
  const [wordArray, setWordArray] = useState<string[]>([]);
  const [validate, setValidate] = useState<LattersType[][]>([]);
  const [arrayInput, setArrayInput] = useState<LattersType[]>(mockRowLatter);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`].filter(Boolean).join(' ');
  const {words, wordsLoading} = useGetWords();

  const toggleIsDark = () => {
    setIsDark(!isDark);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reset = () => {
    setValidate([]);
    setArrayInput(mockRowLatter);
    setMinutes(5);
    setSeconds(0);
    setWord();
  }
  const gameOver = () => {
    setStoragePlay(true);
    setOpenModalStatistics(true);
    setStorageShowWord(true);
    setMinutes(5);
    setSeconds(0);
  }
  const gameWinner = () => {
    reset();
    setStorageWin(true);
    setStoragePlay(true);
    setOpenModalStatistics(true);
  }
  const setWordRandomArray = (wordRandom: string) => {
    const arrayContructor = getWordArray(wordRandom);
    if (arrayContructor) setWordArray(arrayContructor);
  }
  const setWord = () => {
    const wordRandom = getWordRandom(words);
    if (wordRandom) setWordSelect(wordRandom);
    setWordRandomArray(wordRandom);
    setStorageWord(wordRandom);
  }
  const toggleOpenModal = () => {
    localStorage.setItem('isInit', '1');
    setOpenModal(!openModal);
  }
  const toggleOpenModalStatistics = () => {
    setStorageShowWord(false);
    const showWord = localStorage.getItem('showWord');
    if (showWord === 'true') reset();
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
      gameOver();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validate]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      gameOver();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes, seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(60);
        setMinutes(minutes - 1);
      }
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

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
        children={<Statistics seconds={seconds} minutes={minutes} onClick={toggleOpenModalStatistics}/>}
        handleClose={toggleOpenModalStatistics}
        open={openModalStatistics}
      />
    </div>
  );
}

export default Game;
