import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMessage,
  faBell,
  faUser,
  faHouse,
  faEarthAsia,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Input, Layout, Row, Col, Avatar } from "antd";

import { Wrapper } from "./styles";
import type { IUserData } from "../../datatypes/types";

interface IProps {
  user: IUserData;
  avatar: string;
}

function HeaderView({ user, avatar }: IProps) {
  const { Header: AntdHeader } = Layout;
  const { Search } = Input;

  return (
    <Wrapper>
      <AntdHeader className="header mx-auto flex items-center">
        <Row align="middle" style={{ width: "100%" }}>
          <Col xl={1} md={12} sm={12} xs={12}>
            <div
              className="logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="navbtn flex w-10 h-10 justify-center items-center">
                <FontAwesomeIcon icon={faHouse} />
              </span>
            </div>
          </Col>
          <Col xl={5} md={0} sm={0} xs={0}>
            <Search
              placeholder="input search text"
              size="large"
              style={{ width: "240px", marginBlock: "12px" }}
            />
          </Col>
          <Col xl={12} md={0} sm={0} xs={0}>
            <div className="flex justify-center items-center gap-2">
              <span className="navlink active">
                <FontAwesomeIcon icon={faEarthAsia} />
                &nbsp;Discover
              </span>
              <span className="navlink">
                <FontAwesomeIcon icon={faUserGroup} />
                &nbsp;Friend
              </span>
            </div>
          </Col>
          <Col
            xl={6}
            md={12}
            sm={12}
            xs={12}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="flex justify-end items-center gap-2 w-full">
              <span className="navbtn flex w-10 h-10 justify-center items-center">
                <FontAwesomeIcon icon={faGear} />
              </span>
              <span className="navbtn flex w-10 h-10 justify-center items-center">
                <FontAwesomeIcon icon={faMessage} />
              </span>
              <span className="navbtn flex w-10 h-10 justify-center items-center">
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span className="navbtn flex w-10 h-10 justify-center items-center">
                {user ? (
                  <Avatar shape="square" size={40} src={avatar} />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
              </span>
            </div>
          </Col>
        </Row>
      </AntdHeader>
    </Wrapper>
  );
}

export default HeaderView;
