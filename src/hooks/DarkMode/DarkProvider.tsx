import { useMemo, useReducer, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import darkReducer from './darkReducer';
import initialState from './initialState';

import type { DarkContextType } from './DarkContext';
import DarkContext from './DarkContext';

export const DarkProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(darkReducer, initialState);

  useEffect(() => {
    const isDark: string | null = localStorage.getItem('isDark');
    dispatch({
      type: isDark === 'true' ? 'DARK' : 'WHITE',
      isDark: isDark === 'true' ? true : false,
    });
  }, []);

  const darkContext = useMemo<DarkContextType>(
    () => ({
      setIsDark: (isDark: boolean) => {
        localStorage.setItem('isDark', isDark.toString());
        dispatch({ type: isDark ? 'DARK' : 'WHITE', isDark: isDark });
      },
      isDark: state,
    }),
    [state]
  );
  return (
    <DarkContext.Provider value={darkContext}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDark = (): DarkContextType => useContext(DarkContext);
