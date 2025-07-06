import styled from "styled-components";

interface IProps {
  width?: string;
  paddingleft?: string;
}

export const MyInput = styled.input<IProps>`
  position: relative;
  height: 42px;
  width: 100%;
  padding-right: 1.5rem;
  padding-left: ${(props) => props.paddingleft};
  border-radius: 21px;
  background-color: var(--color-surface-2);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 1px solid var(--color-primary-base);

    & + .icon {
      background-color: var(--color-primary-base);
      color: var(--color-surface-1);
      transform: scale(1.25);
    }
  }
`;

export const Wrapper = styled.div<IProps>`
  height: 42px;
  width: ${(props) => props.width};
  position: relative;
  .icon {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    height: 34px;
    width: 34px;
    border-radius: 17px;
    background-color: var(--color-surface-1);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
