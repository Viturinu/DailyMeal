import React from "react";
import { CardView, IconItem, IconView, PercentageCardType, PercentageDisplay, TextMessage, TextPercentage, TextPercentageView, SizeTypeDefinition } from "./style";

type Props = {
    CardType: PercentageCardType;
    SizeTypeCard?: SizeTypeDefinition;
    ButtonOn?: boolean;
    number: string;
    mensagem: string;
    sizeNumber: number;
}

export function PercentageCard({ CardType, number, mensagem, ButtonOn = false, sizeNumber, SizeTypeCard = "LARGE" }: Props) {
    return (
        <>
            <PercentageDisplay viewType={CardType} sizeType={SizeTypeCard}>
                <IconView>
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