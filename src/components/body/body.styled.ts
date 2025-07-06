import styled from "styled-components";

export const Wrapper = styled.div`
  margin-block: var(--header-height);

  .body {
    position: relative;
    max-width: var(--body-max-width);
    margin-inline: auto;

    .box {
      padding-block: 1.5rem;
    }

    .box.left {
      padding-inline: 1.5rem 0.75rem;
    }

    .box.mid {
      padding-inline: 0.75rem 0.75rem;
    }

    .box.right {
      padding-inline: 0.75rem 1.5rem;
    }
  }
`;
