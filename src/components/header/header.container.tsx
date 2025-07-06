import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAvatar } from "../../utils/get.avatar";
import HeaderView from "./header.view";

function HeaderContainer() {
  // setup
  const { user } = useAppSelector((state) => state.auth);

  // state
  const [avatar, setAvatar] = useState<string | null>("");
  const [userModal, setUserModal] = useState<boolean>(false);

  // life cycle
  useEffect(() => {
    if (user && user.avatar) {
      const avatar = getAvatar(user.avatar);
      setAvatar(avatar);
    } else {
      setAvatar("");
    }
  }, [user]);

  return <HeaderView avatar={avatar} />;
}

export default HeaderContainer;
