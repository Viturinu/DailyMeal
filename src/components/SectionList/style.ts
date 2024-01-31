import styled from "styled-components/native";

type IconType = "GREEN" | "RED";

type Props = {
    Icon: IconType;
}

export const Container = styled.View`
    width: 100%;
    height: 49px;
    padding: 4px;
    justify-content: space-between;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLOR.GRAY_400};
`;

export const TextView = styled.View`
    flex: 1;
`;
export const Date = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const IconView = styled.View<Props>`
    background-color: ${({ theme, Icon }) => Icon === "GREEN" ? theme.COLOR.COLOR.GREEN_MID : theme.COLOR.COLOR.RED_MID}; 
    border-radius: 100%;
    height: 14;
    width: 14;
`;