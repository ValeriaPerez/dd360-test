import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetWords() {
  let URL = endpoints.words;

  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      words: (data && data.split('\n')) || [],
      wordsLoading: isLoading,
      wordsError: error,
      wordsEmpty: !isLoading && !data.length,
    }),
    [data, error, isLoading]
  );

  return memoizedValue;
}
