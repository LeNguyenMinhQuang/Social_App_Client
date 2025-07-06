import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--color-surface-1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  box-shadow: var(--shadow);

  .header {
    max-width: var(--body-max-width);
    padding-inline: 1.5rem;
    background-color: var(--color-surface-1);
    margin-inline: auto;

    .box {
      height: var(--header-height);
      display: flex;
      align-items: center;
    }

    .logobox {
      color: var(--color-primary-base);

      .logo {
        width: 56px;
        height: 56px;
      }

      .name {
        font-size: 1.75rem;
      }
    }

    .searchbox {
      padding-inline: 1rem;
    }

    .menubox {
      padding-inline: 0.5rem;
      gap: 1rem;
      justify-content: end;
    }
  }
`;
