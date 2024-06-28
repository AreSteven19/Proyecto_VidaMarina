import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (

     
      <View style={styles.container}>
        <Image style={styles.ImageLog} source={require("../images/imagenmar.jpg")} />


        <Text style={styles.TxtTitulo}>Bienvenido a</Text>
        <Text style={styles.TxtTitulo}>Vida Marina</Text>
        <Text style={styles.TxtTitulo2}>Ingresa con tu cuenta</Text>
       

        <TextInput
          placeholder="Ejemplo@gmail.com"
          style={styles.txtInput}
        ></TextInput>
        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          style={styles.txtInput}
        ></TextInput>

<TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.txtRegistrarse}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <LinearGradient
            colors={["#5FBCFF", "#5FBCFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnLogin}
          >
            <Text style={styles.txtLogin}>Iniciar Sesion</Text>
          </LinearGradient>
        </TouchableOpacity>

        



        <StatusBar style="auto" />
      </View>
 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageLog: {
    
    height: 190 ,
    width: 200,

  },

  txtInput: {
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 30,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#D9D9D9",
 
    fontSize: 17,
  },
  txtPass: {
    textAlign: "right",
    marginTop: 20,
    marginRight: 40,
    color: "#00C1BB",
    fontSize: 14,
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
  txtCuenta: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
  },
  txtRegistrarse: {
    marginTop: 30,
    textAlign: "center",
    color: "#02A3C7",
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  TxtTitulo: {
    textAlign: "center",
    color: "#000000",
    fontSize: 40,
    alignItems: "center",
    fontWeight: "bold",
  },

  TxtTitulo2: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
});
