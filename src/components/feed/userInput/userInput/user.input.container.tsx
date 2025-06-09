import { useState } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { getAvatar } from "../../../../ultils/get.avatar";
import UserInputView from "./user.input.view";

function UserInputContainer() {
  // setup
  const { user } = useAppSelector((state) => state.auth);
  const avatar = user?.avatar ? getAvatar(user?.avatar) : `src/assets/avatar`;

  // state
  const [inputValue, setInputValue] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [feeling, setFeeling] = useState<string>("");
  const [isPublic, setIsPublic] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [isImageModalShow, setIsImageModalShow] = useState<boolean>(false);

  // function
  const handleChangeInputValue = (value: string, type: string) => {
    switch (type) {
      case "text":
        setInputValue(value);
        break;
      case "location":
        setLocation(value);
    }
  };

  const handleCreatePost = () => {
    console.log({ inputValue, location, feeling, isPublic, images });
  };
  return (
    <UserInputView
      avatar={avatar}
      inputValue={inputValue}
      location={location}
      images={images}
      isImageModalShow={isImageModalShow}
      handleChangeInputValue={handleChangeInputValue}
      setIsImageModalShow={setIsImageModalShow}
      setFeeling={setFeeling}
      setIsPublic={setIsPublic}
      setImages={setImages}
      handleCreatePost={handleCreatePost}
    />
  );
}

export default UserInputContainer;
