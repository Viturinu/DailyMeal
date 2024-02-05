import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import React from 'react';
import { Nunito_400Regular, Nunito_700Bold, useFonts } from "@expo-google-fonts/nunito"
import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';



export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}