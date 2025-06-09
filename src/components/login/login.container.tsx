import { loginPending } from "../../redux/slide/auth/auth.action";
import { message, type FormProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import LoginView from "./login.view";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function LoginContainer() {
  // setup
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  // antd form

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { username, password } = values;
    try {
      await dispatch(
        loginPending({
          userName: username!,
          password: password!,
        })
      );

      message.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      message.error("An unexpected error occurred");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LoginView
      isLoading={isLoading}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}

export default LoginContainer;
