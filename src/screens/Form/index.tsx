import React, { useState } from "react"
import { Container, DateInputView, DatePressable, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { Header } from "@components/Header"
import { TitleText } from "@screens/Form/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import DateTimePicker from '@react-native-community/datetimepicker'

export function Form() {

    const [dietIn, setDietIn] = useState<boolean>(true);

    const [dietDate, setDietDate] = useState<string>(""); //variavel para mostrar no TextInput
    const [dietTime, setDietTime] = useState<string>(""); //variavel para mostrar no TextInput

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");

    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setDate(selectedDate)
        setShow(false);
    }

    const showMode = (currentShow) => {
        setShow(true);
        setMode(currentShow);
    }

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const navigation = useNavigation();

    function handleCreateNewMeal() {
        navigation.navigate("outcome");
    }

    return (
        <Container>
            <Header title="Nova refeição" headerTypeFlag="GRAY" />
            <FormContainer>
                <FormView>
                    <NomeInputView>
                        <TitleText> Nome</TitleText>
                        <Input />
                    </NomeInputView>
                    <DescriptionInputView>
                        <TitleText> Descrição</TitleText>
                        <Input />
                    </DescriptionInputView>
                    <DateTimeInputView>
                        <DateInputView>
                            <TitleText> Date</TitleText>
                            <DatePressable onPress={() => showDatepicker()}>
                                <Input
                                    value={dietDate}
                                    onChangeText={setDietDate}
                                    editable={false}
                                />
                            </DatePressable>
                            {
                                show && (
                                    <DateTimePicker
                                        mode={mode}
                                        display="spinner"
                                        value={date}
                                        onChange={onChange}
                                    />
                                )
                            }
                        </DateInputView>
                        <TimeInputView>
                            <TitleText> Time</TitleText>
                            <DatePressable onPress={() => showTimepicker()}>
                                <Input
                                    value={dietTime}
                                    onChangeText={setDietTime}
                                    editable={false}
                                />
                            </DatePressable>
                            {
                                show && (
                                    <DateTimePicker
                                        mode={mode}
                                        display="clock"
                                        value={date}
                                        onChange={onChange}
                                    />
                                )
                            }
                        </TimeInputView>
                    </DateTimeInputView>
                    <DietInView>
                        <TitleText>Está dentro da dieta?</TitleText>
                        <DietInOptionsView>
                            <DietInOptionSim>
                                <ButtonOption tipo="SIM" isActive={dietIn} onPress={() => dietIn ? null : setDietIn(true)} />
                            </DietInOptionSim>
                            <DietInOptionNao>
                                <ButtonOption tipo="NAO" isActive={!dietIn} onPress={() => dietIn ? setDietIn(false) : null} />
                            </DietInOptionNao>
                        </DietInOptionsView>
                    </DietInView>
                </FormView>
                <Button mensagem="Cadastrar refeição" buttonColor="BLACK" whatToDo={handleCreateNewMeal} iconActive={false} />
            </FormContainer>
        </Container>
    )
}