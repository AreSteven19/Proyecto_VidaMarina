import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    View,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Acerca() {
    const navigation = useNavigation();
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <View style={styles.nav}>

                    <View style={styles.izquierda}>
                        <Text style={styles.textologo} >Vida marina</Text>
                        <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                    </View>

                    <View style={styles.derecha}>

                        <TouchableOpacity>
                            <Image style={styles.ImageLog2} source={require("../images/logouser.jpg")} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Buscar"
                            style={styles.txtInput}
                        ></TextInput>

                    </View>

                </View>



                    
                        <View style={styles.botones}>
                        <TouchableOpacity  onPress={() => navigation.navigate("Inicio")} style={styles.btnLogin} >
                        <Text style={styles.boton}>Inicio</Text>
                           </TouchableOpacity  >
                           <TouchableOpacity  onPress={() => navigation.navigate("Beneficios")} style={styles.btnLogin}>
                        <Text style={styles.boton}>Beneficios</Text>
                           </TouchableOpacity>
                           <TouchableOpacity  onPress={() => navigation.navigate("Paises")} style={styles.btnLogin}>
                        <Text style={styles.boton}>Paises</Text>
                           </TouchableOpacity>
                           <TouchableOpacity  onPress={() => navigation.navigate("Acerca")} style={styles.btnLoginElejido}>
                        <Text style={styles.botonelejido}>Acerca de</Text>
                           </TouchableOpacity >
                           </View>
                           
                       

                 

  

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btnLoginElejido: {
        borderRadius: 60,
        width: 90,
        height: 40,
        marginTop: 10,
        alignSelf: "center",
        paddingTop: 10,
        backgroundColor: "#2D6EFF",
    },
    botonelejido:{
      
        fontSize:13,
        color: "#FFFFFF",
        textAlign: "center",
     

    },
    botones:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    
    },
    boton:{
      
        fontSize:13,
        color: "#000000",
        textAlign: "center",
     

    },
    container: {
        height: "100%",
    },
    izquierda: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginLeft: 10
    },
    derecha: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        marginRight: 8,
        padding: 10,

    },
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#02A3C7",
        height: 150,
    },
    textologo: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },
    ImageLog: {
        height: 70,
        width: 70,
        borderRadius: 70,
    },
    ImageLog2: {
        height: 60,
        width: 60,
        marginLeft: 100,
        borderRadius: 70,

    },
    btnLogin: {
        borderRadius: 60,
        width: 90,
        height: 40,
        marginTop: 10,
        alignSelf: "center",
        paddingTop: 10,
        backgroundColor: "#D9D9D9",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
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
    txtInput: {
        width: 180,
        height: 40,
        borderRadius: 10,
        paddingLeft: 30,
        marginTop: 30,
        borderColor: "gray",
        color: "#000000",
        backgroundColor: "#FFFFFF",
        fontSize: 17,
    },
});

