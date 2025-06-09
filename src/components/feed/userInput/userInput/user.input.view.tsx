import { Avatar, Button, Card, Col, Row } from "antd";
import Wrapper from "../styles";
import TextArea from "antd/es/input/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import IsPublic from "../isPublic/is.public.index";
import Feeling from "../feeling/feeling.index";
import Location from "../location/location.index";
import Photo from "../photo/photo.index";

interface IProps {
  avatar: string;
  inputValue: string;
  location: string;
  images: string[];
  isImageModalShow: boolean;
  handleChangeInputValue: (value: string, type: string) => void;
  setIsImageModalShow: (type: boolean) => void;
  setFeeling: (type: string) => void;
  setIsPublic: (type: string) => void;
  setImages: (type: string[]) => void;
  handleCreatePost: () => void;
}

function UserInputView({
  avatar,
  inputValue,
  location,
  images,
  isImageModalShow,
  handleChangeInputValue,
  setIsImageModalShow,
  setFeeling,
  setIsPublic,
  setImages,
  handleCreatePost,
}: IProps) {
  return (
    <Wrapper>
      <Card>
        <Row className="mb-6">
          <Col span={3}>
            <Avatar
              className="imgAvatar rounded-2xl"
              shape="circle"
              size={48}
              src={avatar}
            />
          </Col>
          <Col span={21}>
            <TextArea
              className="input text-lg"
              placeholder="Share your thoughts..."
              autoSize
              value={inputValue}
              onChange={(e) => {
                handleChangeInputValue(e.target.value, "text");
              }}
            />
          </Col>
        </Row>
        <div className="btns flex justify-between">
          <div className="flex gap-3">
            <Button
              color="default"
              variant="outlined"
              onClick={() => setIsImageModalShow(!isImageModalShow)}
            >
              <FontAwesomeIcon icon={faImage} />
              <span className="btnlabel">Photo</span>
            </Button>
            <IsPublic setIsPublic={setIsPublic} />
            <Feeling setFeeling={setFeeling} />
            <Location
              handleChangeInputValue={handleChangeInputValue}
              location={location}
            />
          </div>
          {inputValue && (
            <Button
              color="default"
              variant="solid"
              onClick={() => handleCreatePost()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="btnlabel">Send</span>
            </Button>
          )}
        </div>
        {isImageModalShow && <Photo images={images} setImages={setImages} />}
      </Card>
    </Wrapper>
  );
}
export default UserInputView;
