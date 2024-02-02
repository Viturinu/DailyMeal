import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
`;

export const FormView = styled.View`
    flex: 1;
    margin-top: 8px;
    border-color: black;
    border-width: 1px;
`;

export const NomeInputView = styled.View`
    margin-top: 14px;
    height: 65px;
`;

export const DescriptionInputView = styled.View`
    margin-top: 14px;
    height: 130px;
`;

export const DateTimeInputView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 14px;
    height: 65px;
`;

export const DateInputView = styled.View`
    flex: 1;
    padding-right: 8px;
`;

export const TimeInputView = styled.View`
   flex: 1;
   padding-left: 8px;
`;

export const DietInView = styled.View`
    margin-top: 14px;
    width: 100%;
    height: 65px;
`;

export const DietInOptionsView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const DietInOptionSim = styled.View`
    flex: 1;
    padding-right: 4px;
`;
export const DietInOptionNao = styled.View`
    flex: 1;
    padding-left: 4px;
`;

export const TitleText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px ;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLOR.GRAY_600};
        margin-bottom: 4px;
    `}
`;

