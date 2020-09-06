import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import PointsRoutes from './PointsRoutes';

import SvgHouse from '../assets/icons/House.svg';
import SvgDiscountTag from '../assets/icons/Discount-Tag.svg';
import SvgBuy from '../assets/icons/Bag.svg';
import SvgPoints from '../assets/icons/Star.svg';
import SvgDots from '../assets/icons/More-Dots.svg';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 32,
          height: 32,
        },
        labelStyle: {
          fontFamily: 'GT-Walsheim-Pro-Regular',
          fontSize: 12,
          lineHeight: 16,
        },
        inactiveTintColor: '#181B25',
        activeTintColor: '#66000A',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => (
            <SvgHouse fill={focused ? '#66000a' : '#181B25'} />
          )
        }}
      />

      <Screen
        name="Discount"
        component={Home}
        options={{
          tabBarLabel: 'Ofertas',
          tabBarIcon: ({ focused }) => (
            <SvgDiscountTag fill={focused ? '#66000a' : '#181B25'} />
          )
        }}
      />

      <Screen
        name="Buy"
        component={Home}
        options={{
          tabBarLabel: 'Comprar',
          tabBarIcon: ({ focused }) => (
            <SvgBuy fill={focused ? '#66000a' : '#181B25'} />
          )
        }}
      />

      <Screen
        name="Points"
        component={PointsRoutes}
        options={{
          tabBarLabel: 'Pontos',
          tabBarIcon: ({ focused }) => (
            <SvgPoints fill={focused ? '#66000a' : '#181B25'} />
          )
        }}
      />

      <Screen
        name="More"
        component={Home}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ focused }) => (
            <SvgDots fill={focused ? '#66000a' : '#181B25'} />
          )
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;