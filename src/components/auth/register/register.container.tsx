import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import RegisterView from "./register.view";
import { registerReset } from "../../../redux/slide/auth/auth.slice";
import { registerPending } from "../../../redux/slide/auth/auth.action";
import { emailRegex } from "../../../utils/regex";

interface IProps {
  setModalType: (modalType: "login" | "register") => void;
}

function RegisterContainer({ setModalType }: IProps) {
  // setup
  const { registerStatus, message: _message } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  // state
  const [form, setForm] = useState({
    userName: "",
    password: "",
    email: "",
    confirm: "",
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
      case "confirm":
        setForm((prev) => {
          return { ...prev, confirm: value };
        });
        break;
      case "email":
        setForm((prev) => {
          return { ...prev, email: value };
        });
        break;
    }
  };

  const handleRegister = () => {
    if (
      form.userName === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirm === ""
    ) {
      setMessage("Please fill in the inputs");
    } else if (form.password !== form.confirm) {
      setMessage("Passwords do not match");
    } else if (!emailRegex.test(form.email)) {
      setMessage("Please fill the email");
    } else {
      dispatch(
        registerPending({
          userName: form.userName,
          email: form.email,
          password: form.password,
        })
      );
    }
  };

  // life cycle
  useEffect(() => {
    if (registerStatus === "success") {
      setTimeout(() => {
        dispatch(registerReset());
        setForm({
          userName: "",
          password: "",
          email: "",
          confirm: "",
        });
      }, 500);
      setModalType("login");
    }
    if (registerStatus === "pending" || registerStatus === "failed") {
      setMessage(_message);
    }
  }, [registerStatus]);

  return (
    <RegisterView
      setModalType={setModalType}
      form={form}
      handleChangeForm={handleChangeForm}
      registerStatus={registerStatus}
      message={message}
      handleRegister={handleRegister}
    />
  );
}

export default RegisterContainer;
