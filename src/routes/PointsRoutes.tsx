import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Points from '../pages/Points';
import Products from '../pages/Products';

const { Navigator, Screen } = createStackNavigator();

const PointsRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Points" component={Points} />
      <Screen name="Products" component={Products} />
    </Navigator>
  );
}

export default PointsRoutes;