import { Col, Row } from "antd";
import { Wrapper } from "./header.styled";
import {
  faSearch,
  faBell,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/logo";
import Input from "../elements/inputs/input";
import Button from "../elements/buttons/button";

interface IProps {
  avatar: string | null;
}

function HeaderView({ avatar }: IProps) {
  return (
    <Wrapper>
      <div className="header">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="box logobox">
              <Logo className="logo" />
              <div className="name">Binziila</div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className="box searchbox">
              <Input
                name="search"
                placeholder="Type in search"
                width="100%"
                icon={faSearch}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="box menubox">
              <div>
                <Button type="inverte" icon={faBell}></Button>
              </div>
              <div>
                <Button type="inverte" icon={faCog}></Button>
              </div>
              <div>
                <Button
                  type={avatar ? "image" : "inverte"}
                  image={avatar !== null ? avatar : ""}
                  icon={avatar === "" ? faUser : ""}
                ></Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default HeaderView;
