import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import BuyConfirm from '../pages/BuyConfirm';
import BuyConfirmed from '../pages/BuyConfirmed';
import InviteFriends from '../pages/InviteFriends';
import SendInvitation from '../pages/SendInvitation';

const { Navigator, Screen } = createStackNavigator();

const BuyRoutes = () => {
  return (
    <Navigator screenOptions={{ 
      headerShown: false, 
      // cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
    }}>
      <Screen name="BuyConfirm" component={BuyConfirm} />
      <Screen name="BuyConfirmed" component={BuyConfirmed} />
      <Screen name="InviteFriends" component={InviteFriends} />
      <Screen name="SendInvitation" component={SendInvitation} />
    </Navigator>
  );
}

export default BuyRoutes;