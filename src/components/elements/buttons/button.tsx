import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  width?: string;
  label?: string;
  type?: string;
  onClick?: any;
  icon?: IconDefinition | "";
  image?: string;
  className?: string;
}

function Button({
  width,
  label,
  type = "primary",
  icon,
  image,
  onClick = () => {},
  className = "",
}: IProps) {
  return (
    <Wrapper
      width={width || "42px"}
      className={`buttonBox ${className}`}
      type={type}
      onClick={() => onClick()}
    >
      <p>
        {label && label}
        {icon && <FontAwesomeIcon icon={icon} />}
        {image && <img src={image} className="image" alt="image"></img>}
      </p>
    </Wrapper>
  );
}

export default Button;
