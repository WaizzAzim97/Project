import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {featured} from '../../FeaturedData';
import {useNavigation} from '@react-navigation/native';

const CarouselItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAgency}>{item.agency}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const Carousel = () => {
  const navigation = useNavigation();

  const handlePress = layout => {
    navigation.navigate(layout);
  };
  return (
    <ScrollView horizontal={true} style={styles.carouselContainer}>
      {featured.featured.map(item => (
        <CarouselItem
          item={item}
          key={item.id}
          onPress={() => {
            navigation.navigate('PackageDetails');
          }}
          // onPress={() => handlePress(item.layout)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
