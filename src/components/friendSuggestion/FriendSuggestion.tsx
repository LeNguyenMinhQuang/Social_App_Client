import { Card } from "antd";

import styled from "styled-components";
import People from "./People";

function FriendSuggestion() {
    return (
        <Wrapper className="mb-6">
            <Card>
                <p className="text-lg font-bold mb-6">People to Follow</p>
                <div className="people">
                    <People />
                    <People />
                    <People />
                    <People />
                    <People />
                </div>
                <div className="btn flex justify-center items-center mt-6">
                    <span className="w-4/5 seemore font-medium text-center text-base">
                        See more
                    </span>
                </div>
            </Card>
        </Wrapper>
    );
}

export default FriendSuggestion;

const Wrapper = styled.div`
    .btn {
        border-top: 1px solid var(--text-unactive);
        padding-top: 24px;
        .seemore {
            line-height: 40px;
            color: var(--text-3);
            cursor: pointer;
            transition: 0.2s ease-in-out;
            transform: translateY(0);

            &:hover {
                color: var(--text-active);
                transform: translateY(-4px);
            }
        }
    }
`;
