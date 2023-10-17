import { Game } from '../components';
import { useDark } from '../hooks';

const MAIN_CLASS = 'App';
const DARK_CLASS = 'isDark';

const Home = () => {
  const { isDark } = useDark();
  // let testObject = { play: 0, win: 0, word: ''};
  // localStorage.setItem('testObject', JSON.stringify(testObject));
  // let retrievedObject = localStorage.getItem('testObject');
  // console.log('retrievedObject: ', JSON.parse(retrievedObject as any));

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
