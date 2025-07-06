import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import Logo from "../../../assets/images/logo";
import Input from "../../elements/inputs/input";
import Button from "../../elements/buttons/button";
import Card from "../../elements/card/card";

interface IProps {
  message: string | null;
  registerStatus: string;
  form: {
    userName: string;
    password: string;
    email: string;
    confirm: string;
  };
  setModalType: (modalType: "login" | "register") => void;
  handleChangeForm: (type: string, value: string) => void;
  handleRegister: () => void;
}
function RegisterView({
  message,
  registerStatus,
  setModalType,
  form,
  handleChangeForm,
  handleRegister,
}: IProps) {
  return (
    <Card className="box flex flex-col justify-center items-center">
      <div className="text flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Logo className="logo" />
          <h1>Welcome</h1>
        </div>
        <p>Pudo helps you connect and share with the people in your life.</p>
      </div>
      <div className="inputs flex flex-col justify-center items-center">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          width="200px"
          icon={faUser}
          value={form.userName}
          onChange2={handleChangeForm}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          width="200px"
          icon={faEnvelope}
          value={form.email}
          onChange2={handleChangeForm}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          width="200px"
          icon={faKey}
          value={form.password}
          onChange2={handleChangeForm}
        />
        <Input
          name="confirm"
          type="password"
          placeholder="Confirm password"
          width="200px"
          icon={faKey}
          value={form.confirm}
          onChange2={handleChangeForm}
        />
        {registerStatus === "pending" && (
          <p className="pending">
            <Spin indicator={<LoadingOutlined spin />} size="small" /> {message}
          </p>
        )}
        {registerStatus === "failed" && <p className="failed">{message}</p>}
        <Button
          width="200px"
          label="Register"
          type="primary"
          onClick={handleRegister}
        />
        <p className="create">
          Already have account?{" "}
          <span onClick={() => setModalType("login")}>Login</span>
        </p>
      </div>
    </Card>
  );
}

export default RegisterView;
