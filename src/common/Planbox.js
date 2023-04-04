import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Planbox = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{width: '100%'}}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.productPrice}>$ {item.price}</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={{color: '#000'}}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.heartButtonContainer}>
          {/* <Image
            style={styles.heartIcon}
            source={require('../images/like.png')}
          /> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default Planbox;
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    elevation: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  productName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
  },
  tPrice: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
});