import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const items = [
  { id: 1, name: 'Tour Package 1', agency: 'By Travel Agency', description: 'Description of Item 1' },
  { id: 2, name: 'Tour Package 2',  agency: 'By Travel Agency', description: 'Description of Item 2' },
  { id: 3, name: 'Tour Package 3',  agency: 'By Travel Agency', description: 'Description of Item 3' },
];

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      {/* <Image source={item.image} style={styles.itemImage} /> */}
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAgency}>{item.agency}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );
};

const Carousel = () => {
  return (
    <ScrollView horizontal={true} style={styles.carouselContainer}>
      {items.map(item => <CarouselItem item={item} key={item.id} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 10,
    borderRadius: 10,
  },
  itemContainer: {
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    bottom: 20,
    overflow: 'hidden'
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