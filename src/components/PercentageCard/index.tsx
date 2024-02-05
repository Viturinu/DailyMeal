import React from "react";
import { CardView, IconItem, IconView, PercentageCardType, PercentageDisplay, TextMessage, TextPercentage, TextPercentageView, SizeTypeDefinition } from "./style";
import { useNavigation } from "@react-navigation/native";

type Props = {
    CardType: PercentageCardType;
    SizeTypeCard?: SizeTypeDefinition;
    ButtonOn?: boolean;
    number: string;
    mensagem: string;
    sizeNumber: number;
}

export function PercentageCard({ CardType, number, mensagem, ButtonOn = false, sizeNumber, SizeTypeCard = "LARGE" }: Props) {

    const navigation = useNavigation();

    function handleMaximize() {
    }

    return (
        <>
            <PercentageDisplay viewType={CardType} sizeType={SizeTypeCard}>
                <IconView onPress={handleMaximize}>
                    {
                        ButtonOn &&
                        <IconItem viewType={CardType} />

                    }
                </IconView>

                <TextPercentage numberSizeDef={sizeNumber} >{number}</TextPercentage>
                <CardView>
                    <TextMessage>{mensagem}</TextMessage>
                </CardView>

            </PercentageDisplay >
        </>
    )
}