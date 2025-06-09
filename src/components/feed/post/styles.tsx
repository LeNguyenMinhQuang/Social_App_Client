import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  color: var(--text-3);

  .userInfo {
    .userName {
      color: var(--text-1);
    }
    .detail,
    .more {
      color: var(--text-3);
    }
  }

  .postInfo {
    .imageCarousel {
      .imagebox {
        border-radius: 8px;
        width: 100%;
        height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }

  .reaction {
    .btn {
      font-size: 16px;
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

export default Wrapper;
