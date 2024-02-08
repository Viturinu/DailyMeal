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
import { addMealByDate } from "@storage/mealItem/addMealByDate"
import { Alert } from "react-native"

export function Form() {

    const [dietIn, setDietIn] = useState<boolean>(true); //definição se está ou não setado
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date()); //data com hora e calendário

    const [clickDate, setClickDate] = useState(false); //status para forçar usuário a escolher a data
    const [clickTime, setClickTime] = useState(false); //status para forçar usuário a escolher a hora


    const [isLoading, setIsLoading] = useState(false);


    const [dietDate, setDietDate] = useState<string>(""); //apenas para display no TextInput
    const [dietTime, setDietTime] = useState<string>(""); //apenas para display no TextInput

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

    function handleCreateNewMeal() {
        try {
            setIsLoading(true);
            if (name.trim() === "") {
                Alert.alert("Nome", "Favor digitar o nome da refeição");
                setIsLoading(false);
                return
            }
            if (description.trim() === "") {
                Alert.alert("Descrição", "Favor digitar a descrição da refeição");
                setIsLoading(false);
                return
            }
            if (!clickDate) {
                Alert.alert("Data", "Favor inserir a data da refeição");
                setIsLoading(false);
                return
            }
            if (!clickTime) {
                Alert.alert("Horário", "Favor inserir o horário da refeição");
                setIsLoading(false);
                return
            }
            addMealByDate({ name, description, date, dietIn });
            navigation.navigate("outcome", { type: true });
        } catch (error) {
            console.log(error);
            navigation.navigate("outcome", { type: false });
        } //nao vou colocar finally pra evitar erros de estados por já ter saido da screen
    }

    const navigation = useNavigation();

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
                                <ButtonOption tipo="SIM" isActive={dietIn} onPress={() => dietIn ? setDietIn(false) : setDietIn(true)} />
                            </DietInOptionSim>
                            <DietInOptionNao>
                                <ButtonOption tipo="NAO" isActive={!dietIn} onPress={() => dietIn ? setDietIn(false) : setDietIn(true)} />
                            </DietInOptionNao>
                        </DietInOptionsView>
                    </DietInView>
                </FormView>
                <Button mensagem="Cadastrar refeição" buttonColor="BLACK" whatToDo={handleCreateNewMeal} iconActive={false} disabled={isLoading} />
            </FormContainer>
        </Container>
    )
}
