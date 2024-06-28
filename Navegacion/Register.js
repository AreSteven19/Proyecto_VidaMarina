
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView ,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

 import app from "../ConexionDB";
 import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function Registro() {

  const navigation = useNavigation();
 const db = getFirestore(app);

  //se puede hacer si esto en el UseState se inicia en 0
  const DatosUsuario = {
    Nombre: '',
    Correo: '',
    Contra: '',

  };

  const [EstadoUsuario, setEstado] = useState(DatosUsuario);

  const HandleChangeText = (value, name) => {

    setEstado({ ...EstadoUsuario, [name]: value });
  };


  const EnviarDatosFirebase = async () => {
    try {
      alert("Registro del producto exitoso")
      const docRef = await addDoc(collection(db, "Usuario"), EstadoUsuario);
      navigation.navigate("Login");

    } catch (e) {
      console.error("No se pudo agregar los datos a la base de datos", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>

    <View style={styles.nav}>

    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
    <Text style={styles.textologo}>Registro</Text>


    </View>

    <View style={styles.inputs}>

    

    <View style={styles.inputytext}>
    <Text style={styles.a}>Nombre</Text>
      <TextInput
        placeholder="Nombre Usuario"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Nombre')}
        value={EstadoUsuario.Nombre}
      ></TextInput>
      </View>

      <TextInput
        placeholder="Corro Electronico"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Correo')}
        value={EstadoUsuario.Correo}
      ></TextInput>

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Contra')}
        value={EstadoUsuario.Contra}
      ></TextInput>



      <TouchableOpacity onPress={EnviarDatosFirebase}>
      <LinearGradient
            colors={["#5FBCFF", "#5FBCFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnLogin}
          >
          <Text style={styles.txtLogin}>Crear Cuenta</Text>
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
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  
    height: "100%",
  },
  ImageLog: {
    height: 50,
    width: 50,
    
    

  },
  txtTitulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "left",
    paddingLeft: 30,
  },
  txtSubtitulo: {
    fontSize: 20,
    fontWeight: "light",
    color: "gray",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 20,
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
    marginRight: 50,
    color: "#00C1BB",
    fontSize: 18,
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
    textAlign: "center",
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
   

    backgroundColor: "#02A3C7",
    height: 100,

  },

  textologo: {
    color: "#FFFFFF",
    fontSize: 30,
    paddingLeft: 20,
    fontWeight: "bold"

  },

  inputs: {
    marginTop: 40

  },

  btnLogin2:{
    borderRadius: 10,
    width: 190,
    height: 40,
    marginTop: 40,
    alignSelf: "center",
    paddingTop: 10,

  },




});
