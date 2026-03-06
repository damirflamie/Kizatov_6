import Icon from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Register extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: '#fff', height: '100%', alignItems: 'center' }}>
                <Image source={require('../images/image.jpg')} style={{ width: '100%', height: '35%' }} />
                
                <Text style={{ fontSize: 30, fontFamily: 'SemiBold' }}>Регистрация</Text>
                <Text style={{ textAlign: 'center', marginHorizontal: 55, opacity: 0.4, fontFamily: 'Regular' }}>
                    Введите свои данные для регистрации.
                </Text>

                {/* Поле Email */}
                <View style={styles.inputContainer}>
                    <Icon name="mail" color="#00716F" size={24} />
                    <TextInput placeholder="Email" style={{ paddingHorizontal: 10 }} />
                </View>

                {/* Поле Пароль */}
                <View style={styles.inputContainer}>
                    <Icon name="lock" color="#00716F" size={24} />
                    <TextInput 
                        placeholder="Пароль" 
                        secureTextEntry={true} 
                        style={{ paddingHorizontal: 10 }} 
                    />
                </View>

                {/* Кнопка Регистрация */}
                <TouchableOpacity 
                    onPress={() => Alert.alert("Успех", "Регистрация прошла успешно")}
                    style={styles.button}
                >
                    <Text style={{ color: 'white', fontFamily: 'SemiBold' }}>Регистрация</Text>
                </TouchableOpacity>

                <Text onPress={() => navigate('Login')} style={{ marginTop: 20 }}>
                    Уже есть аккаунт? Войти
                </Text>
            </View>
        );
    }
}

const styles = {
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: '#00716F',
        borderRadius: 23,
        paddingVertical: 2
    },
    button: {
        backgroundColor: '#00716F',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 23,
        marginTop: 30
    }
};