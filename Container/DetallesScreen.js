import React, { useState } from 'react';
import { Text, View, FlatList, Image, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
negrita: {fontWeight: 'bold'},
cursiva: {fontStyle: 'italic'},
subrayado: {textDecorationLine: 'underline'}
})

const personas = [
{ id: 1, name: 'Antonio Romero', age: 32, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 2, name: 'Sara Durán', age: 35, género: 'Femenino', instrumento: 'Violín' },

{ id: 3, name: 'Angel Lima', age: 63, género: 'Masculino', instrumento: 'Guitarra' },

{ id: 4, name: 'Raul Coronado', age: 21, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 5, name: 'Isabel Sánchez', age: 45, género: 'Femenino', instrumento: 'Piano' },

{ id: 6, name: 'Josefa Navarro', age: 77, género: 'Femenino', instrumento: 'Violín' },

{ id: 7, name: 'Juan Pedrosa', age: 19, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 9, name: 'Ramon Rey', age: 50, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 10, name: 'Esther Barros', age: 33, género: 'Femenino', instrumento: 'Trompeta' },

{ id: 11, name: 'Ignacio Villalba', age: 56, género: 'Masculino', instrumento: 'Piano' },

{ id: 12, name: 'Roberto Soria', age: 42, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 13, name: 'Cristina Macia', age: 25, género: 'Femenino', instrumento: 'Guitarra' },

{ id: 14, name: 'Erica Escudero', age: 39, género: 'Femenino', instrumento: 'Guitarra' }, ]

export default function DetallesScreen({route}){
const {inst} = route.params;

function renderizar ({item}) {
    if (item.instrumento==inst) {
        if(inst=='Guitarra') {
            return(
            <View style={{flexDirection:'row',borderBottomColor:'blue',borderBottomWidth:2, marginBottom:10}}>
                <Image style={{width:100, height:100, marginRight: 50}} source={require('../assets/guitarra.jpg')} />
                <View style={{marginTop:20}}>
                <Text>{item.name}</Text>
                <Text>
                    <Text style={styles.negrita}>Edad: </Text>
                    <Text>{item.age}</Text>
                </Text>
                <Text style={{color:'orange'}}>{item.instrumento}</Text>
                </View>
            </View>
    
        )
        }
        if(inst=='Saxofón') {
            return(
            <View style={{flexDirection:'row',borderBottomColor:'blue',borderBottomWidth:2, marginBottom:10}}>
                <Image style={{width:100, height:100, marginRight: 50}} source={require('../assets/saxofon.jpg')} />
                <View style={{marginTop:20}}>
                <Text>{item.name}</Text>
                <Text>
                    <Text style={styles.negrita}>Edad: </Text>
                    <Text>{item.age}</Text>
                </Text>
                <Text style={{color:'orange'}}>{item.instrumento}</Text>
                </View>
            </View>    
            )
        }
        if(inst=='Violín') {
            return(
            <View style={{flexDirection:'row' ,borderBottomColor:'blue',borderBottomWidth:2, marginBottom:10}}>
                <Image style={{width:100, height:100, marginRight: 50}} source={require('../assets/violin.jpg')} />
                <View style={{marginTop:20}}>
                <Text>{item.name}</Text>
                <Text>
                    <Text style={styles.negrita}>Edad: </Text>
                    <Text>{item.age}</Text>
                </Text>
                <Text style={{color:'orange'}}>{item.instrumento}</Text>
                </View>
            </View>
            )
        }
        if(inst=='Trompeta') {
            return(
            <View style={{borderBottomColor:'blue',borderBottomWidth:2, marginBottom:20, flexDirection:'row'}}>
                <Image style={{width:100, height:100, marginRight: 50}} source={require('../assets/trompeta.jpg')} />
                <View style={{marginTop:20}}>
                <Text>{item.name}</Text>
                <Text>
                    <Text style={styles.negrita}>Edad: </Text>
                    <Text>{item.age}</Text>
                </Text>
                <Text style={{color:'orange'}}>{item.instrumento}</Text>
                </View>
            </View>
            )
        }
        if(inst=='Piano') {
            return(
            <View style={{flexDirection:'row', borderBottomColor:'blue',borderBottomWidth:2, marginBottom:10}}>
                <Image style={{width:100, height:100, marginRight: 50}} source={require('../assets/piano.png')} />
                <View style={{marginTop:20}}>
                <Text>{item.name}</Text>
                <Text>
                    <Text style={styles.negrita}>Edad: </Text>
                    <Text>{item.age}</Text>
                </Text>
                <Text style={{color:'orange'}}>{item.instrumento}</Text>
                </View>
            </View>
            )
        }
    }

}

return(
    <View>
    <FlatList 
    data={personas}
    renderItem =  {renderizar}>
    </FlatList>
    </View>


);


}