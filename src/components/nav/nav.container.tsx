import { useAppSelector } from "../../redux/hooks";
import NavView from "./nav.view";

function NavContainer() {
  const { user } = useAppSelector((state) => state.auth);
  if (user) return <NavView user={user} />;
}

export default NavContainer;
