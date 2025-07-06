import { Col, Row } from "antd";
import { Wrapper } from "./body.styled";
import Card from "../elements/card/card";
import Nav from "../nav/nav.index";
import UserInput from "../user.input/user.input.index";

function BodyView() {
  return (
    <Wrapper>
      <div className="body">
        <Row>
          <Col xs={0} sm={0} md={0} lg={6} xl={6}>
            <div className="box left">
              <Nav />
            </div>
          </Col>
          <Col xs={24} sm={24} md={18} lg={12} xl={12}>
            <div className="box mid">
              <UserInput />
            </div>
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <div className="box right"></div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default BodyView;
