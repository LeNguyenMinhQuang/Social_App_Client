import Card from "../../elements/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSadCry,
  faAngry,
  faTired,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/buttons/button";
import { useState } from "react";

interface IProps {
  setEmotion: (type: "happy" | "sad" | "angry" | "horny") => void;
}

function Feeling({ setEmotion }: IProps) {
  const [feelingIcon, setEmotionIcon] = useState(faSmile);
  const [show, setShow] = useState(false);

  const handleChangeFeelingStatus = (type: string) => {
    switch (type) {
      case "happy":
        setEmotionIcon(faSmile);
        setEmotion("happy");
        break;
      case "sad":
        setEmotionIcon(faSadCry);
        setEmotion("sad");
        break;
      case "angry":
        setEmotionIcon(faAngry);
        setEmotion("angry");
        break;
      case "horny":
        setEmotionIcon(faTired);
        setEmotion("horny");
        break;
    }
    setShow(false);
  };
  return (
    <div className="btns">
      <Button
        type="inverte"
        icon={feelingIcon}
        className="optionBtn"
        onClick={() => setShow(!show)}
      />
      {show && (
        <Card className="optionModal">
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("happy")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faSmile} />
            </div>
            <p className="label">Happy</p>
          </div>
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("sad")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faSadCry} />
            </div>
            <p className="label">Sad</p>
          </div>
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("angry")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faAngry} />
            </div>
            <p className="label">Angry</p>
          </div>
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("horny")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faTired} />
            </div>
            <p className="label">Tired</p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Feeling;
