import React, { useEffect, useState } from "react"
import { ContainerCards, BodySegment, BodyStatistics, Container, TitleText, TitleTextView } from "./style"
import { HeaderHome } from "@components/HeaderHome"
import { PercentageCard } from "@components/PercentageCard"
import { dietOnPercentage, statisticObject } from "@storage/mealItem/dietOnPercentage";

export function Statistics() {

    const [objectStatistics, setObjectStatistics] = useState<statisticObject>({
        mealInDiet: 0,
        mealOutDiet: 0,
        mealRegistered: 0,
        mealSequence: 0
    });

    async function handleNumbersToStatistics() {
        const object = await dietOnPercentage();
        setObjectStatistics(object);
    }

    useEffect(() => {
        handleNumbersToStatistics();
    }, []);

    return (
        <Container>
            <HeaderHome mensagem="das refeições dentro da dieta" percentage="33,36%" headerTypeFlag="GREEN" />
            <BodyStatistics>
                <TitleTextView>
                    <TitleText>Estatísticas gerais</TitleText>
                </TitleTextView>

                <ContainerCards>
                    <BodySegment>
                        <PercentageCard CardType="GRAY" number={String(objectStatistics.mealSequence)} mensagem="melhor sequência de pratos dentro da dieta" ButtonOn={false} sizeNumber={24} />
                    </BodySegment>
                    <BodySegment>
                        <PercentageCard CardType="GRAY" number={String(objectStatistics.mealRegistered)} mensagem="refeições registradas" ButtonOn={false} sizeNumber={24} />
                    </BodySegment>
                    <BodySegment>
                        <PercentageCard CardType="GREEN" number={String(objectStatistics.mealInDiet)} mensagem="refeições dentro da dieta" ButtonOn={false} sizeNumber={24} SizeTypeCard="SHORT" />
                        <PercentageCard CardType="RED" number={String(objectStatistics.mealOutDiet)} mensagem="refeições fora da dieta" ButtonOn={false} sizeNumber={24} SizeTypeCard="SHORT" />
                    </BodySegment>
                </ContainerCards>
            </BodyStatistics>

        </Container>
    )
}