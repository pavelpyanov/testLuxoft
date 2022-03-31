import styled from "styled-components";

interface IModal {
  open: boolean;
}

export const OverLay = styled.div<IModal>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.7;
`;

export const Modal = styled.div<IModal>`
  display: ${(props) => (props.open ? "flex" : "none !important")};
  display: flex;
  width: 500px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 2;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
`;

export const Close = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const Item = styled.div`
  margin: 10px 0;
  font-size: 25px;
`;
