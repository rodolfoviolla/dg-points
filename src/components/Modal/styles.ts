import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  
  height: 542px;
  width: 100%;

  padding: 0 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;

  align-items: center;
  justify-content: center;
`;