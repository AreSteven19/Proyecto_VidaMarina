import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../ConexionDB"; // Asegúrate de importar correctamente

export default function Registro() {
  const navigation = useNavigation();

  const DatosUsuario = {
    Nombre: "",
    Numero: "",
    Correo: "",
    Contra: "",
    Confirm: "",
  };

  const [EstadoUsuario, setEstado] = useState(DatosUsuario);

  const HandleChangeText = (value, name) => {
    setEstado({ ...EstadoUsuario, [name]: value });
  };

  const EnviarDatosFirebase = async () => {
    if (EstadoUsuario.Contra !== EstadoUsuario.Confirm) {
      Alert.alert("Error", "La confirmación de la contraseña no coincide.");
      return;
    }

    for (const key in EstadoUsuario) {
      if (EstadoUsuario[key].trim() === "") {
        Alert.alert("Error", `El campo ${key} está vacío.`);
        return;
      }
    }

    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        EstadoUsuario.Correo,
        EstadoUsuario.Contra
      );
      const user = userCredential.user;

      // Almacenar información adicional en Firestore
      await addDoc(collection(db, "Usuario"), {
        uid: user.uid,
        Nombre: EstadoUsuario.Nombre,
        Numero: EstadoUsuario.Numero,
        Correo: EstadoUsuario.Correo,
      });

      Alert.alert("Registro exitoso");
      navigation.navigate("Login");
    } catch (e) {
      console.error("No se pudo registrar el usuario", e);
      Alert.alert("Error", e.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
          <Text style={styles.textologo}>Ingresar Registro</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.inputytext}>
            <Text style={styles.label}>Ingresar Nombre de Usuario</Text>
            <TextInput
              placeholder="Nombre Usuario"
              style={styles.txtInput}
              onChangeText={(value) => HandleChangeText(value, "Nombre")}
              value={EstadoUsuario.Nombre}
            />
          </View>

          <View style={styles.inputytext}>
            <Text style={styles.label}>Ingresar Número Télefonico</Text>
            <TextInput
              placeholder="Número de teléfono"
              style={styles.txtInput}
              onChangeText={(value) => HandleChangeText(value, "Numero")}
              value={EstadoUsuario.Numero}
            />
          </View>

          <View style={styles.inputytext}>
            <Text style={styles.label}>Ingresar Correo</Text>
            <TextInput
              placeholder="Correo"
              style={styles.txtInput}
              onChangeText={(value) => HandleChangeText(value, "Correo")}
              value={EstadoUsuario.Correo}
            />
          </View>
          <View style={styles.inputytext}>
            <Text style={styles.label}>Ingresar Contraseña</Text>
            <TextInput
              placeholder="Contraseña"
              secureTextEntry={true}
              style={styles.txtInput}
              onChangeText={(value) => HandleChangeText(value, "Contra")}
              value={EstadoUsuario.Contra}
            />
          </View>

          <View style={styles.inputytext}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <TextInput
              placeholder="Confirmar contraseña"
              secureTextEntry={true}
              style={styles.txtInput}
              onChangeText={(value) => HandleChangeText(value, "Confirm")}
              value={EstadoUsuario.Confirm}
            />
          </View>

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
    borderRadius: 70,
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
    marginTop: 10,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#D9D9D9",
    fontSize: 17,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 20,
    color: "#34434D",
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
    fontWeight: "bold",
  },
  inputytext: {
    width: "100%",
  },
  btnLogin2: {
    borderRadius: 10,
    width: 190,
    height: 40,
    marginTop: 40,
    alignSelf: "center",
    paddingTop: 10,
  },
});
