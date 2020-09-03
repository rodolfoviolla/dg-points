import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    'GT-Walsheim-Pro-Regular': require('./src/assets/fonts/GT-Walsheim-Pro-Regular.otf'),
    'GT-Walsheim-Pro-Bold': require('./src/assets/fonts/GT-Walsheim-Pro-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
        <StatusBar style="light" />
      </>
    );
  }
}
