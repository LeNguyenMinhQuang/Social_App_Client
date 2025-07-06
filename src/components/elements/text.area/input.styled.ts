import styled from "styled-components";

interface IProps {
  width?: string;
  paddingleft?: string;
}

export const MyInput = styled.textarea<IProps>`
  position: relative;
  height: 42px;
  width: 100%;
  padding-block: 0.6rem 0.5rem;
  padding-right: 2rem;
  padding-left: ${(props) => props.paddingleft};
  border-radius: 21px;
  background-color: var(--color-surface-2);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.5;
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid var(--color-primary-base);
    height: 160px;

    & + .icon {
      background-color: var(--color-primary-base);
      color: var(--color-surface-1);
      transform: scale(1.25);
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div<IProps>`
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
  .icon-close {
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 4px;
    height: 34px;
    width: 34px;
    border-radius: 17px;
    background-color: var(--color-surface-1);
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-base);
      color: var(--color-surface-1);
      transform: scale(1.25);
    }
  }
`;
