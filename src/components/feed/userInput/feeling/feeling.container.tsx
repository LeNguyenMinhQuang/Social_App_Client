import { useState } from "react";
import FeelingView from "./feeling.view";
import {
  faSmile,
  faFaceSmile,
  faFaceSadCry,
  faFaceAngry,
  faFaceTired,
} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  setFeeling: (value: string) => void;
}

function FeelignContainer({ setFeeling }: IProps) {
  const [feelingButton, setFeelingButton] = useState({
    icon: faSmile,
    text: "Feeling",
  });

  const handleChangeFeeling = (type: string) => {
    switch (type) {
      case "happy":
        setFeeling(type);
        setFeelingButton({
          icon: faFaceSmile,
          text: "Happy",
        });
        break;
      case "sad":
        setFeeling(type);
        setFeelingButton({
          icon: faFaceSadCry,
          text: "Sad",
        });
        break;
      case "angry":
        setFeeling(type);
        setFeelingButton({
          icon: faFaceAngry,
          text: "Angry",
        });
        break;
      case "horny":
        setFeeling(type);
        setFeelingButton({
          icon: faFaceTired,
          text: "Tired",
        });
        break;
    }
  };
  return (
    <FeelingView
      handleChangeFeeling={handleChangeFeeling}
      feelingButton={feelingButton}
    />
  );
}

export default FeelignContainer;
