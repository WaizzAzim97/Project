import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Carousel from '../screen/Carousel';
import {planData} from '../../PlanData';
import Planbox from '../common/Planbox';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [transportList, setTransportList] = useState([]);
  const [historicalList, setHistoricalList] = useState([]);
  const [recreationalList, setRecreationalList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [tourPackageList, setTourPackageList] = useState([]);
  const [jacketList, setJacketList] = useState([]);

  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setTransportList(planData.category[0].data);
    setHistoricalList(planData.category[1].data);
    setHistoricalList(planData.category[2].data);
    setRecreationalList(planData.category[3].data);
    setShoppingList(planData.category[4].data);
    setTourPackageList(planData.category[5].data);
    setCategoryList(categories);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          marginLeft: 25,
          marginTop: 30,
          marginBottom: 5,
        }}>
        Welcome User
      </Text>

      <View style={{marginTop: 20}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.categoryList}>
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Carousel Section */}
      <View
        style={{
          flex: 1,
          padding: 20,
          marginTop: 10,
          backgroundColor: '#d4d4d8',
        }}>
        <View
          style={{
            flex: 1,
            paddingBottom: 10,
            backgroundColor: '#d4d4d8',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: '400'}}>
            Featured
          </Text>
          {/* onPress={() => navigation.navigate('Lists')} */}
          <TouchableOpacity>
            <Text style={{color: '#007AFF', fontSize: 15, fontWeight: '400'}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
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
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    marginTop: 20,
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
});
