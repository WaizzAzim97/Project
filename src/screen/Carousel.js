import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {featured} from '../../FeaturedData';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAgency}>{item.agency}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );
};

const Carousel = () => {
  return (
    <ScrollView horizontal={true} style={styles.carouselContainer}>
      {featured.featured.map(item => (
        <CarouselItem item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 10,
    borderRadius: 10,
  },
  itemContainer: {
    height: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 300,
    height: 250,
    marginBottom: 10,
    bottom: 20,
    overflow: 'hidden',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  itemAgency: {
    fontSize: 13,
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Carousel;
