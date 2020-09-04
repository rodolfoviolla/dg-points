import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import Routes from './src/routes';

export default function App() {
  const [isLoaded] = useFonts({
    'GT-Walsheim-Pro-Regular': require('./assets/fonts/GT-Walsheim-Pro-Regular.otf'),
    'GT-Walsheim-Pro-Medium': require('./assets/fonts/GT-Walsheim-Pro-Medium.otf'),
    'GT-Walsheim-Pro-Bold': require('./assets/fonts/GT-Walsheim-Pro-Bold.otf'),
  });

  if (!isLoaded) {
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
