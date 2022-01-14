import React, { useState } from 'react';
import { Text, View, FlatList, Image, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
import MovilScreen from './Container/MovilScreen';
import ArtistaStack from './navigation/ArtistaStack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
negrita: {fontWeight: 'bold'},
cursiva: {fontStyle: 'italic'},
subrayado: {textDecorationLine: 'underline'}
})

export default function App() {

  return(
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Historia') {
                iconName = focused ? 'link' : 'link-2';
              } else if (route.name === 'Músicos') {
                iconName = focused ? 'message-circle' : 'message-square';
              }
              
              return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveBackgroundColor: '#BEEA94',
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
          })}>
    <Tab.Screen name="Historia" component={MovilScreen} options={{
        headerTitle : 'Historia',
        headerTintColor : 'black',
        headerTitleAlign: 'center',
        alignItems: 'center',
        headerStyle : {
          backgroundColor : '#BEEA94',
        }
          
        }}/>
    <Tab.Screen name="Músicos" component={ArtistaStack} options={{headerShown : false}}/>
    </Tab.Navigator>
    </NavigationContainer>

  );

}