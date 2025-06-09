import type { IPost } from "../../../../datatypes/types";
import PostInfoView from "./post.info.view";

interface IProps {
  post: IPost;
}

function PostInfoContainer({ post }: IProps) {
  return <PostInfoView post={post} />;
}

export default PostInfoContainer;
