import React from "react";
import { CardView, IconItem, IconView, PercentageCardType, PercentageDisplay, TextMessage, TextPercentage, TextPercentageView } from "./style";

import { LargeButton } from "@components/LargeButton";

type Props = {
    PercentageType: PercentageCardType;
    percentage: string;
    mensagem: string;
}

export function PercentageCard({ PercentageType, percentage, mensagem }: Props) {
    return (
        <>
            <PercentageDisplay viewType={PercentageType}>

                <IconView>
                    <IconItem viewType={PercentageType} />
                </IconView>

                <TextPercentage>{percentage}</TextPercentage>
                <CardView>
                    <TextMessage>{mensagem}</TextMessage>
                </CardView>

            </PercentageDisplay>
        </>
    )
}