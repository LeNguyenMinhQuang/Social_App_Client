import styled from "styled-components";

export const Wrapper = styled.div`
  .navbox {
  }

  h5 {
    color: var(--color-text-primary);
    margin-block: 1.5rem;
  }
  .item {
    display: flex;
    margin-bottom: 1.5rem;
    color: var(--color-text-primary);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    .icon {
      margin-right: 1rem;
      height: 2rem;
      width: 2rem;
      border-radius: 1rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: var(--shadow);
    }

    p {
      transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: scale(1);
      line-height: 2rem;
      margin-top: 2px;
      margin-bottom: 0;
    }

    &:hover {
      color: var(--color-primary-base);
    }
  }

  .firstSection {
    font-size: 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .secondSection {
    border-bottom: 1px solid var(--color-border);
  }

  .thirdSection {
    .item:nth-child(3) {
      margin-bottom: 0 !important;
    }
  }
`;
