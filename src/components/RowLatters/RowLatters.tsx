import type { RowLattersProps, LattersType } from './RowLatters.props';
import { ItemLetter } from '../../components';
import type { LetterStatusType } from '../../components';

import './RowLatters.styles.scss';

function RowLatters({ letters }: RowLattersProps)  {
  return (
    <div className='RowLatters grid'>
      {letters.map((
        letter: LattersType | any,
        // eslint-disable-next-line array-callback-return
        index: number) => {
          if (index === 4 || index < 4) {
            return (
              <ItemLetter
                key={index}
                status={letter.status as LetterStatusType}
                letter={letter.letter} />
            );
          }
      })}
    </div>
  );
}

export default RowLatters;
