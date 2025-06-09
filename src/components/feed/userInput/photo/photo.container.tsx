import { useAppDispatch } from "../../../../redux/hooks";
import { uploadOneFilePending } from "../../../../redux/slide/files/files.action";
import PhotoView from "./photo.view";

interface IProps {
  images: string[];
  setImages: (images: string[]) => void;
}

function PhotoContainer({ images, setImages }: IProps) {
  const dispatch = useAppDispatch();

  const handleChangeImage = (file: File) => {
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
    <PhotoView
      images={images}
      handleChangeImage={handleChangeImage}
      handleRemoveImage={handleRemoveImage}
    />
  );
}

export default PhotoContainer;
