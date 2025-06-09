import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import type { IPost } from "../../../../datatypes/types";
import { formatNumber } from "../../../../ultils/count";

interface IProps {
  post: IPost;
}

function ReactionView({ post }: IProps) {
  const { likesCount, commentsCount, sharesCount } = post;
  return (
    <div className="reaction">
      <Row className="mb-2">
        <Col span={8}>
          <div className="btn flex justify-center items-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="ml-1.5 text-base">
              Like ({formatNumber(likesCount!)})
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="btn flex justify-center items-center">
            <FontAwesomeIcon icon={faComment} />
            <span className="ml-1.5 text-base">
              Comment({formatNumber(commentsCount!)})
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="btn flex justify-center items-center">
            <FontAwesomeIcon icon={faShare} />
            <span className="ml-1.5 text-base">
              Share ({formatNumber(sharesCount!)})
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ReactionView;
