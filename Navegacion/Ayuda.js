import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Ayuda() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textologo}>Ayuda</Text>
                    </View>
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/ayuda.png')} style={styles.iconPerfil} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>Centro de Ayuda</Text>
                            <Text style={styles.optionText}>Obten Ayuda, Contactenos.</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 40 }}>______________________________________________________</Text>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/politicas.png')} style={styles.iconPerfil} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>Condiciones y Politicas de</Text>
                            <Text style={styles.optionText}> Privacidad</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 40 }}>______________________________________________________</Text>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/Info_logo.png')} style={styles.iconPerfil} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>Info. de la aplicacion</Text>

                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 40,marginBottom:50} }>______________________________________________________</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
                        <Text style={styles.buttonText}>Regresar</Text>
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff",
    },
    ImageLog: {
        height: 50,
        width: 50,
        borderRadius: 70,

    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: 30,
    },
    nav: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
        backgroundColor: "#02A3C7",
        height: 100,
        marginBottom: 30,
    },
    textologo: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 60,
    },
    optionsContainer: {
        flexDirection: "column",
    },
    labeltop: {
        marginTop: 15,
        fontSize: 10,
        color: '#7D7D7D',
        marginBottom: 35,
    },
    iconPerfil: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
    },
    optionTextContainer: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },

    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        borderRadius: 20,
        marginHorizontal: 5,
        margintop: 30,
        marginTop: 20,
        backgroundColor: '#FD800D',
marginLeft:100,
    },
 
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

});
