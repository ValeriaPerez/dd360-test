export type LetterStatusType = 'success' | 'warning' | 'fail' | '';
export interface ItemLetterProps {
    letter?: string | React.ReactNode;
    status?: LetterStatusType;
    onClick?: () => void;
    small?: boolean;
}