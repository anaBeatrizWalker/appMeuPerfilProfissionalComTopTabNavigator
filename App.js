import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Perfil from './src/components/Perfil/index';
import Formacao from './src/components/Formacao/index';
import Experiencia from './src/components/Experiencia/index';

const Tab = createMaterialTopTabNavigator();

const icons = {
  Perfil: {
    name: 'person'
  },
  Formacao: {
    name: 'school'
  },
  Experiencia: {
    name: 'code-slash'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
        tabBarIcon: ({ color }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={20} />
        }
        }) }
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Perfil' component={Perfil}/>
        <Tab.Screen name='Formacao' component={Formacao}/>
        <Tab.Screen name='Experiencia' component={Experiencia}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}