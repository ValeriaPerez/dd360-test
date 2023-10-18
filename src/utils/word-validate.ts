import type { LattersType } from '../components';

export const validatedWord = (arrayCompare: string[], arrayInput: LattersType[]) => {
  console.warn('hidden word', arrayCompare);
  console.warn('input word', arrayInput);
  const mockA = [0,1,2,3,4];
  // eslint-disable-next-line eqeqeq
  const compareArrays = mockA.map(i => arrayInput[i].value == arrayCompare[i] ?
    { ...arrayInput[i], status: 'success' } :
    {
      ...arrayInput[i],
      status: arrayCompare.includes(arrayInput[i].value as string) ? 'warning' : 'fail',
    }
  )

  return compareArrays;
}