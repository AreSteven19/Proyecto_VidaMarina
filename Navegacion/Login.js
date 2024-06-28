import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../ConexionDB"

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Éxito", "Inicio de sesión exitoso."); 
      navigation.navigate("Main");
    } catch (error) {
     
      Alert.alert("Correo Electronico o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../images/imagenmar.jpg")} />

      <Text style={styles.TxtTitulo}>Bienvenido a</Text>
      <Text style={styles.TxtTitulo}>Vida Marina</Text>
      <Text style={styles.TxtTitulo2}>Ingresa con tu cuenta</Text>

      <TextInput
        placeholder="Ejemplo@gmail.com"
        style={styles.txtInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.txtRegistrarse}>¿Has olvidado tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
          colors={["#5FBCFF", "#5FBCFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Iniciar Sesión</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.contenedorreg}>
        <Text>No tienes cuenta.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.botonregis}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageLog: {
    height: 190,
    width: 200,
  },
  txtInput: {
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 30,
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
    fontWeight: "bold",
  },
  TxtTitulo2: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
  contenedorreg: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
  },
  botonregis: {
    color: "#02A3C7",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
