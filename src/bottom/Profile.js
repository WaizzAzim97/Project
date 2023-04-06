import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    let name = '';
    const navigation = useNavigation();

    useEffect(() => {
        getUseData();
    }, []);

    const getUseData = async () => {
        name = await AsyncStorage.getItem('NAME');
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginLeft: 15,
                    }}>
                    Profile
                </Text>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {/* <Image
                        style={{
                            width: 24,
                            height: 24,
                        }}
                        source={require('../images/settings.png')}
                    /> */}
                </TouchableOpacity>
            </View>
            <Image
                source={require('../images/profile.png')}
                style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 30 }}
            />
            <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}>
                Ali
            </Text>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    marginTop: 20,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.navigate('Login');
                }}>
                <Text>My Address</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    marginTop: 20,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.navigate('Login');
                }}>
                <Text>My Packages</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    marginTop: 20,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.navigate('Login');
                }}>
                <Text>My Saved</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
