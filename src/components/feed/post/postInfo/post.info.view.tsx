import { Carousel } from "antd";
import type { IPost } from "../../../../datatypes/types";
import { getImagePost } from "../../../../ultils/get.avatar";

interface IProps {
  post: IPost;
}

function PostInfoView({ post }: IProps) {
  const { images, content } = post;
  return (
    <div className="postInfo mb-8">
      <div className="post text-base mb-6">{content}</div>
      <Carousel draggable arrows infinite className="imageCarousel">
        {images &&
          images.map((image) => {
            return (
              <div className="imagebox" key={image}>
                <img className="image" src={getImagePost(image)} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

export default PostInfoView;
