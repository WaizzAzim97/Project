import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import Map from '../bottom/Map';
import Reviews from '../bottom/Reviews';
import Main from '../bottom/Main';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Main /> : selectedTab == 1 ? <Map /> : <Profile />}
      <View style={styles.bottomTabs}>
        <TouchableOpacity
          style={styles.bottomTabButtons}
          onPress={() => setSelectedTab(0)}>
          <Image
            style={styles.bottomTabIcon}
            source={require('../images/house.png')}
          />
          {/* will use icons */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTabButtons}
          onPress={() => setSelectedTab(1)}>
          <Image
            style={styles.bottomTabIcon}
            source={require('../images/compass.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTabButtons}
          onPress={() => setSelectedTab(2)}>
          <Image
            style={styles.bottomTabIcon}
            source={require('../images/user.png')}
          />
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
    backgroundColor: '#fffcf2',
    zIndex: 1000,
    height: 50,
    flexDirection: 'row',
    elevation: 100,
    borderRadius: 3,
  },
  bottomTabButtons: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 25,
    height: 25,
  },
});
