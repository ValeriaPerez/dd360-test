import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints, wordsProvisional } from '../utils';

export function useGetWords() {
  let URL = endpoints.words;

  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      words: (data && data.split('\n')) || wordsProvisional,
      wordsLoading: isLoading,
      wordsError: error,
      wordsEmpty: !isLoading && !data,
    }),
    [data, error, isLoading]
  );

  return memoizedValue;
}
