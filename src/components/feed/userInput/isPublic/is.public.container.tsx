import { useState } from "react";
import {
  faEarthAmerica,
  faUserGroup,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import IsPublicView from "./is.public.view";

interface IProps {
  setIsPublic: (value: string) => void;
}

function IsPublicContainer({ setIsPublic }: IProps) {
  const [button, setButton] = useState({
    icon: faEarthAmerica,
    text: "Public",
  });

  const handleChangeFeeling = (type: string) => {
    switch (type) {
      case "public":
        setIsPublic(type);
        setButton({
          icon: faEarthAmerica,
          text: "Public",
        });
        break;
      case "onlyFans":
        setIsPublic(type);
        setButton({
          icon: faUserGroup,
          text: "Private",
        });
        break;
      case "onlyMe":
        setIsPublic(type);
        setButton({
          icon: faLock,
          text: "Only Me",
        });
        break;
    }
  };
  return (
    <IsPublicView button={button} handleChangeFeeling={handleChangeFeeling} />
  );
}

export default IsPublicContainer;
