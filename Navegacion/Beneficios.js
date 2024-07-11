import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    View,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { db } from '../ConexionDB';
import { collection, getDocs } from 'firebase/firestore';

export default function Beneficio() {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = await getDocs(collection(db, 'Usuario'));
                const usersList = usersCollection.docs.map(doc => doc.data());
                setUsers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.userItem}>
            <View style={styles.contenedor_nombre}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.userName}>{item.Nombre}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.izquierda}>
                    <Text style={styles.textologo}>Vida Marina</Text>
                    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                </View>
                <View style={styles.derecha}>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image style={styles.ImageLog2} source={require("../images/logouser.jpg")} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Buscar"
                        style={styles.txtInput}
                    />
                </View>
            </View>
            <View style={styles.botones}>
                <TouchableOpacity onPress={() => navigation.navigate("Inicio")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Beneficios")} style={styles.btnLoginElejido}>
                    <Text style={styles.botonelejido}>Beneficios</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Paises")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Acerca")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Acerca de</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Crecimiento del turismo</Text>
                <LineChart
                    data={{
                        labels: ["Nov 23", "25", "27", "29"],
                        datasets: [
                            {
                                data: [30000, 35000, 40000, 45000, 50000, 55000]
                            }
                        ]
                    }}
                    width={Dimensions.get('window').width - 20}
                    height={220}
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#0A787B",
                        backgroundGradientTo: "#0A787B",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <View style={styles.usersContainer}>
                <Text style={styles.usersTitle}>Participantes:</Text>
                {loading ? <ActivityIndicator size="large" color="#0000ff" /> : 
                    <FlatList
                        data={users}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
            </View>
            <StatusBar style="auto" />
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
    contenedor_nombre: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    botonelejido: {
        fontSize: 13,
        color: "#FFFFFF",
        textAlign: "center",
    },
    botones: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    boton: {
        fontSize: 13,
        color: "#000000",
        textAlign: "center",
    },
    container: {
        flex: 1,
        padding: 10,
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
    chartContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    usersContainer: {
        marginTop: 20,
    },
    usersTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    userItem: {
        paddingLeft: 10,
        paddingTop: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
    },
});
