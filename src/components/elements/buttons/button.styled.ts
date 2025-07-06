import styled from "styled-components";

interface IProps {
  width?: string;
  type?: string;
}

export const Wrapper = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.type === "primary"
      ? "var(--color-primary-base)"
      : props.type === "inverte"
      ? "var(--color-text-inverted)"
      : props.type === "image"
      ? "none"
      : "none"};
  height: 42px;
  border-radius: 21px;
  width: ${(props) => props.width};
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: var(--shadow);

  .image {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
  }

  p {
    margin: 0;
    font-size: var(--font-size-small);
    color: ${(props) =>
      props.type === "primary"
        ? "var(--color-text-inverted)"
        : props.type === "inverte"
        ? "var(--color-primary-base)"
        : props.type === "image"
        ? "none"
        : "none"};
  }

  &:hover {
    background-color: ${(props) =>
      props.type === "primary"
        ? "var(--color-text-inverted)"
        : props.type === "inverte"
        ? "var(--color-primary-base)"
        : props.type === "image"
        ? "none"
        : "none"};

    p {
      font-size: var(--font-size-base);
      color: ${(props) =>
        props.type === "primary"
          ? "var(--color-primary-base)"
          : props.type === "inverte"
          ? "var(--color-text-inverted)"
          : props.type === "image"
          ? "none"
          : "none"};
    }
  }
`;
