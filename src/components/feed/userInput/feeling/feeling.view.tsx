import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, type MenuProps } from "antd";
import {
  faFaceSmile,
  faFaceSadCry,
  faFaceAngry,
  faFaceTired,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  handleChangeFeeling: (type: string) => void;
  feelingButton: {
    icon: IconDefinition;
    text: string;
  };
}

function FeelingView({ handleChangeFeeling, feelingButton }: IProps) {
  const feelings: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("happy")}
        >
          <FontAwesomeIcon icon={faFaceSmile} />
          <span className="btnlabel">Happy</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("sad")}
        >
          <FontAwesomeIcon icon={faFaceSadCry} />
          <span className="btnlabel">Sad</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("angry")}
        >
          <FontAwesomeIcon icon={faFaceAngry} />
          <span className="btnlabel">Angry</span>
        </Button>
      ),
    },
    {
      key: "4",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("horny")}
        >
          <FontAwesomeIcon icon={faFaceTired} />
          <span className="btnlabel">Tired</span>
        </Button>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items: feelings }} placement="bottomLeft" arrow>
      <Button color="default" variant="outlined">
        <FontAwesomeIcon icon={feelingButton.icon} />
        <span className="btnlabel">{feelingButton.text}</span>
      </Button>
    </Dropdown>
  );
}

export default FeelingView;
