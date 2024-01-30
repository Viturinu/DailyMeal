import React from "react";
import { Logo, Container, Profile } from "./style";
import DailyDietImage from "@assets/dailyDiet.png";
import ProfileImage from "@assets/profile.png";

export function Logos() {
    return (
        <Container>
            <Logo source={DailyDietImage} />
            <Profile source={ProfileImage} />
        </Container>
    )
}