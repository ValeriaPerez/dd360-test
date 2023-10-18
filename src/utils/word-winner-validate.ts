import type { LattersType } from '../components';

export const validatedWinnerWord = (arrayValidate: LattersType[]) => {
  const findSuccess = arrayValidate.map(letter => letter.status === 'success');
  const filterFalse = findSuccess.filter((word) => word === false);
  const isWinner = filterFalse.length === 0;

  return isWinner;
}