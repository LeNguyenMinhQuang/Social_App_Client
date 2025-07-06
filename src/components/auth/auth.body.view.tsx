import { Wrapper } from "./auth.body.styled";
import { Col, Row } from "antd";
import Login from "./login/login.container";
import Register from "./register/register.container";

interface IProps {
  modalType: "login" | "register";
  setModalType: (modalType: "login" | "register") => void;
}

function AuthView(props: IProps) {
  const { modalType, setModalType } = props;
  return (
    <Wrapper>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {modalType == "login" && (
            <div className="flex h-screen justify-center items-center scale-in">
              <Login setModalType={setModalType} />
            </div>
          )}
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {modalType == "register" && (
            <div className="flex h-screen justify-center items-center scale-in">
              <Register setModalType={setModalType} />
            </div>
          )}
        </Col>
      </Row>
    </Wrapper>
  );
}

export default AuthView;
