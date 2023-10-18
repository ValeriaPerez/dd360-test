let statistics = JSON.parse(localStorage.getItem('statistics') as any);

export const setStorage = (
  play?: boolean,
  win?: boolean,
  showWord?: boolean,
  word?: string,
) => {

  localStorage.setItem(
    'statistics',
    JSON.stringify(
      { ...statistics,
        play: play ? (Number(statistics.play) + 1) : Number(statistics.play),
        win: win ? (Number(statistics.win) + 1) : Number(statistics.win),
        showWord: Boolean(showWord),
        word: (word && word.length > 0) ? word : String(statistics.word),
      })
  );
}