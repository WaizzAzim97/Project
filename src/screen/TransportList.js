import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Planbox from '../common/Planbox';
import {planData} from '../../PlanData';

const TransportList = () => {
  const [transportList, setTransportList] = useState([]);
  useEffect(() => {
    let categories = [];
    planData.category.map(item => {
      categories.push(item.category);
    });
    setTransportList(planData.category[0].data);
  }, []);

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={transportList}
        renderItem={({item, index}) => {
          return <Planbox item={item} />;
        }}
      />
    </View>
  );
};

export default TransportList;
