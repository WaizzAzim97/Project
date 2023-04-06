import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Planbox from '../common/Planbox';
import { planData } from '../../PlanData';

const ShopList = () => {
    const [shoppingList, setShoppingList] = useState([]);
    useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setShoppingList(planData.category[3].data);
  }, []);

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={shoppingList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
    </View>
  );
};

export default ShopList;
