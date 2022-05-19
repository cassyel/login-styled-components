import styled from 'styled-components';

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 347px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  line-height: 80px;
`;

export const Slogan = styled(Title)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const ContainerInputs = styled(ContainerFlex)`
  flex-direction: column;
  height: 122px;
  margin-top: 36px;
  width: 347px;
`;

export const DataInput = styled.input`
  background-color: #224957;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  height: 45px;
  width: 300px;
  ::placeholder {
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 10px;
  }
`;

export const ContainerOptions = styled(ContainerFlex)`
  justify-content: space-between;
  margin-top: 23px;
  width: 300px;
`;

export const OptionsLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

export const OptionsInput = styled.input`
  border-radius: 5px;
  margin-right: 6px;
`;

export const OptionsLink = styled.a`
  color: #20df7f;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
`;
