import { Col, Row } from "antd";
import Card from "../elements/card/card";
import { faImage, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/buttons/button";
import Input from "../elements/inputs/input";
import TextArea from "../elements/text.area/text.area";
import { Wrapper } from "./user.input.styled";

import Feeling from "./feeling/feeling";
import Public from "./ispublic/public";
import Location from "./location/location";
import Photo from "./photo/photo";

interface IProps {
  avatar: string | null;

  textAreaRef: any;
  handleChangeContent: (value: string) => void;
  content: string;
  photoModal: boolean;
  handleShowPhotoModal: () => void;
  images: string[];
  setImages: any;
  location: string;
  setLocation: (type: string) => void;
  setEmotion: (type: "happy" | "sad" | "angry" | "horny") => void;
  setIsPublic: (type: "public" | "onlyFans" | "onlyMe") => void;
  handleCreatePost: () => void;
}

function UserInputView({
  avatar,
  textAreaRef,
  content,
  handleChangeContent,
  photoModal,
  handleShowPhotoModal,
  images,
  setImages,
  setEmotion,
  setIsPublic,
  location,
  setLocation,
  handleCreatePost,
}: IProps) {
  return (
    <Wrapper>
      <Card>
        <Row className="row1">
          <Col span={3}>
            <div className="avatar">
              <Button
                type={avatar ? "image" : "inverte"}
                image={avatar !== null ? avatar : ""}
                icon={avatar === null ? faUser : ""}
              ></Button>
            </div>
          </Col>
          <Col span={21}>
            <TextArea
              ref={textAreaRef}
              placeholder="What's on your mind?"
              width="100%"
              value={content}
              onChange1={handleChangeContent}
            />
          </Col>
        </Row>
        <Row className="row2">
          <Col span={12}>
            <div className="options">
              <Button
                type="inverte"
                icon={faImage}
                onClick={handleShowPhotoModal}
              />
              <Feeling setEmotion={setEmotion} />
              <Location location={location} setLocation={setLocation} />
              <Public setIsPublic={setIsPublic} />
            </div>
          </Col>
          <Col span={12}>
            {content && (
              <div className="postbtn">
                <Button
                  type="primary"
                  label="Post"
                  width="120px"
                  onClick={handleCreatePost}
                />
              </div>
            )}
          </Col>
        </Row>
        {photoModal && (
          <Row className="row3">
            <Photo images={images} setImages={setImages} />
          </Row>
        )}
      </Card>
    </Wrapper>
  );
}

export default UserInputView;
