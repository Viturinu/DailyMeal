import React from "react"
import { BodyCards, BodyStatistics, Container, TitleText, TitleTextView } from "./style"
import { HeaderNavigation } from "@components/HeaderNavigation"
import { PercentageCard } from "@components/PercentageCard"

export function Statistics() {
    return (
        <Container>
            <HeaderNavigation mensagem="das refeições dentro da dieta" percentage="33,36%" headerTypeFlag="GREEN" />
            <BodyStatistics>
                <TitleTextView>
                    <TitleText>Estatísticas gerais</TitleText>
                </TitleTextView>

                <BodyCards>
                    <PercentageCard CardType="GREEN" number="22" mensagem="melhor sequência de pratos dentro da dieta" ButtonOn={false} sizeNumber={24} />
                </BodyCards>
            </BodyStatistics>

        </Container>
    )
}