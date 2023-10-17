import { useEffect, useState } from 'react';
import { Game } from '../components';
import { useDark } from '../hooks';

const MAIN_CLASS = 'App';
const DARK_CLASS = 'isDark';

const Home = () => {
  const { isDark } = useDark();
  const [isIntro, setIsIntro] = useState<boolean>(true);

  // useEffect(() => {
  //   if(!localStorage.getItem('isInit')){
  //     setIsIntro(true);
  //     localStorage.setItem('isInit', '1');
  //   } else {
  //     setIsIntro(false);
  //   }
  // },[isIntro]);

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
