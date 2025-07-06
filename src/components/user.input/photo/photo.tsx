import Button from "../../elements/buttons/button";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { getImagePost } from "../../../utils/get.avatar";
import { uploadOneFilePending } from "../../../redux/slide/files/files.action";
import { useAppDispatch } from "../../../redux/hooks";

interface IProps {
  images: string[];
  setImages: any;
}

function Photo({ images, setImages }: IProps) {
  const dispatch = useAppDispatch();
  const handleChangeImages = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const folderType = "post";
    const fileData = {
      formData,
      folderType,
    };
    dispatch(
      uploadOneFilePending({
        fileData,
        callback: (response: { success: boolean; data: string }) => {
          if (response.success) {
            //@ts-ignore
            setImages((prev: string[]) => {
              return [...prev, response.data];
            });
          }
        },
      })
    );
  };

  const handleRemoveImage = (image: string) => {
    // @ts-ignore
    setImages((prevImages: string[]) =>
      prevImages.filter((img: string) => img !== image)
    );
  };

  return (
    <div className="images">
      {images.map((image) => {
        return (
          <div className="imagebox" key={image}>
            <img src={getImagePost(image)} alt={image} className="image" />
            <div className="close">
              <Button
                type="inverte"
                icon={faClose}
                width="42px"
                onClick={() => handleRemoveImage(image)}
              />
            </div>
          </div>
        );
      })}

      {images.length <= 4 && (
        <div className="imagebox">
          <label htmlFor="file">
            <Button type="inverte" icon={faPlus} width="42px" />
          </label>
          <input
            type="file"
            hidden
            id="file"
            // @ts-ignore
            onChange={(e) => handleChangeImages(e.target.files[0])}
          />
        </div>
      )}
    </div>
  );
}

export default Photo;
