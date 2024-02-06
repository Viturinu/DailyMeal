import React, { useState } from "react"
import { Container, DateInputView, DatePressable, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { Header } from "@components/Header"
import { TitleText } from "@screens/Form/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

type tipoMode = "date" | "time";

export function Form() {

    const [dietIn, setDietIn] = useState<boolean>(true);

    const [dietDate, setDietDate] = useState<string>("");
    const [dietTime, setDietTime] = useState<string>("");

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        setDietDate(format(selectedDate, 'dd/MM/yyyy'));
        setDietTime(format(selectedDate, 'HH:mm'));
    }

    const showMode = (currentMode, tipo:tipoMode ) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };

      const showDatepicker = () => {
        showMode('date', "date");
      };
    
      const showTimepicker = () => {
        showMode('time', "time");
      };

    function handleCreateNewMeal() {
        navigation.navigate("outcome");
    }

    const navigation = useNavigation();

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
                            <DatePressable onPress={() => showMode("date", "date")}>
                                <Input
                                    value={dietDate}
                                    editable={false}
                                />
                            </DatePressable>
                        </DateInputView>
                        <TimeInputView>
                            <TitleText> Time</TitleText>
                            <DatePressable onPress={() => showMode("time", "time")}>
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
