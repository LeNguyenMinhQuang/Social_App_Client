import { Avatar } from "antd";
import { getAvatar } from "../../ultils/get.avatar";
import { UserImageWrapper as Wrapper } from "./styles";

interface IProps {
  img: string | null | undefined;
}

function UserImage({ img }: IProps) {
  const avatar = getAvatar(img);

  return (
    <Wrapper>
      <div className="cover w-full h-20">
        <img src="src/assets/cover.jpg" alt="" />
      </div>
      <div className="avatar w-full h-auto flex justify-center">
        <Avatar
          className="imgAvatar rounded-2xl"
          shape="square"
          size={64}
          src={avatar}
        />
      </div>
    </Wrapper>
  );
}

export default UserImage;
