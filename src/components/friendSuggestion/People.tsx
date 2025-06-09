import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Col, Row } from "antd";
import styled from "styled-components";

function People() {
    return (
        <Wrapper className="mt-6">
            <Row>
                <Col span={6}>
                    <div className="cursor-pointer">
                        <Avatar
                            className="imgAvatar rounded-2xl"
                            shape="circle"
                            size={48}
                            src="src/assets/avatar.jpg"
                        />
                    </div>
                </Col>
                <Col span={16}>
                    <div className="cursor-pointer">
                        <div className="userName text-base font-bold">
                            Nguyễn Thị Hà Vi
                        </div>
                        <div className="detail text-sm font-light">
                            Cosplayer
                        </div>
                    </div>
                </Col>
                <Col span={2}>
                    <div className="sub cursor-pointer text-base w-full flex justify-end items-center h-full">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </Col>
            </Row>
        </Wrapper>
    );
}

export default People;

const Wrapper = styled.div`
    color: var(--text-3);

    .sub {
        color: var(--text-3);

        transition: 0.2s ease-in-out;
        transform: translateY(0);

        &:hover {
            color: var(--text-active);
            transform: translateY(-4px);
        }
    }
`;
