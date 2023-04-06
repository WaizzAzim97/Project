import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Carousel from '../screen/Carousel';
import {planData} from '../../PlanData';
import Planbox from '../common/Planbox';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [transportList, setTransportList] = useState([]);
  const [historicalList, setHistoricalList] = useState([]);
  const [recreationalList, setRecreationalList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setTransportList(planData.category[0].data);
    setHistoricalList(planData.category[1].data);
    setRecreationalList(planData.category[2].data);
    setShoppingList(planData.category[3].data);
    setCategoryList(categories);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../images/header_bg.jpg')}
        resizeMode="cover"
        style={{
          maxHeight: 250,
          flex: 1,
          flexDirection: 'row',
          paddingLeft: 15,
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            marginLeft: 13,
            marginTop: 60,
            color: 'white',
          }}>
          Welcome User
        </Text>
      </ImageBackground>
      

      {/* Category Container Button */}
      {/* <View style={styles.categoryContainer}>
        {categoryList.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.categoryBox}
              onPress={() => {
                navigation.navigate('RecList');
              }}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View> */}
      <View style={styles.categoryContainer}>
        {/* <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={recreationalList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      /> */}

        <TouchableOpacity
          style={styles.categoryBox}
          onPress={() => {
            navigation.navigate('RecList');
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/recreation.png')}
          />
          <Text style={styles.categoryText}>Recreational</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBox}
          onPress={() => {
            navigation.navigate('HistList');
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/history.png')}
          />
          <Text style={styles.categoryText}>Historical</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBox}
          onPress={() => {
            navigation.navigate('TransportList');
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/car-wash.png')}
          />
          <Text style={styles.categoryText}>Transport</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBox}
          onPress={() => {
            navigation.navigate('ShopList');
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/online-shopping.png')}
          />
          <Text style={styles.categoryText}>Shopping</Text>
        </TouchableOpacity>
      </View>
      {/* Carousel Section */}
      <View style={styles.carouselSection}>
        <Text
          style={{
            color: '#000',
            fontSize: 30,
            fontWeight: '400',
            paddingLeft: 20,
            paddingTop: 15,
            paddingBottom: 5,
          }}>
          Popular
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
            <Text style={{color: '#007AFF', fontSize: 15, fontWeight: '400'}}>
              See all
            </Text>
          </TouchableOpacity> */}
        <Carousel />
      </View>
      {/* Plan List Section    */}
      <Text style={styles.heading}>Plan Your Holiday</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={recreationalList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={transportList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={historicalList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={shoppingList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
    </ScrollView>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  categoryList: {
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoryText: {
    color: '#000',
    fontSize: 12,
  },
  heading: {
    marginTop: 20,
    padding: 20,
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBox: {
    width: 150,
    height: 70,
    borderRadius: 10,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  carouselSection: {
    // style={{
    //   flex: 1,
    //   paddingBottom: 10,
    //   backgroundColor: '#d4d4d8',
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    // }}

    flex: 1,
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
