import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Product from '../pages/Product';

const { Navigator, Screen } = createStackNavigator();

const ChangePointsRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Product" component={Product} />
    </Navigator>
  );
}

export default ChangePointsRoutes;