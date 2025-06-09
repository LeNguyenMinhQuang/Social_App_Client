import {
  faLocationDot,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "antd";
import { useState } from "react";

interface Iprops {
  handleChangeInputValue: (value: string, type: string) => void;
  location: string;
}

function LocationView({ handleChangeInputValue, location }: Iprops) {
  const [isLocationInputShow, setIsLocationInputShow] =
    useState<boolean>(false);

  return (
    <>
      {!isLocationInputShow ? (
        <Button
          color="default"
          variant="outlined"
          onClick={() => setIsLocationInputShow(true)}
        >
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="btnlabel">{location ? location : "Location"}</span>
        </Button>
      ) : (
        <div className="flex gap-1">
          <Input
            className="locationInput"
            value={location}
            onChange={(e) => {
              handleChangeInputValue(e.target.value, "location");
            }}
          />
          {
            <Button
              color="default"
              variant="text"
              onClick={() => setIsLocationInputShow(false)}
            >
              <FontAwesomeIcon icon={location ? faCheck : faXmark} />
            </Button>
          }
        </div>
      )}
    </>
  );
}

export default LocationView;
