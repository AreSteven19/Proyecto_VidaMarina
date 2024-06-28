import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Componentes de las paginas
import Login from './Navegacion/Login';
import Registro from './Navegacion/Register';
import Inicio from './Navegacion/Inicio';
import Recuperar from './Navegacion/Recuperar';




const Stack = createStackNavigator();

function Controlrutas() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

          
               <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

<Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />
             <Stack.Screen
                name="Recuperar"
                component={Recuperar}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default function Controlador() {
    return (
        <NavigationContainer>
            <Controlrutas />
        </NavigationContainer>
    );
}