import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Planbox from '../common/Planbox';
import { planData } from '../../PlanData';

const HistList = () => {
  const [historicalList, setHistoricalList] = useState([]);
  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setHistoricalList(planData.category[1].data);
  }, []);

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={historicalList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
    </View>
  );
};

export default HistList;
