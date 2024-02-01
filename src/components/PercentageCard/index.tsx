import React from "react";
import { CardView, IconItem, IconView, PercentageCardType, PercentageDisplay, TextMessage, TextPercentage, TextPercentageView } from "./style";

type Props = {
    CardType: PercentageCardType;
    ButtonOn?: boolean;
    number: string;
    mensagem: string;
    sizeNumber: number;
}

export function PercentageCard({ CardType, number, mensagem, ButtonOn = false, sizeNumber }: Props) {
    return (
        <>
            <PercentageDisplay viewType={CardType}>
                <IconView>
                    {
                        ButtonOn ?
                            <IconItem viewType={CardType} />
                            : null
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