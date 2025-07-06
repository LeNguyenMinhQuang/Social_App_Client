import { Wrapper } from "./card.styled";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: IProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Card;
