import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './TabRoutes';
import ChangePointsRoutes from './ChangePointsRoutes';
import Onboarding from '../pages/Onboarding';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabRoutes" component={TabRoutes} />
        <Screen name="ChangePointsRoutes" component={ChangePointsRoutes} />
        <Screen name="Onboarding" component={Onboarding} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;