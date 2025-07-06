import { Wrapper, MyInput } from "./input.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  name?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  icon?: IconDefinition;
  value?: string;
  onChange1?: any;
  onChange2?: any;
  onClick?: any;
  className?: string;
}

function Input({
  name = "input",
  type = "text",
  placeholder = "Placeholder",
  width = "250px",
  icon,
  value,
  onChange1 = null,
  onChange2 = null,
  onClick,
  className = "",
}: IProps) {
  return (
    <Wrapper width={width} className="inputBox">
      <MyInput
        name={name}
        type={type}
        placeholder={placeholder}
        paddingleft={icon ? "calc(0.5rem + 42px)" : "1.5rem"}
        value={value}
        onChange={
          (onChange1 && ((e) => onChange1(e.target.value))) ||
          (onChange2 && ((e) => onChange2(name, e.target.value)))
        }
        onClick={() => onClick()}
        className={`${className}`}
      />
      {icon && (
        <div className="icon flex justify-center items-center">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </Wrapper>
  );
}

export default Input;
