import { Flex, Row } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { getImagePost } from "../../../../ultils/get.avatar";

interface IProps {
  images: string[];
  handleChangeImage: (file: File) => void;
  handleRemoveImage: (image: string) => void;
}

function PhotoView({ images, handleChangeImage, handleRemoveImage }: IProps) {
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {false ? (
        <LoadingOutlined style={{ fontSize: "20px" }} />
      ) : (
        <PlusOutlined style={{ fontSize: "20px" }} />
      )}
    </button>
  );

  return (
    <Row className="mt-6">
      <Flex gap="middle" wrap>
        {images.map((image) => {
          return (
            <div className="uploadImage" key={image}>
              <img src={getImagePost(image)} alt="image" />
              <div className="overlay" onClick={() => handleRemoveImage(image)}>
                <FontAwesomeIcon className="close-icon" icon={faXmark} />
              </div>
            </div>
          );
        })}
        {images?.length < 5 && (
          <label htmlFor="file">
            <div className="uploadImage upload">{uploadButton}</div>
          </label>
        )}
        <input
          type="file"
          hidden
          id="file"
          // @ts-ignore
          onChange={(e) => handleChangeImage(e.target.files[0])}
        />
      </Flex>
    </Row>
  );
}

export default PhotoView;
