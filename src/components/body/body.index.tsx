import { Row, Col } from "antd";
import UserPane from "../userPane/user.pane";
import FeedContainer from "../feed/feed/feed.container";
import FriendSuggestion from "../friendSuggestion/FriendSuggestion";
import FollowedPeople from "../followedPeople/FollowedPeople";
import { Wrapper } from "./styles";

function Body() {
  return (
    <Wrapper>
      <div className="container mx-auto">
        <Row gutter={24}>
          <Col xl={6} md={0} sm={0} xs={0}>
            <UserPane />
          </Col>
          <Col xl={12} md={16} sm={24} xs={24}>
            <FeedContainer />
          </Col>
          <Col xl={6} md={8} sm={0} xs={0}>
            <FriendSuggestion />
            <FollowedPeople />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default Body;
