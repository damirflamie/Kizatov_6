import Icon from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ backgroundColor: '#FFF', height: '100%' }}>
                {/* Верхняя картинка */}
                <Image 
                    source={require('../images/image.jpg')} 
                    style={{ width: '100%', height: '40%' }} 
                />

                {/* Заголовок */}
                <Text style={{ fontSize: 30, fontFamily: 'SemiBold', alignSelf: 'center' }}>
                    Авторизация
                </Text>

                <Text style={{
                    fontFamily: 'Regular',
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4
                }}>
                    Введите логин и пароль, который создавали ранее при регистрации.
                </Text>

                {/* Поле Логин (Email) */}
                <View style={styles.inputContainer}>
                    <Icon name="mail" color="#8B0000" size={24} />
                    <TextInput 
                        placeholder="Email"
                        style={{ paddingHorizontal: 10, flex: 1 }} 
                    />
                </View>

                {/* Поле Пароль */}
                <View style={styles.inputContainer}>
                    <Icon name="lock" color="#8B0000" size={24} />
                    <TextInput 
                        placeholder="Пароль"
                        secureTextEntry={true} 
                        style={{ paddingHorizontal: 10, flex: 1 }} 
                    />
                </View>

                {/* Красная кнопка Войти */}
                <TouchableOpacity 
                    onPress={() => Alert.alert("Успех", "Авторизация прошла успешно")}
                    style={styles.loginButton}
                >
                    <Text style={{ color: 'white', fontFamily: 'SemiBold' }}>Войти</Text>
                </TouchableOpacity>

                {/* Ссылка на регистрацию */}
                <Text 
                    onPress={() => navigate('Register')}
                    style={{
                        alignSelf: 'center',
                        color: '#8B0000',
                        fontFamily: 'SemiBold',
                        paddingVertical: 30
                    }}>
                    Зарегистрироваться
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 20,
        paddingHorizontal: 10,
        borderColor: '#8B0000', // Темно-красный цвет рамок
        borderRadius: 23,
        paddingVertical: 2
    },
    loginButton: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#8B0000', // Темно-красный цвет кнопки
        paddingVertical: 10,
        borderRadius: 23
    }
});