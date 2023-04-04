import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({title, bgColor, onPress, textColor}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.button}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 50,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 50,
  },
});
