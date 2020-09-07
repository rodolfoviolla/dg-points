import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Points from '../pages/Points';
import SearchProducts from '../pages/SearchProducts';

const { Navigator, Screen } = createStackNavigator();

const PointsRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Points" component={Points} />
      <Screen name="SearchProducts" component={SearchProducts} />
    </Navigator>
  );
}

export default PointsRoutes;