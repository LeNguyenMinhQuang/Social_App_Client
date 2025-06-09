import { Col, Row, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getAvatar } from "../../../../ultils/get.avatar";
import type { IPost } from "../../../../datatypes/types";
import moment from "moment";

interface IProps {
  post: IPost;
}

function UserInfoView({ post }: IProps) {
  const { userId, location, createdAt } = post;
  const time = moment(createdAt).fromNow();
  return (
    <div className="userInfo mb-6">
      {userId && (
        <Row>
          <Col span={2}>
            <div>
              <Avatar
                className="imgAvatar rounded-2xl"
                shape="circle"
                size={48}
                src={getAvatar(userId.avatar)}
              />
            </div>
          </Col>
          <Col span={18}>
            <div className="userInfo ml-1.5">
              <div className="userName text-base font-bold">
                {userId.userName}
              </div>
              <div className="detail text-sm font-light">
                {userId?.role && userId.role.name} - {location} - {time}.
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div className="more w-full flex justify-end">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default UserInfoView;
