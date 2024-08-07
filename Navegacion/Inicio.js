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
    FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import YoutubePlayer from 'react-native-youtube-iframe';

const consejos = [
    { id: '1', consejo: 'Reduce el uso de plásticos de un solo uso.' },
    { id: '2', consejo: 'Participa en limpiezas de playas.' },
    { id: '3', consejo: 'Usa productos de limpieza ecológicos.' },
    { id: '4', consejo: 'Elige productos de pesca sostenible.' },
    { id: '5', consejo: 'Educa a otros sobre la importancia de los océanos.' },
];

export default function Inicio() {
    const navigation = useNavigation();
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <View style={styles.cell}>
                <Text style={styles.cellText}>Consejo {item.id}</Text>
            </View>
            <View style={styles.cell}>
                <Text style={styles.cellText}>{item.consejo}</Text>
            </View>
        </View>
    );

    const ListHeader = () => (
        <>
            <View style={styles.nav}>
                <View style={styles.izquierda}>
                    <Text style={styles.textologo}>Vida marina</Text>
                    <Image style={styles.ImageLog} source={require("../images/logo.jpg")} />
                </View>
                <View style={styles.derecha}>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image style={styles.ImageLog2} source={require("../images/logouser.jpg")} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Buscar"
                        style={styles.txtInput}
                    ></TextInput>
                </View>
            </View>

            <View style={styles.botones}>
                <TouchableOpacity onPress={() => navigation.navigate("Inicio")} style={styles.btnLoginElejido}>
                    <Text style={styles.botonelejido}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Beneficios")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Beneficios</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Paises")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Paises</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Acerca")} style={styles.btnLogin}>
                    <Text style={styles.boton}>Acerca de</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.video}>
                <YoutubePlayer
                    height={250}
                    width={"100%"}
                    play={false}
                    videoId={'PDJwWzH96u0'}
                />
            </View>

            <View style={styles.consejosHeaderContainer}>
                <Text style={styles.header}>Consejos Importantes</Text>
            </View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={consejos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={ListHeader}
            />
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
    video: {
        marginTop: 20
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
    consejos: {
        backgroundColor: "#02A3C7",
        padding: 10,
        borderRadius: 10,

        marginHorizontal: 10,
    },
    consejosHeaderContainer: {
        backgroundColor: "#02A3C7",
        padding: 10,
        borderRadius: 10,
     
        marginHorizontal: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 10,
    },
    table: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000000',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#000000',
    },
    cellText: {
        fontSize: 16,
        color: "#000000",
    },
    lastCell: {
        borderRightWidth: 0,
    },
});

