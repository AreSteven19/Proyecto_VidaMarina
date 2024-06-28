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
import axios from 'axios';

export default function Paises() {
    const navigation = useNavigation();
    const [query, setQuery] = useState('');
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.length > 0) {
            setLoading(true);
            axios.get(`https://restcountries.com/v3.1/name/${query}`)
                .then(response => {
                    setCountries(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        } else {
            setCountries([]);
        }
    }, [query]);

    const renderHeader = () => (
        <View>
            <View style={styles.nav}>
                <View style={styles.izquierda}>
                    <Text style={styles.textologo}>Vida marina</Text>
                    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                </View>
                <View style={styles.derecha}>
                    <TouchableOpacity>
                        <Image style={styles.ImageLog2} source={require("../images/logouser.jpg")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.botones}>
                <TouchableOpacity onPress={() => navigation.navigate("Inicio")} style={styles.btnLogin} >
                    <Text style={styles.boton}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Beneficios")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Beneficios</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Paises")} style={styles.btnLoginElejido}>
                    <Text style={styles.botonelejido}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Acerca")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Acerca de</Text>
                </TouchableOpacity >
            </View>

            <View style={styles.cuadropaises}>
                <TouchableOpacity style={styles.botonespaises}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total de paises</Text>
                    <Text style={styles.botonpais}>189 Paises</Text>
                    <Text style={styles.botonpais}>+2% month over month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonespaises}>
                    <Text style={styles.botonpais}>Por Estado</Text>
                    <Text style={styles.botonpais}>2,405</Text>
                    <Text style={styles.botonpais}>+33% month over month</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {renderHeader()}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar país"
                    value={query}
                    onChangeText={setQuery}
                />
               
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={countries}
                        keyExtractor={item => item.cca3}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text style={styles.countryName}>{item.name.common}</Text>
                                <Text style={styles.region}>{item.region}</Text>
                            </View>
                        )}
                        ListEmptyComponent={!loading && <Text style={styles.noResults}>No se encontraron resultados</Text>}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                )}
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    izquierda: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginLeft: 10,
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
    botones: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
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
    btnLoginElejido: {
        borderRadius: 60,
        width: 90,
        height: 40,
        marginTop: 10,
        alignSelf: "center",
        paddingTop: 10,
        backgroundColor: "#2D6EFF",
    },
    botonelejido: {
        fontSize: 13,
        color: "#FFFFFF",
        textAlign: "center",
    },
    boton: {
        fontSize: 13,
        color: "#000000",
        textAlign: "center",
    },
    botonespaises: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        width: 180,
        height: 120,
        marginTop: 10,
        alignSelf: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
    },
    cuadropaises: {
        display: "flex",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: 200,
    },
    botonpais: {
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
        fontFamily: "Inter",
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginTop: 10, // Añadir margen para separar del cuadro
    },
    listItem: {
        padding: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    countryName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    region: {
        fontSize: 16,
        color: '#666',
    },
    noResults: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
    },
});

