import UserInput from "../userInput/user.input.index";
import Post from "../post/post.index";
import LoadingPost from "../post/loadingPost/loading.post";
import type { IPost } from "../../../datatypes/types";
import Wrapper from "./styles";

interface IProps {
  posts: IPost[];
  hasMore: boolean;
  error: string | null;
  isLoading?: boolean;
}

function FeedView({ posts, hasMore, error }: IProps) {
  return (
    <Wrapper>
      <UserInput />
      {posts.length > 0 &&
        posts.map((post: IPost) => {
          return <Post key={post._id} post={post} />;
        })}
      <LoadingPost status={hasMore} />
    </Wrapper>
  );
}

export default FeedView;
