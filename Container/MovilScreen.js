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

export default function MovilScreen() {
    return(
        <ScrollView>
        <View style={{margin:20,alignItems:'center'}}>
        <Text style={styles.negrita}>Bienvenido a la historia de los dispositivos</Text>
        <Text></Text>
        <Image style={{width: 200, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_SX679_.jpg'}}/>
        <Text style={styles.negrita}>El Nokia 3310</Text>
        <Text>
        <Text style={styles.negrita}>Fecha de lanzamiento: </Text>
        <Text>primer trimestre del año 2000</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Historia: </Text>
        <Text style={{marginBottom:20}}>El Nokia 3310 es un teléfono móvil o GSM de dos bandas: GSM 900/1800. Fue lanzado en el primer 
        trimestre del año 2000, reemplazando al popular Nokia 3210 de forma satisfactoria y rentable, siendo uno de los teléfonos más 
        populares hasta ahora, con más de 100 millones de unidades vendidas. El terminal ha sido relanzado a la venta en el 2017 en una 
        versión moderna, con pantalla a color, sistema Nokia Series 30+, conectividad 3G, cámara fotográfica 2Mpx y Bluetooth 3.0.</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Conclusión: </Text>
        <Text>Su venta se detuvo para volverse a relanzar con una pantalla a color y un terminal más moderno en el 2017</Text>
        </Text>
        <Text></Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>
        <Image style={{width: 200, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/61N4H1Iha5L._AC_SY879_.jpg'}}/>
        <Text style={styles.negrita}>El Sony Xperia Z1</Text>
        <Text>
        <Text style={styles.negrita}>Fecha de lanzamiento: </Text>
        <Text>15 de septiembre - 23 de octubre de 2013</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Historia: </Text>
        <Text style={{marginBottom:20}}>El Sony Xperia Z1 es un teléfono inteligente de gama alta, de la marca Sony. El Z1, conocido bajo el proyecto "Honami", fue revelado durante la conferencia de prensa en la IFA 2013 el 4 de septiembre de 2013. Lanzado el 15 de septiembre de 2013 en China, en el Reino Unido el 20 de septiembre de 2013, y en los demás mercados llegó en octubre de 2013. El 13 de enero de 2014, tuvo una versión modificada exclusiva para T-Mobile US, que por ende solo fue liberada en los Estados Unidos..</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Conclusión: </Text>
        <Text>Su venta no se ha detenido hasta la fecha, aún puede ser comprado en tiendas como Fnac</Text>
        </Text>
        <Text></Text>
        <Image style={{width: 200, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/41NV56EX26L._AC_.jpg'}}/>
        <Text style={styles.negrita}>El Nokia 8800</Text>
        <Text>
        <Text style={styles.negrita}>Fecha de lanzamiento: </Text>
        <Text>7 de Abril de 2005</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Historia: </Text>
        <Text style={{marginBottom:20}}>El Nokia 8800 (pronunciado ochenta y ochocientos ) es un teléfono móvil de lujo producido por Nokia , basado en el sistema operativo Nokia Serie 40 . El 8800 cuenta con una carcasa de acero inoxidable con una pantalla resistente a los arañazos y tiene un peso de 134 gramos . Según Nokia, el "sofisticado mecanismo de deslizamiento del 8800 utiliza cojinetes de bolas de primera calidad fabricados por los fabricantes de cojinetes utilizados en coches de alto rendimiento".</Text>
        </Text>
        <Text>
        <Text style={styles.negrita}>Conclusión: </Text>
        <Text>Su venta no se ha detenido hasta la fecha, aún puede ser comprado online en Amazon.</Text>
        </Text>
        </View>
    </ScrollView>
);


}