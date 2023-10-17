import { useEffect } from 'react';
import { Game } from '../components';
import { useDark } from '../hooks';

const MAIN_CLASS = 'App';
const DARK_CLASS = 'isDark';

const Home = () => {
  const { isDark } = useDark();
  const objectStatistics = localStorage.getItem('statistics');

  useEffect(() => {
    if (!objectStatistics) {
      let createObject = { play: 0, win: 0, word: ''};
      localStorage.setItem('statistics', JSON.stringify(createObject));
    }
  });

  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <Game />
    </div>
  );
}

export default Home;
