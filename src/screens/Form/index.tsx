import React, { useState } from "react"
import { Container, DateInputView, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { Header } from "@components/Header"
import { TitleText } from "@screens/Form/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"

export function Form() {

    const [dietIn, setDietIn] = useState<boolean>(true)

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
                            <TitleText> Descrição</TitleText>
                            <Input />
                        </DateInputView>
                        <TimeInputView>
                            <TitleText> Descrição</TitleText>
                            <Input />
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