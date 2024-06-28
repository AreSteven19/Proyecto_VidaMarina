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

export default function Recuperar() {
    const navigation = useNavigation();
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textologo}>Recuperar</Text>
                        <Text style={styles.textologo}>Contraseña</Text>
                    </View>
                </View>
                
                <View style={styles.textor}>
                    <Text style={styles.texto}>¿Cómo quieres que te enviemos</Text>
                    <Text style={styles.texto}>el código para restablecer tu </Text>
                    <Text style={styles.texto}>contraseña?</Text>
                    <View style={styles.linea} />

                    <View style={styles.opciones}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                checked={checkbox1}
                                onPress={() => setCheckbox1(!checkbox1)}
                                containerStyle={styles.checkbox}
                            />
                            <Text style={styles.checkboxText}>Enviar codigo por correo</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                checked={checkbox2}
                                onPress={() => setCheckbox2(!checkbox2)}
                                containerStyle={styles.checkbox}
                            />
                            <Text style={styles.checkboxText}>Enviar codigo por Telefono</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <LinearGradient
                        colors={["#5FBCFF", "#5FBCFF"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLogin}>Continuar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <LinearGradient
                        colors={["#E04F46", "#E04F46"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin2}
                    >
                        <Text style={styles.txtLogin}>Cancelar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
        height: 50,
        width: 50,
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
    nav: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
        backgroundColor: "#02A3C7",
        height: 100,
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
