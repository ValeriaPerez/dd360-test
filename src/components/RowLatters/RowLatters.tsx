import type { RowLattersProps, LattersType } from './RowLatters.props';
import { ItemLetter } from '../../components';

function RowLatters({ letters }: RowLattersProps)  {
  return (
    <div className='grid'>
      {letters.map((
        letter: LattersType | any,
        // eslint-disable-next-line array-callback-return
        index: number) => {
          if (index === 4 || index < 4) {
            return (
              <ItemLetter
                key={index}
                letter={letter.letter} />
            );
          }
      })}
    </div>
  );
}

export default RowLatters;
