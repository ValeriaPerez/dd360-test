export interface ItemLetterProps {
    letter?: string | React.ReactNode;
    status?: 'success' | 'warning' | 'fail' | '';
    onClick?: () => void;
    small?: boolean;
}