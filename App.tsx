import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import React from 'react';
import { Home } from '@screens/Home';
import { Nunito_400Regular, Nunito_700Bold, useFonts } from "@expo-google-fonts/nunito"
import { Loading } from '@components/Loading';
import { Statistics } from '@screens/Statistics';


export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}