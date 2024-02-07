import React from "react"
import { Container, MealContainerContent, MealContainerView, MealStatusView, MealTextDescription, MealTextTitle, MealTextView, TimeTextDetails, TimeTextTitle, TimeTextView } from "./style"
import { Header } from "@components/Header"
import { MealStatus } from "@components/MealStatus"
import { Button } from "@components/Button"
import { PencilSimpleLine, Trash } from "phosphor-react-native"
import { useRoute } from "@react-navigation/native"

interface RouteParams {
    dietIn: boolean;
    Title: string;
    Description: string;
    Time: string;
}

export function MealDetails() {

    const route = useRoute();

    const { dietIn } = route.params as RouteParams;
    const { Title } = route.params as RouteParams;
    const { Description } = route.params as RouteParams;
    const { Time } = route.params as RouteParams;

    return (
        <Container>
            {
                dietIn ? <Header title="Refeição" headerTypeFlag="GREEN" />
                    : <Header title="Refeição" headerTypeFlag="RED" />
            }

            <MealContainerView>
                <MealContainerContent>
                    <MealTextView>
                        <MealTextTitle>{Title}</MealTextTitle>
                        <MealTextDescription>{Description}</MealTextDescription>
                    </MealTextView>

                    <TimeTextView>
                        <TimeTextTitle> Data e hora</TimeTextTitle>
                        <TimeTextDetails>{Time}</TimeTextDetails>
                    </TimeTextView>
                    <MealStatusView>
                        {
                            dietIn ? <MealStatus ballColor="GREEN" />
                                : <MealStatus ballColor="RED" />
                        }

                    </MealStatusView>
                </MealContainerContent>
                <Button buttonColor="BLACK" mensagem="Editar refeição" iconActive={true} Icone={PencilSimpleLine} whatToDo={() => null} />
                <Button buttonColor="WHITE" mensagem="Excluir refeição" iconActive={true} Icone={Trash} whatToDo={() => null} />
            </MealContainerView>
        </Container>
    )
}