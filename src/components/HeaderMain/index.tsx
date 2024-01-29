import React from "react";
import { Container, IconView, IconViewItem, Logo, LogosView, PercentageDisplay, Profile, TextMessage, TextMessageView, TextPercentage, TextPercentageView } from "./style";
import DailyDietImage from "@assets/dailyDiet.png";
import ProfileImage from "@assets/profile.png";

export function HeaderMain() {
    return (
        <Container>
            <LogosView>
                <Logo source={DailyDietImage} />
                <Profile source={ProfileImage} />
            </LogosView>

            <PercentageDisplay>

                <IconView>
                    <IconViewItem>.</IconViewItem>
                </IconView>

                <TextPercentageView>
                    <TextPercentage> 97%</TextPercentage>
                </TextPercentageView>

                <TextMessageView>
                    <TextMessage> Testando várias opcoes</TextMessage>
                </TextMessageView>

            </PercentageDisplay>

        </Container>
    )
}