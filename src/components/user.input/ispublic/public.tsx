import Card from "../../elements/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSadCry,
  faAngry,
  faTired,
  faEarth,
  faUserFriends,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/buttons/button";
import { useState } from "react";

interface IProps {
  setIsPublic: (type: "public" | "onlyFans" | "onlyMe") => void;
}

function Public({ setIsPublic }: IProps) {
  const [icon, setIcon] = useState(faEarth);
  const [show, setShow] = useState(false);

  const handleChangeFeelingStatus = (type: string) => {
    switch (type) {
      case "public":
        setIcon(faEarth);
        setIsPublic("public");
        break;
      case "onlyFans":
        setIcon(faUserFriends);
        setIsPublic("onlyFans");
        break;
      case "onlyMe":
        setIcon(faLock);
        setIsPublic("onlyMe");
        break;
    }
    setShow(false);
  };
  return (
    <div className="btns ispublic">
      <Button
        type="inverte"
        icon={icon}
        className="optionBtn"
        onClick={() => setShow(!show)}
      />
      {show && (
        <Card className="optionModal">
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("public")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <p className="label">Public</p>
          </div>
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("onlyFans")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <p className="label">Following</p>
          </div>
          <div
            className="item"
            onClick={() => handleChangeFeelingStatus("onlyMe")}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <p className="label">Private</p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Public;
