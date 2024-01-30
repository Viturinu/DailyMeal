import React from "react";
import { IconItem, IconView, PercentageCardType, PercentageDisplay, TextMessage, TextPercentage, TextPercentageView } from "./style";

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

                <TextPercentageView>
                    <TextPercentage>{percentage}</TextPercentage>

                    <TextMessage>{mensagem}</TextMessage>
                </TextPercentageView>

            </PercentageDisplay>

            <LargeButton />
        </>
    )
}