// import { getWordRandom } from '../utils';
// import wordsProvisional from './words-provisional';

export const getWordArray = (word: string) => {
  // const arrayWord = word ? word.split('') : getWordRandom(wordsProvisional).split('');
  const arrayWord = word && word.split('');

  return arrayWord;
}