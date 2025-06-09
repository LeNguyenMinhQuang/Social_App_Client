import { Col, Row } from "antd";
import UserImage from "./user.image";
import { MyCard } from "./styles";
import { useAppSelector } from "../../redux/hooks";

function UserPane() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <MyCard style={{ width: "100%" }} cover={<UserImage img={user?.avatar} />}>
      {user && (
        <div className="cardBody">
          <div className="userInfo">
            <div className="userName text-lg font-bold">{user?.userName}</div>
            <div className="detail text-sm mb-2 font-light">
              {user?.role!.name}
            </div>
            <div className="description text-lg">{user?.bio}</div>
          </div>
          <div className="userStatus mt-6 text-center">
            <Row>
              <Col span={12}>
                <div className="block">
                  <div className="number text-base font-semibold">
                    {user?.followedCount}
                  </div>
                  <div className="tag">Followed</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="block lastchild">
                  <div className="number text-base font-semibold">
                    {user?.followingCount}
                  </div>
                  <div className="tag">Following</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </MyCard>
  );
}

export default UserPane;
