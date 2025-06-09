import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Col, Row } from "antd";
import styled from "styled-components";

function People() {
    return (
        <Wrapper className="mt-6">
            <Row>
                <Col span={6}>
                    <div className="cursor-pointer">
                        <Badge dot offset={[-5, 40]} color={"var(--green)"}>
                            <Avatar
                                className="imgAvatar rounded-2xl"
                                shape="circle"
                                size={48}
                                src="src/assets/avatar.jpg"
                            />
                        </Badge>
                    </div>
                </Col>
                <Col span={18}>
                    <div className="cursor-pointer">
                        <div className="userName text-base font-bold">
                            Nguyễn Thị Hà Vi
                        </div>
                        <div className="detail text-sm font-light">
                            Cosplayer
                        </div>
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

    .ant-badge-dot {
        width: 8px;
        height: 8px;
    }
`;
