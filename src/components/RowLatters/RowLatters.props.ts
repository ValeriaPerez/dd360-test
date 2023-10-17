
export interface LattersType {
  letter: string;
  value?: string;
  status?: string;
}

export interface RowLattersProps {
  letters: LattersType[] | React.ReactNode[];
}