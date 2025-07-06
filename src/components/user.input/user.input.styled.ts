import styled from "styled-components";

export const Wrapper = styled.div`
  .row1 {
    margin-bottom: 1.5rem;
  }

  .row2 {
    .options {
      width: 100%;
      display: flex;
      gap: 0.75rem;
    }
    .postbtn {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    .btns {
      position: relative;

      .optionModal {
        position: absolute;
        top: calc(42px + 1rem);
        width: 180px;
        height: 260px;
        z-index: 1;

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
      }
    }

    .btns.location {
      .optionModal {
        width: 300px;
        height: 90px;
        display: flex;
        gap: 1rem;
      }
    }

    .btns.ispublic {
      .optionModal {
        height: 200px;
        gap: 1rem;
      }
    }
  }

  .row3 {
    margin-top: 1.5rem;
    .images {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;

      .imagebox {
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: var(--shadow);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(1);
        }

        .close {
          display: none;
          position: absolute;
        }

        &:hover {
          .image {
            filter: brightness(0.6);
          }
          .close {
            display: block;
          }
        }
      }
    }
  }
`;
