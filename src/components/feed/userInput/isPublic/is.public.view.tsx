import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, type MenuProps } from "antd";
import {
  faEarthAmerica,
  faUserGroup,
  faLock,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  button: {
    icon: IconDefinition;
    text: string;
  };
  handleChangeFeeling: (type: string) => void;
}

function IsPublicView({ button, handleChangeFeeling }: IProps) {
  const feelings: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("public")}
        >
          <FontAwesomeIcon icon={faEarthAmerica} />
          <span className="btnlabel">Public</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("onlyFans")}
        >
          <FontAwesomeIcon icon={faUserGroup} />
          <span className="btnlabel">Private</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          color="default"
          variant="outlined"
          onClick={() => handleChangeFeeling("onlyMe")}
        >
          <FontAwesomeIcon icon={faLock} />
          <span className="btnlabel">Only Me</span>
        </Button>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items: feelings }} placement="bottomLeft" arrow>
      <Button color="default" variant="outlined">
        <FontAwesomeIcon icon={button.icon} />
        <span className="btnlabel">{button.text}</span>
      </Button>
    </Dropdown>
  );
}

export default IsPublicView;
