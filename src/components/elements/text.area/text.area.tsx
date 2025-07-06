import { Wrapper, MyInput } from "./input.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

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
  ref?: any;
}

function TextArea({
  name = "input",
  placeholder = "Placeholder",
  width = "250px",
  icon,
  value,
  onChange1 = null,
  onChange2 = null,
  onClick,
  ref,
}: Partial<IProps>) {
  return (
    <Wrapper width={width} className="inputBox">
      <MyInput
        ref={ref}
        name={name}
        placeholder={placeholder}
        paddingleft={icon ? "calc(0.5rem + 42px)" : "1.5rem"}
        value={value}
        onChange={
          (onChange1 && ((e) => onChange1(e.target.value))) ||
          (onChange2 && ((e) => onChange2(name, e.target.value)))
        }
        className="textareaScale"
      />
      {icon && (
        <div className="icon flex justify-center items-center">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {/* <div
        className="icon-close flex justify-center items-center"
        onClick={() => onClick()}
      >
        <FontAwesomeIcon icon={faClose} />
      </div> */}
    </Wrapper>
  );
}

export default TextArea;
