import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import Map from '../bottom/Map';
import Reviews from '../bottom/Reviews';
import Main from '../bottom/Main';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Map />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Reviews />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.bottomTabButtons}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabButtons}>
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabButtons}>
          <Text>WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabButtons}>
          <Text>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTabButtons}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'green',
    zIndex: 1000,
    height: 70,
    flexDirection: 'row',
    elevation: 5,
  },
  bottomTabButtons: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
