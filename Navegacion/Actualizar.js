import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { db } from '../ConexionDB'; 
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

export default function Actualizar() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('Are@gmail.com');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(true); 
    const [docId, setDocId] = useState(null);
    const [updating, setUpdating] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'Usuario'), where('Correo', '==', email));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    setDocId(userDoc.id);
                    setName(userData.Nombre);
                    setPhone(userData.Numero);
                  
                } else {
                    console.log('No se encontro el usuario');
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }

           
        };

        fetchData();
    }, [email]);

    const handleUpdate = async () => {
        if (docId) {
            setUpdating(true);
            try {
                const userDoc = doc(db, 'Usuario', docId);
                await updateDoc(userDoc, {
                    Nombre: name,
                    Correo: email,
                    Numero: phone
                });
                alert('Información actualizada');
                setUpdating(false);
            } catch (error) {
                console.error("Error al actualizar los datos: ", error);
                alert('Error actualizando la información');
                setUpdating(false);
            }
        }
    };

    const closeOptions = () => {
        if (showOptions) {
            setShowOptions(false);
        }
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={closeOptions}>
            <View style={styles.container}>
                <Text style={styles.title}>Actualizar Perfil</Text>
                <TouchableOpacity style={styles.settingsIcon} onPress={toggleOptions}>
                    <Image source={require('../images/config.jpg')} style={styles.pphoto} />
                </TouchableOpacity>
                {showOptions && (
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Ayudajs")}>
                            <Image source={require('../images/ayudaimagen.jpg')} style={styles.iconPerfil} />
                            <Text style={styles.optionText}>Ayuda</Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 20 }}>_____________________________</Text>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../images/notificacion.png')} style={styles.iconPerfil} />
                            <Text style={styles.optionText}>Notificaciones</Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 20 }}>_____________________________</Text>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../images/logosesion.jpg')} style={styles.iconPerfil} />
                            <Text style={styles.optionText}>Cerrar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.photoContainer}>
                    <Image source={require('../images/logouser.jpg')} style={styles.photo} />
                    <Text style={styles.editPhotoText}>Editar Foto +</Text>
                </View>
                <Text>_____________________________________________</Text>
                <Text style={styles.labeltop}>Cambia tus datos y edita tu información personal.</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Nombre</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nuevo nombre"
                        placeholderTextColor="#6c757d"
                        editable={true} 
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
                        placeholder="Nuevo correo"
                        placeholderTextColor="#6c757d"
                        keyboardType="email-address"
                        editable={true} 
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
                        placeholder="Nuevo número de teléfono"
                        placeholderTextColor="#6c757d"
                        keyboardType="default"
                        editable={true} 
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={handleUpdate}>
                        <Text style={styles.buttonText}>{updating ? "Actualizando Información..." : "Actualizar"}</Text>
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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


