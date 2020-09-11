import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Product from '../pages/Product';
import BuyRoutes from './BuyRoutes';

const { Navigator, Screen } = createStackNavigator();

const ChangePointsRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Product" component={Product} />
      <Screen name="BuyRoutes" component={BuyRoutes} />
    </Navigator>
  );
}

export default ChangePointsRoutes;