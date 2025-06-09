import styled from "styled-components";

const Wrapper = styled.div`
  .input {
    border: none !important;

    &::-webkit-scrollbar {
      display: none;
    }

    &::placeholder {
      font-size: 16px;
    }

    &:focus {
      box-shadow: none !important;
      font-size: 16px;
      color: var(--text-1);
    }
  }

  .btns {
    transition: 0.2s ease-in-out;

    .btnlabel {
      margin-top: 1px;
    }

    .locationInput {
      width: 100px !important;
    }
  }

  .upload {
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      border: 1px solid var(--text-active);
      color: var(--text-active);
    }
  }
  .uploadImage {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid var(--text-border);
    border-radius: 8px;
    overflow: hidden;
    transition: 0.2s ease-in-out;

    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1;
      cursor: pointer;
      .close-icon {
        color: white;
        font-size: 40px;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
      }
    }

    &:hover .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Wrapper;
