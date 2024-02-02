import React from "react"
import { Container, DateInputView, DateTimeInputView, DescriptionInputView, DietInOptionNao, DietInOptionSim, DietInOptionsView, DietInView, FormContainer, FormView, NomeInputView, TimeInputView } from "./style"
import { HeaderForm } from "@components/HeaderForm"
import { TitleText } from "@screens/Form/style"
import { Input } from "@components/Input"
import { ButtonOption } from "@components/ButtonOption"
import { Button } from "@components/Button"

export function Form() {
    return (
        <Container>
            <HeaderForm title="das refeições dentro da dieta" percentage="33,36%" headerTypeFlag="GRAY" />
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
                                <ButtonOption tipo="SIM" />
                            </DietInOptionSim>
                            <DietInOptionNao>
                                <ButtonOption tipo="NAO" />
                            </DietInOptionNao>
                        </DietInOptionsView>
                    </DietInView>
                </FormView>
            </FormContainer>
            <Button mensagem="Cadastrar refeição" />
        </Container>
    )
}