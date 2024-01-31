import styled from "styled-components/native";

export type inDietType = "GREEN" | "RED";

export type Props = {
    Icon: inDietType;
}

export const Container = styled.View`
    width: 100%;
    height: 49px;
    padding: 12px;
    justify-content: space-between;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLOR.GRAY_400};
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TextView = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;
export const Time = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    margin-left: 6px;
`;

export const IconView = styled.View<Props>`
    background-color: ${({ theme, Icon }) => Icon === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID}; 
    border-radius: 8px;
    height: 14;
    width: 14;
`;

export const DateStamp = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;