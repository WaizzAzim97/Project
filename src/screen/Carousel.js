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
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.carouselContainer}>
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
    width: '100%',
  },
  itemContainer: {
    elevation: 5,
    height: 350,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 355,
    height: 250,
    marginBottom: 10,
    bottom: 20,
    overflow: 'hidden',
  },
  itemName: {
    fontFamily: 'Montserrat-ExtraBoldItalic', 
    fontSize: 16,
    marginBottom: 5,
  },
  itemAgency: {
    fontSize: 13,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
});

export default Carousel;
