import { useEffect, useState } from "react";
import LoginView from "./login.view";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginPending } from "../../../redux/slide/auth/auth.action";
import { loginReset } from "../../../redux/slide/auth/auth.slice";

interface IProps {
  setModalType: (modalType: "login" | "register") => void;
}

function LoginContainer({ setModalType }: IProps) {
  // setup
  const { loginStatus, message: _message } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  // state
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  // function
  const handleChangeForm = (type: string, value: string) => {
    switch (type) {
      case "username":
        setForm((prev) => {
          return { ...prev, userName: value };
        });
        break;
      case "password":
        setForm((prev) => {
          return { ...prev, password: value };
        });
        break;
    }
  };

  const handleLogin = () => {
    if (form.userName === "" || form.password === "") {
      setMessage("Please fill in the inputs");
    } else {
      dispatch(loginPending(form));
    }
  };

  // life cycle
  useEffect(() => {
    if (loginStatus === "success") {
      setTimeout(() => {
        dispatch(loginReset());
        setForm({
          userName: "",
          password: "",
        });
      }, 500);
    }
    if (loginStatus === "pending" || loginStatus === "failed") {
      setMessage(_message);
    }
  }, [loginStatus]);

  return (
    <LoginView
      setModalType={setModalType}
      form={form}
      handleChangeForm={handleChangeForm}
      loginStatus={loginStatus}
      message={message}
      handleLogin={handleLogin}
    />
  );
}

export default LoginContainer;
