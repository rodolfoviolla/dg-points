import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BuyConfirm from '../pages/BuyConfirm';
import BuyConfirmed from '../pages/BuyConfirmed';
import InviteFriends from '../pages/InviteFriends';

const { Navigator, Screen } = createStackNavigator();

const BuyRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="BuyConfirm" component={BuyConfirm} />
      <Screen name="BuyConfirmed" component={BuyConfirmed} />
      <Screen name="InviteFriends" component={InviteFriends} />
    </Navigator>
  );
}

export default BuyRoutes;