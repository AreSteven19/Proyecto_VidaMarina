import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    SafeAreaView,
    Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

export default function Inicio() {
    const navigation = useNavigation();
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <View style={styles.nav}>

                    <View style={styles.izquierda}>
                        <Text style={styles.textologo}>Vida marina</Text>
                        <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                    </View>

                    <View style={styles.derecha}>
                        <Text style={styles.textologo}>Vida marina</Text>
                        <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                    </View>

                </View>
                
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    izquierda: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#C4BA41",
        marginLeft: 0,
    },

    derecha: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "#C4BA41",
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#02A3C7",
        height: 150,
    },
    opciones: {
        marginTop: 40,
    },
    textor: {
        marginTop: 50,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: 50,
    },
    linea: {
        height: 1,
        backgroundColor: "#000000",
        width: 290,
        marginTop: 30,
    },
    texto: {
        fontSize: 20,
    },
    ImageLog: {
        height: 70,
        width: 70,
        borderRadius: 70,
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: 30,
    },
    btnLogin: {
        borderRadius: 10,
        width: 219,
        height: 53,
        marginTop: 40,
        alignSelf: "center",
        paddingTop: 10,
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
   
    textologo: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
    },
    btnLogin2: {
        borderRadius: 10,
        width: 190,
        height: 40,
        marginTop: 40,
        alignSelf: "center",
        paddingTop: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    checkbox: {
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0,
    },
    checkboxText: {
        fontSize: 18,
        color: "#34434D",
    },
});
