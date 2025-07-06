import Card from "../../elements/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faSadCry,
  faAngry,
  faTired,
  faLocationDot,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/buttons/button";
import { useState } from "react";
import Input from "../../elements/inputs/input";

interface IProps {
  location: string;
  setLocation: (type: string) => void;
}

function Location({ location, setLocation }: IProps) {
  const [icon, setIcon] = useState(faLocationDot);
  const [show, setShow] = useState(false);

  const handleChangeFeelingStatus = (value: string) => {
    setLocation(value);
  };
  return (
    <div className="btns location">
      <Button
        type="inverte"
        icon={faLocationDot}
        className="optionBtn"
        onClick={() => setShow(!show)}
      />
      {show && (
        <Card className="optionModal">
          <Input
            value={location}
            onChange1={handleChangeFeelingStatus}
            width="194px"
          />
          <Button icon={faCheck} onClick={() => setShow(false)} />
        </Card>
      )}
    </div>
  );
}

export default Location;
