import { Game } from '../components';
import { useDark } from '../hooks';

const MAIN_CLASS = 'App';
const DARK_CLASS = 'isDark';

const Home = () => {
  const { isDark } = useDark();

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
