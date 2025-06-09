import type { IPost } from "../../../../datatypes/types";
import ReactionView from "./reaction.view";

interface IProps {
  post: IPost;
}

function ReactionContainer({ post }: IProps) {
  return <ReactionView post={post} />;
}

export default ReactionContainer;
