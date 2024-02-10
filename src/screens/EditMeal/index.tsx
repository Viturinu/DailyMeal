import React, { useState } from "react"
import { Container, DateInputView, DatePressable, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { Header } from "@components/Header"
import { TitleText } from "@screens/AddMeal/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"
import { useNavigation, useRoute } from "@react-navigation/native"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Alert } from "react-native"
import { editByDescriptionAndDate } from "@storage/mealItem/editByDescriptionAndDate"

interface RouteParams {
    nameRoute: string;
    descriptionRoute: string;
    dietDateRoute: string;
    dietTimeRoute: string;
    dietInRoute: boolean;
}

export function EditMeal() {

    const route = useRoute();
    const navigation = useNavigation();

    const { nameRoute } = route.params as RouteParams;
    const { descriptionRoute } = route.params as RouteParams;
    const { dietDateRoute } = route.params as RouteParams;
    const { dietTimeRoute } = route.params as RouteParams;
    const { dietInRoute } = route.params as RouteParams;

    const [dietIn, setDietIn] = useState<boolean>(dietInRoute); //definição se está ou não setado
    const [name, setName] = useState(nameRoute);
    const [description, setDescription] = useState(descriptionRoute);
    const [date, setDate] = useState(new Date()); //data com hora e calendário

    const [clickDate, setClickDate] = useState(false); //status para forçar usuário a escolher a data
    const [clickTime, setClickTime] = useState(false); //status para forçar usuário a escolher a hora


    const [isLoading, setIsLoading] = useState(false);


    const [dietDate, setDietDate] = useState<string>(dietDateRoute); //apenas para display no TextInput
    const [dietTime, setDietTime] = useState<string>(dietTimeRoute); //apenas para display no TextInput

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setDietDate(format(selectedDate, 'dd/MM/yyyy'));
        setDietTime(format(selectedDate, 'HH:mm'));
    }

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    async function handleEditMeal() {
        try {
            setIsLoading(true);
            await editByDescriptionAndDate(dietDateRoute, descriptionRoute, dietTimeRoute, name, description, date, dietIn);
            navigation.navigate("home");
        } catch (error) {
            console.log(error);
        } //nao vou colocar finally pra evitar erros de estados por já ter saido da screen
    }

    return (
        <Container>
            <Header title="Nova refeição" headerTypeFlag="GRAY" />
            <FormContainer>
                <FormView>
                    <NomeInputView>
                        <TitleText> Nome</TitleText>
                        <Input
                            value={name}
                            onChangeText={setName} />
                    </NomeInputView>
                    <DescriptionInputView>
                        <TitleText> Descrição</TitleText>
                        <Input
                            value={description}
                            onChangeText={setDescription}
                            textAlignVertical="top"
                        />
                    </DescriptionInputView>
                    <DateTimeInputView>
                        <DateInputView>
                            <TitleText> Date</TitleText>
                            <DatePressable onPress={() => {
                                setClickDate(true);
                                showMode("date");
                            }}>
                                <Input
                                    value={dietDate}
                                    editable={false}
                                />
                            </DatePressable>
                        </DateInputView>
                        <TimeInputView>
                            <TitleText> Time</TitleText>
                            <DatePressable onPress={() => {
                                setClickTime(true);
                                showMode("time")
                            }}>
                                <Input
                                    value={dietTime}
                                    editable={false}
                                />
                            </DatePressable>
                        </TimeInputView>
                    </DateTimeInputView>
                    <DietInView>
                        <TitleText>Está dentro da dieta?</TitleText>
                        <DietInOptionsView>
                            <DietInOptionSim>
                                <ButtonOption tipo="SIM" isActive={dietIn} onPress={() => !dietIn && setDietIn(true)} />
                            </DietInOptionSim>
                            <DietInOptionNao>
                                <ButtonOption tipo="NAO" isActive={!dietIn} onPress={() => dietIn && setDietIn(false)} />
                            </DietInOptionNao>
                        </DietInOptionsView>
                    </DietInView>
                </FormView>
                <Button mensagem="Cadastrar refeição" buttonColor="BLACK" whatToDo={handleEditMeal} iconActive={false} disabled={isLoading} />
            </FormContainer>
        </Container>
    )
}
