import { Card } from "antd";

import UserInfo from "./userInfo/user.info.index";
import PostInfo from "./postInfo/post.info.index";
import Reaction from "./reaction/reaction.index";
import Wrapper from "./styles";

import type { IPost } from "../../../datatypes/types";

function Post({ post }: { post: IPost }) {
  return (
    <Wrapper className="mt-6">
      <Card>
        <UserInfo post={post} />
        <PostInfo post={post} />
        <Reaction post={post} />
      </Card>
    </Wrapper>
  );
}

export default Post;
