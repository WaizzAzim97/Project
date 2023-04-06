import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = () => {
  let name = '';

  const navigation = useNavigation();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 15}}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            aligntItems: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
            source={require('../images/settings.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../images/profile.png')}
        style={{width: 80, height: 80, alignSelf: 'center', marginTop: 30}}
      />
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        User
      </Text>
      <TouchableOpacity
        style={styles.block}
         onPress={() => {
           navigation.navigate('Login');
         }}
      >
        {/* <Image
          source={require('../images/ramen.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        /> */}
        <Text>Username</Text>
        <Text>--</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.block}
        // onPress={() => {
        //   navigation.navigate('Login');
        // }}
      >
        {/* <Image
          source={require('../images/eye.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        /> */}
        <Text>User Email</Text>
        <Text> --</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderBottomWidth: 0.3,
    marginTop: 20,
    borderBottomColor: '#5a5b6d',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
