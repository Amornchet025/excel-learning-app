import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import FormulaScreen from './screens/FormulaScreen';
import ShortcutScreen from './screens/ShortcutScreen';
import DetailScreen from './screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Formulas') {
            iconName = 'calculator-outline';
          } else if (route.name === 'Shortcuts') {
            iconName = 'key-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0D7A3E',
        tabBarInactiveTintColor: '#9CA3AF',
        headerStyle: { backgroundColor: '#0D7A3E' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'หน้าแรก', title: 'การใช้งาน Excel เบื้องต้น' }}
      />
      <Tab.Screen
        name="Formulas"
        component={FormulaScreen}
        options={{ tabBarLabel: 'สูตรคำนวณ', title: 'สูตรและฟังก์ชันพื้นฐาน' }}
      />
      <Tab.Screen
        name="Shortcuts"
        component={ShortcutScreen}
        options={{ tabBarLabel: 'คีย์ลัด', title: 'คีย์ลัดที่ใช้บ่อย' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'รายละเอียดบทเรียน',
            headerStyle: { backgroundColor: '#0D7A3E' },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}