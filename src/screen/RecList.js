import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Planbox from '../common/Planbox';
import { planData } from '../../PlanData';

const RecList = () => {
  const [recreationalList, setRecreationalList] = useState([]);
  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setRecreationalList(planData.category[2].data);
  }, []);

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={recreationalList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
    </View>
  );
};

export default RecList;
