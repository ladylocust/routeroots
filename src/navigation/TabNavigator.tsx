import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // 👈 icons library
import HomeScreen from '../screens/HomeScreen';
import ParkingScreen from '../screens/ParkingScreen';
import LoadBoardScreen from '../screens/LoadBoardScreen';
import ComplianceScreen from '../screens/ComplianceScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Parking') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Load Board') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Compliance') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0077cc',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Parking" component={ParkingScreen} />
      <Tab.Screen name="Load Board" component={LoadBoardScreen} />
      <Tab.Screen name="Compliance" component={ComplianceScreen} />
    </Tab.Navigator>
  );
}
// src/navigation/TabNavigator.tsx
