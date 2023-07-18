import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBoxForm = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondaryBg};
  display: flex;
  flex-direction: column;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const StyledBoxFormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const StyledBoxLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledTextError = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.error};
`;
export const StyledInput = styled.input`
  padding: 5px;
`;
export const StyledBoxBtns = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 20px;
`;
export const StyledBtnSubmit = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.confirm};
  color: ${({ theme }) => theme.secondary};
`;
export const StyledBtnCancel = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cancel};
  color: ${({ theme }) => theme.secondary};
`;
export const StyledSelect = styled.select`
  padding: 5px;
  border: none;
`;

export const StyledTextRedirect = styled.p`
  margin: 10px 0;
  display: flex;
  gap: 8px;
`;
export const StyledLinkRedirect = styled(Link)`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledTextErrorResponse = styled.p`
  color: ${({ theme }) => theme.error};
  font-size: 18px;
  height: 20px;
`;
