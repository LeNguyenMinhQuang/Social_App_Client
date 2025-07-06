import type { IUserData } from "../../datatypes/types";
import Card from "../elements/card/card";
import { Wrapper } from "./nav.styled";
import FirstSection from "./sections/first.section";
import SecondSection from "./sections/second.section";
import ThirdSection from "./sections/third.section";

interface IProps {
  user: IUserData;
}

function NavView({ user }: IProps) {
  return (
    <Wrapper>
      <Card className="navbox">
        <FirstSection user={user} />
        <SecondSection />
        <ThirdSection />
      </Card>
    </Wrapper>
  );
}

export default NavView;
