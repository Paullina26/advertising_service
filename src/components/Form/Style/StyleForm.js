import styled from 'styled-components';
import { device } from 'styles/theme.styles';

export const LabelStyle = styled.label`
  text-align: center;
  font-size: 1.6rem;
`;

export const InputStyle = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 15px;
  border: 0px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 100%;
  height: 35px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.BackgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.Border};
`;

export const SelectStyle = styled.select`
  display: block;
  border-radius: 5px;
  font-size: 15px;
  border: 0px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 100%;
  height: 35px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.BackgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.Border};
`;

//----Registration/Login----//
export const WrapperRegistrationAndLogin = styled.div`
  width: 90vw;
  max-width: 400px;
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.BackgroundForm};
  border-radius: 10px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.BorderShadow};
`;

export const FormTittle = styled.div`
  margin: 10px;
  p {
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const TextAreaStyled = styled.textarea`
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundInput};
  border: 1px solid ${({ theme }) => theme.colors.Border};
`;

//-----Submit-----//

export const SubmitStyle = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 20px;
  border: 0px;
  margin: 20px auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.FontLight};
  background-color: ${({ theme }) => theme.colors.BackgroundSubmit};
  box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.BorderShadow};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.FontSubmitHover};
    background-color: ${({ theme }) => theme.colors.FontLight};
    box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.BorderShadowLight};
  }
`;
