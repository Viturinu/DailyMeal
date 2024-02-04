import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native"
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export function Routes() {

    const { COLOR } = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.GRAY_100 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}