import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import type { IUserData } from "../../../datatypes/types";
import { getAvatar } from "../../../utils/get.avatar";
import { Link } from "react-router-dom";
import { scrollTop } from "../../../utils/scroll.to.top";

interface IProps {
  user: IUserData;
}

function FirstSection({ user }: IProps) {
  return (
    <div className="firstSection">
      <Link to={"/"} className="item" onClick={() => scrollTop()}>
        <div className="icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <p className="label">Home</p>
      </Link>
      <Link to={`/profile/${user._id}`} className="item">
        <div className="icon">
          {user && user.avatar ? (
            <img src={getAvatar(user.avatar)!} />
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
        </div>
        <p className="label">{user.userName}</p>
      </Link>
      {user.role?.name.includes("ADMIN") && (
        <Link to={`/admin`} className="item">
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <p className="label">Admin page</p>
        </Link>
      )}
    </div>
  );
}

export default FirstSection;
