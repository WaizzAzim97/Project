import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Carousel from '../screen/Carousel';
import {planData} from '../../PlanData';
import Planbox from '../common/Planbox';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [tShirtList, setTShirtList] = useState([]);
  const [shoeList, setShoeList] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [jacketList, setJacketList] = useState([]);

  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setTShirtList(planData.category[0].data);
    setJeansList(planData.category[1].data);
    setShoeList(planData.category[2].data);
    setJacketList(planData.category[3].data);
    setSlipperList(planData.category[4].data);
    setTrouserList(planData.category[5].data);
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
      <Carousel />

      <Text style={styles.heading}>Plan Your Holiday</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={tShirtList}
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
