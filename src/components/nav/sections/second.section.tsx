import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeed,
  faMessage,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SecondSection() {
  return (
    <div className="secondSection">
      <h5>Shortcut</h5>
      <Link to={`/following`} className="item">
        <div className="icon">
          <FontAwesomeIcon icon={faFeed} />
        </div>
        <p className="label">Following</p>
      </Link>
      <Link to={`/messages`} className="item">
        <div className="icon">
          <FontAwesomeIcon icon={faMessage} />
        </div>
        <p className="label">Messages</p>
      </Link>
      <Link to={`/groups`} className="item">
        <div className="icon">
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
        <p className="label">Groups</p>
      </Link>
    </div>
  );
}

export default SecondSection;
