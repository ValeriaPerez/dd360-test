export const initStorage = () => {
  localStorage.setItem('play', '0');
  localStorage.setItem('win', '0');
  localStorage.setItem('showWord', 'false');
  localStorage.setItem('word', '');
}

export const setStoragePlay = (play: boolean) => {
  const numberPlay = localStorage.getItem('play');
  localStorage.setItem('play', play ? String(Number(numberPlay) + 1) : String(numberPlay));
}

export const setStorageWin = (win: boolean) => {
  const numberWin = localStorage.getItem('win');
  localStorage.setItem('win', win ? String(Number(numberWin) + 1) : String(numberWin));
}

export const setStorageShowWord = (showWord: boolean) => {
  localStorage.setItem('showWord', String(showWord));
}

export const setStorageWord = (word: string) => {
  localStorage.setItem('word', word);
}
