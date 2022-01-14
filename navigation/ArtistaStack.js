import React, { useState } from 'react';
import { Text, View, FlatList, Image, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
import ListadoScreen from '../Container/ListadoScreen';
import DetallesScreen from '../Container/DetallesScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
negrita: {fontWeight: 'bold'},
cursiva: {fontStyle: 'italic'},
subrayado: {textDecorationLine: 'underline'}
})

export default function ArtistaStack() {

return (
    <Stack.Navigator>      
    <Stack.Screen name="Listado de artistas" component={ListadoScreen} options={{
        headerTitleAlign: 'center',
        headerTintColor : 'black',
        headerStyle : {
        backgroundColor : '#BEEA94',
        }
        
        }}/>
    <Stack.Screen name="Detalles de artista" component={DetallesScreen} options={{
        headerTitleAlign: 'center',
        headerTintColor : 'black',
        headerStyle: {
        backgroundColor : '#BEEA94',
        }
        
        }}/>
    </Stack.Navigator>
);
}