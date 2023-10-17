export interface ButtonrProps {
  onclick?: () => void;
  status?: 'success' | 'warning' | 'fail' | '';
  isDark: boolean;
  label: string;
}