import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Logo from "../../../assets/images/logo";
import Input from "../../elements/inputs/input";
import Button from "../../elements/buttons/button";
import Card from "../../elements/card/card";

interface IProps {
  message: string | null;
  loginStatus: string;
  form: {
    userName: string;
    password: string;
  };
  setModalType: (modalType: "login" | "register") => void;
  handleChangeForm: (type: string, value: string) => void;
  handleLogin: () => void;
}

function LoginView({
  message,
  loginStatus,
  setModalType,
  form,
  handleChangeForm,
  handleLogin,
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
          name="password"
          type="password"
          placeholder="Password"
          width="200px"
          icon={faKey}
          value={form.password}
          onChange2={handleChangeForm}
        />
        {loginStatus === "pending" && (
          <p className="pending">
            <Spin indicator={<LoadingOutlined spin />} size="small" /> {message}
          </p>
        )}
        {loginStatus === "failed" && <p className="failed">{message}</p>}
        <Button
          width="200px"
          label="Login"
          type="primary"
          onClick={handleLogin}
        />
        <p className="create">
          Doesn't have account?{" "}
          <span onClick={() => setModalType("register")}>Create a new one</span>
        </p>
      </div>
    </Card>
  );
}

export default LoginView;
