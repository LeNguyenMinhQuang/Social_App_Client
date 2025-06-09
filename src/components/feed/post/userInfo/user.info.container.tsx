import type { IPost } from "../../../../datatypes/types";
import UserInfoView from "./user.info.view";

interface IProps {
  post: IPost;
}

function UserInfoContainer({ post }: IProps) {
  return <UserInfoView post={post} />;
}

export default UserInfoContainer;
