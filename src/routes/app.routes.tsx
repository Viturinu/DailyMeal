import React from "react"
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { Outcome } from "@screens/Outcome";
import { Statistics } from "@screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AddMeal } from "@screens/AddMeal";
import { EditMeal } from "@screens/EditMeal";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                animation: "fade_from_bottom",
            }}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="addMeal"
                component={AddMeal}
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

            <Screen
                name="editMeal"
                component={EditMeal}
            />
        </Navigator>
    )
}