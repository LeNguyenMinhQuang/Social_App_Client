import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import UserInputView from "./user.input.view";
import { getAvatar } from "../../utils/get.avatar";
import { uploadOneFilePending } from "../../redux/slide/files/files.action";

function UserInputContainer() {
  // setup
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // state
  const [avatar, setAvatar] = useState<string | null>(null);
  const [photoModal, setPhotoModal] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [emotion, setEmotion] = useState<"happy" | "sad" | "angry" | "horny">(
    "happy"
  );
  const [isPublic, setIsPublic] = useState<"public" | "onlyFans" | "onlyMe">(
    "public"
  );
  const [location, setLocation] = useState("Viet Nam");
  const textAreaRef = useRef(null);
  // function

  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  const handleShowPhotoModal = () => {
    setPhotoModal(!photoModal);
  };

  const handleCreatePost = () => {
    console.log({ content, location, emotion, isPublic, images });
  };

  // life cycle
  useEffect(() => {
    const image = getAvatar(user?.avatar);
    if (image) setAvatar(image);
  }, [user]);

  return (
    <UserInputView
      avatar={avatar}
      textAreaRef={textAreaRef}
      handleChangeContent={handleChangeContent}
      content={content}
      photoModal={photoModal}
      handleShowPhotoModal={handleShowPhotoModal}
      images={images}
      setImages={setImages}
      setEmotion={setEmotion}
      setIsPublic={setIsPublic}
      location={location}
      setLocation={setLocation}
      handleCreatePost={handleCreatePost}
    />
  );
}

export default UserInputContainer;
