import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Planbox = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{width: '100%'}}>
        <Image source={item.image} style={styles.image} />

        <Text style={styles.planName}>{item.name}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.planPrice}>$ {item.price}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PackageDetails');
            }}
            style={styles.addToCartButton}>
            <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 14}}>View</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.heartButtonContainer}>
          <Image
            style={styles.heartIcon}
            source={require('../images/like.png')}
          />
        </TouchableOpacity> */}
        <Text style={styles.planlocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Planbox;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  planName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-BoldItalic',
    color: '#221e22'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
  },
  planPrice: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
  },
  planlocation: {
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat-LightItalic'
  },
  addToCartButton: {
    borderWidth: 0.5,
    paddding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 15,
    padding: 10,
  },
  heartButtonContainer: {
    width: 40,
    elevation: 5,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 20,
  },
  heartIcon: {
    width: 23,
    height: 22,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
