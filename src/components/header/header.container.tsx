import { useAppSelector } from "../../redux/hooks";
import { getAvatar } from "../../ultils/get.avatar";
import HeaderView from "./header.view";

function HeaderContainer() {
  // setup
  const { user } = useAppSelector((state) => state.auth);
  const avatar = getAvatar(user?.avatar);
  return user && <HeaderView user={user} avatar={avatar} />;
}

export default HeaderContainer;
