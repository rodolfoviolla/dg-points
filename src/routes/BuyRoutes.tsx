import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BuyConfirm from '../pages/BuyConfirm';
import BuyConfirmed from '../pages/BuyConfirmed';

const { Navigator, Screen } = createStackNavigator();

const BuyRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="BuyConfirm" component={BuyConfirm} />
      <Screen name="BuyConfirmed" component={BuyConfirmed} />
    </Navigator>
  );
}

export default BuyRoutes;