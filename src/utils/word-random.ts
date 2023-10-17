export const getWordRandom = (words: string[]) => {
  const arrayWords = words.filter((word: string) => word.length === 5);
  const wordSelected = arrayWords[Math.floor(Math.random() * arrayWords.length)];

  return wordSelected;
}