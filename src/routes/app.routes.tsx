import React from "react"
import { Home } from "@screens/Home";
import { Form } from "@screens/Form";
import { MealDetails } from "@screens/MealDetails";
import { Outcome } from "@screens/Outcome";
import { Statistics } from "@screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="form"
                component={Form}
            />

            <Screen
                name="meal"
                component={MealDetails}
            />

            <Screen
                name="outcome"
                component={Outcome}
            />
            <Screen
                name="statistics"
                component={Statistics}
            />
        </Navigator>
    )
}