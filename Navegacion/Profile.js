import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function Profile() {
    const [name, setName] = useState('Juan de olla');
    const [description, setDescription] = useState('Descripción opcional');
    const [email, setEmail] = useState('juanejemplo@gamil.com');
    const [phone, setPhone] = useState('XXXX - XX00');
    const [showOptions, setShowOptions] = useState(false);

    const navigation = useNavigation();

    const handleUpdate = () => {
        // Lógica para actualizar la información del perfil
        alert('Información actualizada');
    };

    const closeOptions = () => {
        if (showOptions) {
            setShowOptions(false);
        }}
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <TouchableWithoutFeedback onPress={closeOptions}>
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <TouchableOpacity style={styles.settingsIcon} onPress={toggleOptions}>
                <Image source={require('../images/config.png')} style={styles.pphoto} />
            </TouchableOpacity>
            {showOptions && (
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/ayuda.png')} style={styles.iconPerfil} />
                        <Text style={styles.optionText}>Ayuda</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20}}>_________________________________</Text>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/notificacion.png')} style={styles.iconPerfil} />
                        <Text style={styles.optionText}>Notificaciones</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20}}>_________________________________</Text>
                    <TouchableOpacity style={styles.option}>
                        <Image source={require('../images/logosesion.png')} style={styles.iconPerfil} />
                        <Text style={styles.optionText}>Cerrar Sesion</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.photoContainer}>
                <Image source={require('../images/logo_perfil.png')} style={styles.photo} />
                <Text style={styles.editPhotoText}>Editar Foto +</Text>
            </View>
            <Text >_________________________________________________</Text>
            <Text style={styles.labeltop}>Cambia tus datos y edita tu informacion personal.</Text>

            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Nombre</Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nombre"
                    placeholderTextColor="#6c757d"
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Descripción</Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Descripción"
                    placeholderTextColor="#6c757d"
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Correo</Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Correo"
                    placeholderTextColor="#6c757d"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Teléfono</Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Teléfono"
                    placeholderTextColor="#6c757d"
                    keyboardType="phone-pad"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => navigation.navigate("Inicio")}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    settingsIcon: {
        position: 'absolute',
        top: 25,
        left: 20,

    },
    optionsContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 60,
        left: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
        zIndex: 1,
        width: 250,
        height: 190,
    },
    iconPerfil: {
        width: 30,
        height: 30,
        borderRadius: 20,

    },

    pphoto: {
        width: 75,
        height: 75,
        borderRadius: 20,
        marginTop: 65,

    },
    option: {
        marginLeft: 10,
        flexDirection: 'row',
        padding: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 10,
    },
    photoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        width: 224,
        height: 209,
        padding: 10,
        borderRadius: 150,
        marginBottom: 10,
    },
    photo: {
        width: 250,
        height: 150,
        borderRadius: 50,
        marginTop: 50,

        color: '#D9D9D9',
    },
    editPhotoText: {
        backgroundColor: "#B2DBE0",
        marginBottom: 50,
        paddingBottom: "30",
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },
    labeltop: {
        marginTop: 15,
        fontSize: 10,
        color: '#7D7D7D',
        marginBottom: 35,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

    },
    labelContainer: {
        width: 100,
        height: 50,
        marginRight: '5',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02A3C7',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderRadius: 20,
    },
    label: {
        color: '#000000',
 
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',

    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
        marginBottom: 10,
    },
    updateButton: {
        backgroundColor: '#5FBCFF',
    },
    cancelButton: {
        backgroundColor: '#E04F46',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

