import React from "react"
import { Container, MealContainerContent, MealContainerView, MealStatusView, MealTextDescription, MealTextTitle, MealTextView, TimeTextDetails, TimeTextTitle, TimeTextView } from "./style"
import { Header } from "@components/Header"
import { MealStatus } from "@components/MealStatus"
import { Button } from "@components/Button"
import { PencilSimpleLine, Trash } from "phosphor-react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { removeMealByDescriptionAndDate } from "@storage/mealItem/removeMeal"

interface RouteParams {
    dietIn: boolean;
    title: string;
    description: string;
    date: string;
    time: string;
}

export function MealDetails() {

    const route = useRoute();
    const navigation = useNavigation();

    const { dietIn } = route.params as RouteParams;
    const { title } = route.params as RouteParams;
    const { description } = route.params as RouteParams;
    const { date } = route.params as RouteParams;
    const { time } = route.params as RouteParams;

    async function handleEdit() {
        navigation.navigate("editMeal", {
            nameRoute: title,
            descriptionRoute: description,
            dietDateRoute: date,
            dietTimeRoute: time,
            dietInRoute: dietIn
        })
    }

    async function handleRemove() {
        await removeMealByDescriptionAndDate(date, description, time);
        navigation.goBack();
    }

    return (
        <Container>
            {
                dietIn ? <Header title="Refeição" headerTypeFlag="GREEN" />
                    : <Header title="Refeição" headerTypeFlag="RED" />
            }

            <MealContainerView>
                <MealContainerContent>
                    <MealTextView>
                        <MealTextTitle>{title}</MealTextTitle>
                        <MealTextDescription>{description}</MealTextDescription>
                    </MealTextView>

                    <TimeTextView>
                        <TimeTextTitle> Data e hora</TimeTextTitle>
                        <TimeTextDetails>{time}</TimeTextDetails>
                    </TimeTextView>
                    <MealStatusView>
                        {
                            dietIn ? <MealStatus ballColor="GREEN" />
                                : <MealStatus ballColor="RED" />
                        }

                    </MealStatusView>
                </MealContainerContent>
                <Button buttonColor="BLACK" mensagem="Editar refeição" iconActive={true} Icone={PencilSimpleLine} whatToDo={() => handleEdit()} />
                <Button buttonColor="WHITE" mensagem="Excluir refeição" iconActive={true} Icone={Trash} whatToDo={() => handleRemove()} />
            </MealContainerView>
        </Container>
    )
}