import { Card } from "antd";
import styled from "styled-components";

export const UserImageWrapper = styled.div`
  position: relative;
  .cover {
    overflow: hidden;

    img {
      transform: translateY(-70px);
    }
  }
  .avatar {
    position: absolute;
    top: 40px;
    .imgAvatar {
      background-color: var(--bg-2);
      border: 4px solid var(--bg-2);
      box-sizing: content-box;
      border-radius: 8px !important;
      img {
        border-radius: 4px;
      }
    }
  }
`;

export const MyCard = styled(Card)`
  padding-top: 0 !important;
  overflow: hidden;

  .cardBody {
    margin-top: 32px;
    width: 100%;

    .userInfo {
      text-align: center;
      .userName {
        color: var(--text-1);
      }
      .detail,
      .description {
        color: var(--text-3);
      }
    }

    .userStatus {
      .block {
        border-right: 1px solid var(--text-border);

        .tag {
          color: var(--text-3);
        }
      }
      .lastchild {
        border: none;
      }
    }
  }
`;
