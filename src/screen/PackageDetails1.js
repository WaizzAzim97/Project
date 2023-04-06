import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {Linking} from 'react-native';

const {width} = Dimensions.get('window');

const images = [
  require('../images/ulu1.jpg'),
  require('../images/ulu2.jpg'),
  require('../images/ulu3.jpg'),
  require('../images/ulu4.jpg'),
  require('../images/ulu5.jpg'),
];

const PackageDetails1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleWhatsAppPress = () => {
    Linking.openURL(
      'https://wa.me/6738833123?text=Im%20interested%20in%20this%20package',
    );
  };
  const renderSlide = ({item}) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={item}
          resizeMode="cover"
          style={{
            flex: 1,
            width: width,
            flexDirection: 'row',
          }}
        />
      </View>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
      flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={renderSlide}
          keyExtractor={(item, index) => index.toString()}
          onMomentumScrollEnd={event => {
            const index = Math.floor(event.nativeEvent.contentOffset.x / width);
            setActiveIndex(index);
          }}
        />
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.title}>Complete Rainforest Experience</Text>
        <Text style={styles.description}>By Travel Agency</Text>
        <Text style={styles.description}>From BND$100.00 {'\n'} </Text>
        <Text style={styles.title2}>Duration: 3 Days 2 Nights</Text>
        <Text style={styles.title2}>Highlights: </Text>
        <Text style={styles.description}>
          Sumbiling Eco Village | Rainforest Discovery | Ulu Temburong National
          Park | Canopy Walk | Nature Fish Spa | Waterfall
        </Text>
        <Text style={styles.title2}>{'\n'}Short Itinerary</Text>
        <Text style={styles.heading}>Day 1 – Afternoon (3.00pm)</Text>
        <Text style={styles.listItem}>Meet at Sumbiling Eco Village (SEV)</Text>
        <Text style={styles.listItem}>Welcome by local guide at SEV</Text>
        <Text style={styles.listItem}>Check in to accommodation</Text>
        <Text style={styles.listItem}>
          Free & leisure. Relax in the river or take a walk to the village and
          its surrounding.
        </Text>

        <Text style={styles.heading}>Evening</Text>
        <Text style={styles.listItem}>Dinner</Text>
        <Text style={styles.listItem}>Night forest walk.</Text>

        <Text style={styles.heading}>Day 2 – Morning</Text>
        <Text style={styles.listItem}>
          Breakfast & get ready for the day (flexible)
        </Text>
        <Text style={styles.listItem}>
          Start Rainforest Discovery trek OR Ulu Temburong National Park
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            borderRadius: 30,
            width: '80%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleWhatsAppPress}>
          <Text style={{color: '#fff', fontSize: 20}}>Contact Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 350,
    width: Dimensions.get('window').width,
    marginTop: 0,
    marginBottom: 0,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
    height: 150,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#d4d4d4',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  secondSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 4,
    color: '#666',
  },
});

export default PackageDetails1;
