import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("/background-login.jpg") no-repeat center center / cover;
  overflow: hidden;

  .box {
    width: 500px;
    height: 700px;
    z-index: 2;
    color: var(--color-text-primary);

    .text {
      margin-bottom: 1.5rem;

      .logo {
        width: 80px;
        height: auto;
        color: var(--color-primary-base);
      }

      h1 {
        color: var(--color-primary-base);
        margin-bottom: -0.6rem;
      }

      p {
        text-align: center;
        width: 30ch;
        margin-top: 0.6rem;
      }
    }

    .inputs {
      .inputBox {
        margin-bottom: 0.5rem;
      }

      .buttonBox {
        margin-top: 1rem;
      }

      .pending {
        font-size: var(--font-size-xsmall);
        margin-bottom: 0;
      }

      .failed {
        color: var(--color-danger-base);
        font-size: var(--font-size-xsmall);
        margin-bottom: 0;
      }

      .create {
        font-size: var(--font-size-small);
        text-align: center;
        width: 20ch;
        margin-top: 1rem;

        span {
          color: var(--color-primary-base);
          cursor: pointer;
        }
      }
    }
  }
`;
