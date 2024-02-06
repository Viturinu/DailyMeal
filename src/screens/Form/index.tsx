import React, { useState } from "react"
import { Container, DateInputView, DatePressable, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { Header } from "@components/Header"
import { TitleText } from "@screens/Form/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, Pressable } from "react-native"

export function Form() {

    const [dietIn, setDietIn] = useState<boolean>(true);

    const [dietDate, setDietDate] = useState<string>("");
    const [dietTime, setDietTime] = useState<string>("");

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [showPickerDate, setShowPickerDate] = useState(false);
    const [showPickerTime, setShowPickerTime] = useState(false);

    const navigation = useNavigation();

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowPickerDate(false)
        setDate(currentDate);
        setDietDate(date.toDateString());
    }

    const onChangeTime = (event, selectedTime) => {
        const currentDate = selectedTime;
        setShowPickerTime(false);
        setTime(currentDate);
        setDietTime(date.toTimeString());
    }

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
                            <DatePressable onPress={() => setShowPickerDate(true)}>
                                <Input
                                    value={dietDate}
                                    onChangeText={setDietDate}
                                    editable={false}
                                />
                            </DatePressable>
                            {
                                showPickerDate && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={date}
                                        onChange={onChangeDate}
                                    />
                                )
                            }
                        </DateInputView>
                        <TimeInputView>
                            <TitleText> Time</TitleText>
                            <DatePressable onPress={() => setShowPickerTime(true)}>
                                <Input
                                    value={dietTime}
                                    onChangeText={setDietTime}
                                    editable={false}
                                />
                            </DatePressable>
                            {
                                showPickerTime && (
                                    <DateTimePicker
                                        mode="time"
                                        display="clock"
                                        value={time}
                                        onChange={onChangeTime}
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