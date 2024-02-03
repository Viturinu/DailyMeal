import React from "react"
import { ContainerCards, BodySegment, BodyStatistics, Container, TitleText, TitleTextView } from "./style"
import { HeaderHome } from "@components/HeaderHome"
import { PercentageCard } from "@components/PercentageCard"

export function Statistics() {
    return (
        <Container>
            <HeaderHome mensagem="das refeições dentro da dieta" percentage="33,36%" headerTypeFlag="GREEN" />
            <BodyStatistics>
                <TitleTextView>
                    <TitleText>Estatísticas gerais</TitleText>
                </TitleTextView>

                <ContainerCards>
                    <BodySegment>
                        <PercentageCard CardType="GRAY" number="22" mensagem="melhor sequência de pratos dentro da dieta" ButtonOn={false} sizeNumber={24} />
                    </BodySegment>
                    <BodySegment>
                        <PercentageCard CardType="GRAY" number="109" mensagem="refeições registradas" ButtonOn={false} sizeNumber={24} />
                    </BodySegment>
                    <BodySegment>
                        <PercentageCard CardType="GREEN" number="99" mensagem="refeições dentro da dieta" ButtonOn={false} sizeNumber={24} SizeTypeCard="SHORT" />
                        <PercentageCard CardType="RED" number="109" mensagem="refeições fora da dieta" ButtonOn={false} sizeNumber={24} SizeTypeCard="SHORT" />
                    </BodySegment>
                </ContainerCards>
            </BodyStatistics>

        </Container>
    )
}