export interface ContainerProps {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  textButton?: string;
}