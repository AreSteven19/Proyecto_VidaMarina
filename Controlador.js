import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Componentes de las paginas
import Login from './Navegacion/Login';
import Registro from './Navegacion/Register';
import Inicio from './Navegacion/Inicio';
import Recuperar from './Navegacion/Recuperar';
import Profile from './Navegacion/Profile';
import Beneficios from './Navegacion/Beneficios';
import Paises from "./Navegacion/Paises"; './Navegacion/Recuperar';
import Acerca from './Navegacion/Acerca';
import Ayudajs from './Navegacion/Ayudajs';




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
            <Stack.Screen
                name="Beneficios"
                component={Beneficios}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="Paises"
                component={Paises}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="Acerca"
                component={Acerca}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

<Stack.Screen
                name="Ayudajs"
                component={Ayudajs}
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