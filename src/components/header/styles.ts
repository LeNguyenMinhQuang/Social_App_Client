import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-2);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .header {
    background-color: var(--bg-2);
    max-width: 1600px;
    padding-inline: 24px;

    .navbtn {
      background-color: var(--item-bg);
      border-radius: 8px;
      cursor: pointer;

      svg {
        font-size: 16px;
        color: var(--icon);
        transition: 0.2s ease-in-out;
        transform: translateY(0);
      }

      &:hover {
        svg {
          color: var(--text-active);
          transform: translateY(-4px);
        }
      }
    }

    .navlink {
      font-weight: 600;
      width: 100px;
      font-size: 16px;
      color: var(--text-unactive);
      text-align: center;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      transform: translateY(0);

      &:hover {
        color: var(--text-active);
        transform: translateY(-4px);
      }
    }

    .active {
      position: relative;
      color: var(--text-active);

      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid var(--text-active);
        bottom: 12px;
        left: 0;
        width: 100%;
      }

      &:hover {
        transform: none;
      }
    }
  }
`;
