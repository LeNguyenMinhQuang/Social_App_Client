import { useState } from "react";
import AuthView from "./auth.body.view";

function AuthContainer() {
  // state
  const [modalType, setModalType] = useState<"login" | "register">("login");

  return <AuthView modalType={modalType} setModalType={setModalType} />;
}

export default AuthContainer;
