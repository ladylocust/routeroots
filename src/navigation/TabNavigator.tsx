// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ParkingScreen from '../screens/ParkingScreen';
import LoadBoardScreen from '../screens/LoadBoardScreen';
import ComplianceScreen from '../screens/ComplianceScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Parking" component={ParkingScreen} />
      <Tab.Screen name="Load Board" component={LoadBoardScreen} />
      <Tab.Screen name="Compliance" component={ComplianceScreen} />
    </Tab.Navigator>
  );
}
